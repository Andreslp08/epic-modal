

import { EpicModalManager } from "../index.js";
import BaseEpicModal from "./BaseEpicModal.js";
import { DATASET_KEYS, DEFAULT_INITIAL_PROPERTIES, EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS, ERROR } from "./Constants.js";
import ElementProperties from "./ElementProperties.js";

export default class CustomEpicModalRef extends BaseEpicModal{
    constructor(id= ""){
        super(id)
        this.build();
    }

    build() {
        const elementRef = document.querySelector(`[data-epic-modal-id = "${this.id}"]`);
        if (!elementRef ) {
            throw new Error(`${ERROR} 'Error referencing a modal with ID='${this.id}'.It was not found.
            `);
        }
        if(EpicModalManager.isEpicModalInstance(this.id) == false){
            throw new Error(ERROR+"This element is not an instance of epic modal.To manage this element as 'Epic Modal' please add 'epic-modal' class to the element.");
        }
            this.domElementReference = elementRef;
            this.parentElement = elementRef.parentElement;
            const data = elementRef.dataset[DATASET_KEYS.properties] || "{}";
            const parsedProperties = JSON.parse(data);
            if (!this.properties) {
                this.properties = { ...DEFAULT_INITIAL_PROPERTIES, ...parsedProperties }
            } else {
                this.properties = { ...DEFAULT_INITIAL_PROPERTIES, ...this.properties, ...parsedProperties };
                
            }
            this.properties.customTemplate = this.domElementReference.innerHTML;
            if(this.properties.theme != "custom" ){
                EpicModalManager.removeModal(this.id);
                throw new Error(`${ERROR} 'Modal with ID='${this.id}' cannot be referenced with 'CustomEpicModalRef' class because is not a custom modal.\nPlease reference this modal using 'EpicModalRef' class.
                `);
            }

            ElementProperties.loadDefaultCustomRefInitialProperties(this.domElementReference, this.properties);
        
        super.build();
        
    }

    changeProperties(properties = EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS) {
        this.properties = {...DEFAULT_INITIAL_PROPERTIES, ...this.properties, ...properties}
        this.domElementReference.dataset[DATASET_KEYS.properties] = JSON.stringify(this.properties);
        ElementProperties.setCustomTemplate(this.domElementReference, this.properties.customTemplate);
        ElementProperties.setBackdropClick(this.domElementReference, this.properties.backdropClick);
        ElementProperties.setPosition(this.domElementReference, this.properties.position);
    }
    
}