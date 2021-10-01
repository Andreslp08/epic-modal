import { DEFAULT_INITIAL_PROPERTIES, THEMES } from "./Constants.js";

const buildTemplate = (id = "", properties = DEFAULT_INITIAL_PROPERTIES) => {
    if (!id && id.length <= 0) { return undefined };
    let template = undefined;
    switch (properties.theme) {
        case THEMES["default-light"]:
            template = defaultTemplate(id, properties);
            break;
            case THEMES["default-dark"]:
            template = defaultTemplate(id, properties);
            break;
            case THEMES["custom"]:
            template = customTemplate(id, properties);
            break;
        default:
            properties.theme = THEMES["default-light"];
            template = defaultTemplate(id, properties);
            break;
    }
    return template;
}

const defaultTemplate = (id = "", properties = DEFAULT_INITIAL_PROPERTIES) => {
    if (!id || id.length <= 0) { return undefined };
    return `
    <div class="epic-modal" 
        data-epic-modal-id="${id}"
        data-epic-modal-properties ='${properties}'>
        <div class="window">
            <p class="title">${properties.title}</p>
            <button class="close-button" data-epic-modal-close-button="true" >x</button>
        <div class="content">
            ${properties.content}
            </div>
        </div>
    </div>
    `
}

const customTemplate = (id = "", properties = DEFAULT_INITIAL_PROPERTIES) => {
    if (!id || id.length <= 0) { return undefined };
    return `
    <div class="epic-modal" 
    data-epic-modal-id="${id}"
    data-epic-modal-properties = '${properties}'>
        ${properties.customTemplate}
    </div>
    `
}


export {
    buildTemplate,
    defaultTemplate,
    customTemplate
}