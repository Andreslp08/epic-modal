
import BaseEpicModal from "./BaseEpicModal.js";
import {buildTemplate} from "./TemplatesManager.js";
import { DATASET_KEYS, DEFAULT_INITIAL_PROPERTIES, ERROR, HTML_DATA_KEYS, THEMES } from "./Constants.js";
import ElementProperties from "./ElementProperties.js";
import { EpicModalManager } from "../index.js";

export  default class EpicModal extends BaseEpicModal {
    constructor(id = "",properties = DEFAULT_INITIAL_PROPERTIES, parentElement = document.body) {
        super(id)
        this.parentElement = parentElement;
        this.properties = {...DEFAULT_INITIAL_PROPERTIES,...properties};
        this.build();
    }

    build() {
        if(this.parentElement instanceof Element == false || !this.parentElement ){
            throw new Error(ERROR+"An error was ocurred building the epic modal, parent element is not a HTMLElement or is undefined.")
        }

        const template =  buildTemplate(this.id, this.properties);
        this.parentElement.insertAdjacentHTML('beforeend',template )
        if(this.domElementReference){
            this.domElementReference.remove();
        }
        this.domElementReference = document.body.querySelector(`[${HTML_DATA_KEYS.id} = "${this.id}"]`)
        this.changeProperties(this.properties)
        super.build();
    }

    changeProperties(properties = DEFAULT_INITIAL_PROPERTIES) {
        const previousProperties = this.properties;
        this.properties = { ...DEFAULT_INITIAL_PROPERTIES, ...this.properties, ...properties };
        this.domElementReference.dataset[DATASET_KEYS.properties] = JSON.stringify(this.properties);
        ElementProperties.setTheme(this.domElementReference, this.properties.theme)
        ElementProperties.setPosition(this.domElementReference, this.properties.position)
        ElementProperties.setBackdropClick(this.domElementReference, this.properties.backdropClick);
        if (this.properties.theme != THEMES["custom"]) {
            console.log("custom")
            ElementProperties.setTitle(this.domElementReference, this.properties.title);
            ElementProperties.setContent(this.domElementReference,this.properties.content);
        }else{
            
            ElementProperties.setCustomTemplate(this.domElementReference, this.properties.customTemplate);
        }
        if(this.properties.theme != previousProperties.theme){
            this.refresh();
        } 
    }


}


