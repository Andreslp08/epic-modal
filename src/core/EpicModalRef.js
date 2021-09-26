import { EpicModalManager } from "../index.js";
import { DATASET_KEYS } from "./Constants.js";
import defaultConfig from "./DefaultConfig.js";
import EpicModal from "./EpicModal.js"


class EpicModalRef extends EpicModal {

    constructor(id = "") {
        super(id);

    }

    build() {
        const elementRef = document.querySelector(`[data-epic-modal-id = ${this.id}]`);
        if (elementRef) {
            this.element = elementRef;
            this.parentElement = elementRef.parentElement;
            const data = elementRef.dataset[DATASET_KEYS.config] || "{}";
            const config = JSON.parse(data);
            this.config = { ...defaultConfig, ...config }
            this.updateConfig(this.config);
            this.element.removeEventListener("click", this.closeButtonHandler, false);
            this.element.addEventListener('click', this.closeButtonHandler);
        }

    }

}

export default EpicModalRef;

