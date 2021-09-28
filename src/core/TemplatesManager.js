import EpicModal from "./EpicModal.js";
import defaultConfig from "./DefaultConfig.js";
import { THEMES } from "./Constants.js";

const buildTemplate = (id = "", config = defaultConfig) => {
    if (!id && id.length <= 0) { return undefined };
    let template = undefined;
    switch (config.theme) {
        case THEMES["default-light"]:
            template = defaultTemplate(id, config);
            break;
            case THEMES["default-dark"]:
            template = defaultTemplate(id, config);
            break;
            case THEMES["custom"]:
            template = customTemplate(id, config);
            break;
        default:
            config.theme = THEMES["default-light"];
            template = defaultTemplate(id, config);
            break;
    }
    return template;
}

const defaultTemplate = (id = "", config = defaultConfig) => {
    if (!id || id.length <= 0) { return undefined };
    return `
    <div class="epic-modal" 
        data-epic-modal-id="${id}"
        data-epic-modal-config ='${JSON.stringify(config)}'>
        <div class="window">
            <p class="title">${config.title}</p>
            <button class="close-button" data-epic-modal-close-button="true" >x</button>
        <div class="content">
            ${config.content}
            </div>
        </div>
    </div>
    `
}

const customTemplate = (id = "", config = defaultConfig) => {
    if (!id || id.length <= 0) { return undefined };
    return `
    <div class="epic-modal" 
    data-epic-modal-id="${id}"
    data-epic-modal-config = '${JSON.stringify(config)}'>
        ${config.customTemplate}
    </div>
    `
}


export {
    buildTemplate,
    defaultTemplate,
    customTemplate
}