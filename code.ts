const SPACING = 20
const requests = {}
const imageCache = {}

// console.log('selection', figma.currentPage.selection)
// console.log(this, figma)
figma.showUI(__html__, {
  width: 400,
  height: 300,
})

figma.ui.onmessage = async msg => {
  const { data } = tryParse(msg)
  if (msg.type === 'notify') {
    return figma.notify(msg.data)
  }
  if (requests[msg.id]) {
    requests[msg.id].resolve(data)
    return
  }
  if (msg.type === 'request:selection') {
    for (var i = 0; i < 10; ++i) {
      const selection = getOriginalSelection()
      if (selection) {
        return responseMessage(msg, [fromSelection(selection)])
      }
      await delay(1000)
    }
    const selection = getOriginalSelection()
    if (selection) {
      return responseMessage(msg, [fromSelection(selection)])
    }
    return responseMessage(msg, [])
  }
  if (msg.type === 'request:texts') {
    // responseMessage(msg, getTexts([getOriginalSelection()]))
    // return
    return figma.notify('deprecated')
  }
  if (msg.type === 'request:saveAirtableLink') {
    figma.notify('link saved')
    setPluginJSON('airtableLink', data || '')
    responseMessage(msg, 'ok')
    return
  }
  if (msg.type === 'request:saveAirtableData') {
    setPluginJSON('airtableData', data || [])
    responseMessage(msg, 'ok')
    return
  }

  if (msg.type === 'request:renderAirtable') {
    const { airtableRows, airtableConfig } = data
    const { mapping, images } = airtableConfig
    const limit = airtableConfig.limit || 100
    const spacing = parseInt(airtableConfig.spacing) || 20
    const grid = ['columns', 'grid'].includes(airtableConfig.grid)
      ? airtableConfig.grid
      : 'rows'
    const columnCount =
      airtableConfig.grid === 'grid'
        ? parseInt(airtableConfig.columns) || 3
        : airtableConfig.grid === 'columns'
        ? 100
        : 1
    const rowCount = Math.ceil(limit / columnCount) || 1

    const original = getOriginalSelection()
    if (!original) {
      responseMessage(msg, 'sync:selection')
      console.log('selection', figma.currentPage.selection)
      return figma.notify('No frame selected')
    }

    setPluginJSON('airtableConfig', airtableConfig)

    const instance = getFrame(original)
    if (!instance) {
      responseMessage(msg, 'sync:selection')
      console.log('selection', figma.currentPage.selection)
      return figma.notify('No frame selected')
    }

    if (!airtableRows) {
      console.warn('no rows', airtableRows)
      responseMessage(msg, 'error')
      return figma.notify('No rows from Airtable')
    }

    if (!mapping.find(col => col.airtableField)) {
      console.warn('no fields mapped', mapping)
      responseMessage(msg, 'error')
      return figma.notify('No fields mapped')
    }

    const textLookup = getArrayMapping(original, mapping)
    const imageLookup = getArrayMapping(original, images)

    await loadFonts(mapping)

    // console.log('lo', textLookup)
    const instanceId = instance.id
    instance.setPluginData('clonedFrom', instanceId)
    const parent = instance.parent
    const focus = []
    focus.push(instance)
    let y = instance.y
    let x = instance.x
    let height = instance.height
    let width = instance.width
    let first = true

    let i = 0
    for (let r = 0; r < rowCount; r++) {
      for (
        let c = 0;
        c < columnCount && i < airtableRows.length && i < limit;
        c++
      ) {
        const rowData = airtableRows[i]
        const clone = first
          ? instance
          : instance.type === 'COMPONENT'
          ? fromComponent(instance)
          : instance.clone()
        first = false

        const subs = clone.findAll(() => true)
        // console.log('subs', subs)
        subs.forEach((sub, i) => interpolateText(sub, rowData[textLookup[i]]))
        subs.forEach((sub, i) => interpolateImage(sub, rowData[imageLookup[i]]))

        parent.appendChild(clone)
        clone.y = y + (height + spacing) * r
        clone.x = x + (width + spacing) * c
        clone.setPluginData('clonedFrom', instanceId)
        // clone.locked = true

        focus.push(clone)
        i++
      }
    }
    // TODO: saved

    // Update selection
    figma.currentPage.selection = focus
    // figma.viewport.scrollAndZoomIntoView(focus)
    responseMessage(msg, 'ok')
    return
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin()
}

function loadFonts(mapping) {
  return Promise.all(
    mapping.map(node => figma.getNodeById(node.id)).map(loadFont)
  )
}

function loadFont(node) {
  return node.type === 'TEXT' && figma.loadFontAsync(node.fontName)
}

function getArrayMapping(instance, mapping) {
  return instance
    .findAll(() => true)
    .map(node => mapping.find(n => n.id === node.id))
    .map(f => f && f.airtableField)
}

function interpolateText(node, value) {
  if (value) {
    const { name } = node
    node.characters = String(value)
    if (node.name === node.characters) {
      node.name = name
    }
    return
  }
  // if (node.type === 'TEXT') {
  //   node.characters = templateHash(node.characters, row)
  // }
}

async function interpolateImage(node, value) {
  if (value && value[0] && value[0].largeThumbUrl) {
    const image = await downloadImage(value[0].largeThumbUrl)
    const paint = JSON.parse(JSON.stringify(node.fills[0]))
    paint.imageHash = figma.createImage(new Uint8Array(image)).hash
    node.fills = [paint].concat(node.fills.slice(1))
    return
  }
}

function downloadImage(url) {
  if (!imageCache[url]) {
    imageCache[url] = requestMessage('downloadImage', url)
  }
  return imageCache[url]
}

function templateHash(text, data) {
  if (data) {
    Object.keys(data).forEach(key => {
      text = text.replace('#' + key, data[key])
    })
  }
  return text
}

function getOriginalSelection() {
  const instance = figma.currentPage.selection[0]
  if (!instance) {
    return instance
  }

  if (
    instance.type !== 'INSTANCE' &&
    instance.type !== 'FRAME' &&
    instance.type !== 'COMPONENT'
  ) {
    return null
  }

  const id = instance.getPluginData('clonedFrom')
  return (id && figma.getNodeById(id)) || instance
}

function getFrame(instance?: BaseNode) {
  if (!instance) {
    return console.warn('no selection')
  }

  // console.log('clonedfrm', instance, instance.getPluginData('clonedFrom'))

  // Start from cloned node
  // {
  //   const id = instance.getPluginData('clonedFrom')
  //   const node = figma.getNodeById(id)
  //   if (node && id && id !== instance.id) {
  //     console.log('indirect instance')
  //     instance = node
  //   } else if (id && !node) {
  //     console.log('old clone')
  //     instance.setPluginData('clonedFrom', null)
  //   }
  // }

  // Start from component
  if (instance.type === 'COMPONENT') {
    // const parent = instance
    // instance = instance.createInstance()
    // // To the right
    // instance.x = parent.x + parent.width + SPACING
    // instance.y = parent.y
    // figma.currentPage.selection = [instance]
    // figma.viewport.scrollAndZoomIntoView(focus)
  }

  // Start from frame
  if (instance.type === 'FRAME') {
    // Use frame as is
    // const parent = instance
    // instance = instance.clone()
    // // To the right
    // instance.x = parent.x + parent.width + SPACING
    // instance.y = parent.y
  }

  // Start from cloned node
  const id = instance.getPluginData('clonedFrom')
  const node = figma.getNodeById(id)
  if (node && id && id !== instance.id) {
    console.log('indirect instance')
    instance = node
  } else if (id && !node) {
    console.log('old clone')
    instance.setPluginData('clonedFrom', null)
  }

  if (node) {
    const toRemove = []
    const id = instance.id
    traverse(figma.currentPage, node => {
      if (node.getPluginData('clonedFrom') === id && node.id !== id) {
        toRemove.push(node)
      }
    })
    toRemove.forEach(node => node.remove())
    // console.log('toremo', toRemove.length)
  }

  if (
    !instance ||
    (instance.type !== 'INSTANCE' &&
      instance.type !== 'FRAME' &&
      instance.type !== 'COMPONENT')
  ) {
    return console.warn('no instance')
  }
  return instance
}

function fromComponent(parent) {
  const instance = parent.createInstance()

  // To the right
  instance.x = parent.x + parent.width + SPACING
  instance.y = parent.y
  return instance
}

function getTexts(layer) {
  if (!layer) return []
  const texts = []
  traverse(layer, layer => {
    if (layer.type === 'TEXT') {
      texts.push({
        id: layer.id,
        name: layer.name,
        characters: layer.characters,
      })
    }
  })
  return texts
}

function getImages(layer) {
  if (!layer) return []
  const images = []
  traverse(layer, layer => {
    if (layer.fills && layer.fills[0] && layer.fills[0].type === 'IMAGE') {
      images.push({
        id: layer.id,
        name: layer.name,
        imageHash: layer.fills[0].imageHash,
      })
    }
  })
  console.log('getImages', images)
  return images
}

function traverse(node: BaseNode | Array<BaseNode>, func) {
  if (Array.isArray(node)) {
    return node.map(n => traverse(n, func))
  }
  func(node)
  if ('children' in node) {
    for (const child of node.children) {
      traverse(child, func)
    }
  }
}

function detectConfig() {
  // To implement
  // Read selection metadata
  // post metadata to plugin
}

function requestMessage(type, data) {
  // Store all requests in one object and handle in global onmessage
  const id = Math.random().toString(36)
  return new Promise<any>(resolve => {
    console.log('requestmessage', type, data)
    requests[id] = { resolve }
    figma.ui.postMessage({
      id,
      type: 'request:' + type,
      data: JSON.stringify(data),
    })
  })
}
// function requestMessage(msg, data) {
//   figma.ui.postMessage({
//     id: msg.id,
//     type: msg.type.replace('request:', 'response:'),
//     data: JSON.stringify(data),
//   })
// }

function responseMessage(msg, data) {
  figma.ui.postMessage({
    id: msg.id,
    type: msg.type.replace('request:', 'response:'),
    data: JSON.stringify(data),
  })
}

function fromSelection(node) {
  return {
    id: node.id,
    type: node.type,
    airtableLink: getPluginJSON(node, 'airtableLink'),
    airtableData: getPluginJSON(node, 'airtableData'),
    airtableConfig: getPluginJSON(node, 'airtableConfig'),
    texts: getTexts(node),
    images: getImages(node),
  }
}

function getPluginJSON(node, key) {
  const data = node.getPluginData(key)
  try {
    return JSON.parse(data)
  } catch (e) {}
  return data
}

function setPluginJSON(key, data) {
  ;[]
    .concat(figma.currentPage.selection, getOriginalSelection())
    .filter(Boolean)
    .map(node => {
      node.setPluginData(key, JSON.stringify(data))
    })
}

function tryParse(msg) {
  try {
    return {
      type: msg.type,
      data: JSON.parse(msg.data),
    }
  } catch (e) {}
  return msg || {}
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
