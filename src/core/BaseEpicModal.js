import { EpicModalManager } from "../index.js";
import { DATASET_KEYS, DEFAULT_INITIAL_PROPERTIES, EPIC_MODAL_REF_CONFIGURABLE_PROPS, ERROR, HTML_DATA_KEYS } from "./Constants.js";
import ElementProperties from "./ElementProperties.js";

class BaseEpicModal {

    static idNumber = 1;
    id = "";
    properties = DEFAULT_INITIAL_PROPERTIES;
    domElementReference = document.createElement("div");
    parentElement;
    visible = false;

    constructor(id = "") {
        if (!id || id.trim().length <= 0) {
            this.id = `epic-modal-${EpicModal.idNumber}`;
            EpicModal.idNumber++;
        } else {
            this.id = id;
        }
        this.closeButtonHandler = this.closeButtonHandler.bind(this);
        EpicModalManager.addModal(this);
    }


    build() {
        this.domElementReference.removeEventListener("click", this.closeButtonHandler, false);
        this.domElementReference.addEventListener('click', this.closeButtonHandler);
    }


    changeProperties(properties = EPIC_MODAL_REF_CONFIGURABLE_PROPS) {
      
    }

    refresh() {
        this.build();
    }

    closeButtonHandler(e) {
        if (e.target.dataset[DATASET_KEYS.closeButton] == "true" ||
            (this.properties.backdropClick == true && e.target == this.domElementReference)) {
            this.close()
        }
    }

    open() {
        this.visible = true;
        ElementProperties.setOpenAnimation(this.domElementReference, this.properties.openAnimation);
        EpicModalManager.bringToFront(this);
    }
    close() {
        this.visible = false;
        ElementProperties.setCloseAnimation(this.domElementReference, this.properties.closeAnimation);
    }

    isVisible(){
        return this.visible;
    }

}

export default BaseEpicModal;