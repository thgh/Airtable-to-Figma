const SPACING = 20
console.log(this, figma)
figma.showUI(__html__, {
  height: 233
})

figma.ui.onmessage = async msg => {
  if (msg.type === 'debug') {
    console.log(figma.currentPage.selection)
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
    const nodes: SceneNode[] = []
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

function interpolate (node, data) {
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

function getFrame (instance) {
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

  if (!instance || (instance.type !== 'INSTANCE' && instance.type !== 'FRAME')) {
    return console.warn('no instance')
  }
  return instance
}



    // await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })

    // const rect = figma.createRectangle()
    // rect.resize(500, 1000)
    // rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }]

    // const text = figma.createText()
    // text.resize(500, 1000)
    // text.characters = JSON.stringify(
    //   figma.currentPage.selection || data,
    //   null,
    //   2
    // )

    // const frame = figma.createFrame()
    // frame.resize(500, 1000)
    // frame.appendChild(rect)
    // frame.appendChild(text)
    // figma.currentPage.appendChild(frame)

