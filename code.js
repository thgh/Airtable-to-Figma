var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SPACING = 20;
//console.log(this, figma)
figma.showUI(__html__, {
    width: 400,
    height: 233,
});
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    console.log(msg);
    if (msg.type === 'debug') {
        console.log(figma.currentPage.selection);
        return;
    }
    if (msg === 'get-selection-texts' || msg.type === 'get-selection-texts') {
        figma.ui.postMessage({
            type: 'selection',
            selection: figma.currentPage.selection,
        });
        figma.ui.postMessage({
            type: 'selection-texts',
            texts: getTexts(figma.currentPage.selection),
        });
        detectConfig();
        return;
    }
    if (msg.type === 'airtable-load') {
        const { data, mapping } = msg;
        const lookup = getArrayMapping(figma.currentPage.selection[0], mapping);
        const instance = getFrame(figma.currentPage.selection[0]);
        if (!instance) {
            return console.warn('no frame');
        }
        console.warn('data', data);
        if (!data) {
            return console.warn('no data');
        }
        yield figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
        console.log('lo', lookup);
        const parent = instance.parent;
        const focus = [];
        focus.push(instance);
        let offset = instance.y;
        let first = true;
        for (const rowData of data) {
            const clone = first ? instance : instance.clone();
            first = false;
            const subs = clone.findAll(() => true);
            console.log('subs', subs);
            subs.forEach((sub, i) => interpolate(sub, rowData[lookup[i]]));
            parent.appendChild(clone);
            clone.y = offset;
            offset += instance.height + SPACING;
            focus.push(clone);
        }
        // TODO: saved
        // Update selection
        figma.currentPage.selection = focus;
        figma.viewport.scrollAndZoomIntoView(focus);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
});
function getArrayMapping(instance, mapping) {
    return instance
        .findAll(() => true)
        .map(node => mapping.find(n => n.id === node.id))
        .map(f => f && f.field);
}
function interpolate(node, value) {
    if (value) {
        node.characters = value;
        return;
    }
    // if (node.type === 'TEXT') {
    //   node.characters = templateHash(node.characters, row)
    // }
}
function templateHash(text, data) {
    if (data) {
        Object.keys(data).forEach(key => {
            text = text.replace('#' + key, data[key]);
        });
    }
    return text;
}
function getFrame(instance) {
    if (!instance) {
        return console.warn('no selection');
    }
    // Start from component
    if (instance.type === 'COMPONENT') {
        const parent = instance;
        instance = instance.createInstance();
        // To the right
        instance.x = parent.x + parent.width + SPACING;
        instance.y = parent.y;
    }
    // Start from component
    if (instance.type === 'FRAME') {
        const parent = instance;
        instance = instance.clone();
        // To the right
        instance.x = parent.x + parent.width + SPACING;
        instance.y = parent.y;
    }
    if (!instance ||
        (instance.type !== 'INSTANCE' &&
            instance.type !== 'FRAME' &&
            instance.type !== 'COMPONENT')) {
        return console.warn('no instance');
    }
    return instance;
}
function getTexts(layer) {
    if (!layer)
        return [];
    const texts = [];
    traverse(layer, layer => {
        if (layer.type === 'TEXT') {
            texts.push({
                id: layer.id,
                name: layer.name,
                characters: layer.characters,
            });
        }
    });
    return texts;
}
function traverse(node, func) {
    if (Array.isArray(node)) {
        return node.map(n => traverse(n, func));
    }
    func(node);
    if ('children' in node) {
        for (const child of node.children) {
            traverse(child, func);
        }
    }
}
function detectConfig() {
    // To implement
    // Read selection metadata
    // post metadata to plugin
}
