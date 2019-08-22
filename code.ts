const SPACING = 20
console.log(this, figma)
figma.showUI(__html__, {
  width: 400,
  height: 233,
})

figma.ui.onmessage = async msg => {
  if (msg.type === 'debug') {
    console.log(figma.currentPage.selection)
    return
  }
  if (msg === 'get-selection-texts' || msg.type === 'get-selection-texts') {
    console.log(figma.currentPage.selection)
    figma.ui.postMessage({
      type: 'selection',
      selection: figma.currentPage.selection,
    })
    figma.ui.postMessage({
      type: 'selection-texts',
      texts: getTexts(figma.currentPage.selection),
    })
    return
  }
  if (msg.type === 'airtable-test') {
    const instance = getFrame(figma.currentPage.selection[0])
    if (!instance) {
      return console.warn('no frame')
    }

    const { data } = msg
    console.warn('data', data)
    if (!data) {
      return console.warn('no data')
    }
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })

    const parent = instance.parent
    const nodes = []
    nodes.push(instance)
    let offset = instance.y + instance.height + SPACING
    for (const rowData of data) {
      const clone = instance.clone()

      const subs = clone.findAll(() => true)
      console.log('subs', subs)
      subs.forEach(sub => interpolate(sub, rowData))

      parent.appendChild(clone)
      clone.y = offset
      offset += instance.height + 24

      nodes.push(clone)
    }
    // TODO: saved

    // Update selection
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin()
}

function interpolate(node, data) {
  if (node.type === 'TEXT') {
    node.characters = templateHash(node.characters, data)
  }
}

function templateHash(text, data) {
  if (data) {
    Object.keys(data).forEach(key => {
      text = text.replace('#' + key, data[key])
    })
  }
  return text
}

function getFrame(instance) {
  if (!instance) {
    return console.warn('no selection')
  }

  // Start from component
  if (instance.type === 'COMPONENT') {
    const parent = instance
    instance = instance.createInstance()

    // To the right
    instance.x = parent.x + parent.width + SPACING
    instance.y = parent.y
  }

  // Start from component
  if (instance.type === 'FRAME') {
    const parent = instance
    instance = instance.clone()

    // To the right
    instance.x = parent.x + parent.width + SPACING
    instance.y = parent.y
  }

  if (
    !instance ||
    (instance.type !== 'INSTANCE' && instance.type !== 'FRAME')
  ) {
    return console.warn('no instance')
  }
  return instance
}

function getTexts (layer) {
  if (!layer) return []
  const texts = []
  traverse(layer, layer => {
    if (layer.type === 'TEXT') {
      texts.push(layer)
    }
  })
  return texts
}

function traverse(node, func) {
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

