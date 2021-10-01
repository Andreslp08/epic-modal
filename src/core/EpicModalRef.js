import { EpicModalManager } from "../index.js";
import BaseEpicModal from "./BaseEpicModal.js";
import { DATASET_KEYS, DEFAULT_INITIAL_PROPERTIES, EPIC_MODAL_REF_CONFIGURABLE_PROPS, ERROR } from "./Constants.js";
import ElementProperties from "./ElementProperties.js";

const isValidHTMLstructure = (element)=>{
    const hasWindow = element.querySelector(".window");
    const hasTitle = element.querySelector(".title");
    const hasContent = element.querySelector(".content");
    const hasCloseButton = element.querySelector(".close-button");
    if(hasWindow && hasTitle && hasContent && hasCloseButton ){return true}
    return false;
}


class EpicModalRef extends BaseEpicModal {

    constructor(id = "") {
        super(id);
        this.build();
    }

    build() {
        const elementRef = document.querySelector(`[data-epic-modal-id = "${this.id}"]`);
        if (!elementRef) {
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
    
            if(isValidHTMLstructure(this.domElementReference) == false ){
                EpicModalManager.removeModal(this.id);
                throw new Error(`${ERROR}The HTML structure of the modal(ID = '${this.id}') is NOT recognized or is a custom modal(Use 'CustomEpicModalRef').Please read documentation about Epic-modal styles, HTML structures and themes.`)
            }
            if(this.properties.theme == "custom"){
                EpicModalManager.removeModal(this.id);
                throw new Error(`${ERROR} 'Modal with ID='${this.id}' cannot be referenced with 'EpicModalRef' class because is a custom modal.\nPlease reference this modal using 'CustomEpicModalRef' class.
                `);
            }
            ElementProperties.loadDefaultRefInitialProperties(this.domElementReference, this.properties);
        
        super.build();
        
    }

    changeProperties(properties = EPIC_MODAL_REF_CONFIGURABLE_PROPS) {
        this.properties = {...DEFAULT_INITIAL_PROPERTIES, ...this.properties, ...properties}
        this.domElementReference.dataset[DATASET_KEYS.properties] = JSON.stringify(this.properties);
        if(this.properties.theme == "custom"){
            throw new Error(ERROR +"'EpicModalRef' cannot use a 'custom' theme.If you want to use a custom theme please reference this modal with 'CustomEpicModalRef' class or create it dinamically with 'EpicModal' class.");
        }
        ElementProperties.setTheme(this.domElementReference, this.properties.theme);
        ElementProperties.setTitle(this.domElementReference, this.properties.title);
        ElementProperties.setContent(this.domElementReference, this.properties.content);
        ElementProperties.setBackdropClick(this.domElementReference, this.properties.backdropClick);
        ElementProperties.setPosition(this.domElementReference, this.properties.position);
    }

}

export default EpicModalRef;

