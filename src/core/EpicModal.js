import  * as EpicModalManager  from "./EpicModalManager.js";
import defaultConfig from "./DefaultConfig.js";
import { buildTemplate } from "./TemplatesManager.js";
import ElementProperties from "./ElementProperties.js";
import { DATASET_KEYS, HTML_DATA_KEYS, THEMES } from "./Constants.js";

export default class EpicModal {
    static defaultIdNum = 1;

    id = "";
    config = defaultConfig;
    element = document.createElement("div");

    constructor(id = "",config = defaultConfig, parentElement = document.body) {
        if (!id || id.trim().length <= 0) {
            this.id = `epic-modal-${EpicModal.defaultIdNum}`;
            EpicModal.defaultIdNum++;
        } else {
            this.id = id;
        }
        this.parentElement = parentElement;
        this.config = {...defaultConfig,...config};
        this.closeButtonHandler = this.closeButtonHandler.bind(this);
        this.build();
        EpicModalManager.addModal(this)
    }

    build() {
        if(this.parentElement instanceof Element == false || !this.parentElement ){
            console.error("[Epic-Modal]:'build modal' failed, parent element is not a HTMLElement or is undefined.")
            return;
        }
        const template =  buildTemplate(this.id, this.config);
        this.parentElement.insertAdjacentHTML('beforeend',template )
        if(this.element){
            this.element.remove();
        }
        this.element = document.body.querySelector(`[${HTML_DATA_KEYS.id} = ${this.id}]`)
        this.updateConfig(this.config)
        this.element.removeEventListener("click", this.closeButtonHandler, false);
        this.element.addEventListener('click', this.closeButtonHandler);
    }

    updateConfig(config = defaultConfig) {
        const previousConfig = this.config;
        this.config = { ...defaultConfig, ...config };
        this.element.dataset[DATASET_KEYS.config] = JSON.stringify(this.config);
        ElementProperties.setTheme(this.element, this.config.theme)
        ElementProperties.setPosition(this.element, this.config.position)
        ElementProperties.setBackdropClick(this.element, this.config.backdropClick);
        if (this.config.theme != THEMES["custom"]) {
            ElementProperties.setTitle(this.element, this.config.title);
            ElementProperties.setContent(this.element,this.config.content);
        }else{
            ElementProperties.setCustomTemplate(this.element, this.config.customTemplate);
        }
        if(this.config.theme != previousConfig.theme){
            this.refresh();
        } 
    }

    refresh(){
        this.build();
    }

    closeButtonHandler(e) {
        if (e.target.dataset[DATASET_KEYS.closeButton] == "true" ||
         (this.config.backdropClick == true && e.target == this.element)) {
            this.hide()
        }
    }

    show() {
        ElementProperties.setOpenAnimation(this.element, this.config.openAnimation);
    }
    hide() {
        ElementProperties.setCloseAnimation(this.element, this.config.closeAnimation);
    }
    getId() {
        return this.id;
    }
}
