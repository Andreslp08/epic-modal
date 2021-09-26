import EpicModal from "./EpicModal.js";
import EpicModalRef from "./EpicModalRef.js";

let modals = [];

const addModal = (modal) => {
    if (!modal && modal instanceof EpicModal == false ) { return };
    modals.push(modal);
}

const removeModal = (id = "") => {
    if (!id) { return };
    modals = modals.filter(modal => modal.id != id);
}

const all = () => {
    return {
        show: () => {
            modals.forEach(modal => {
                modal.show();
            })
        },
        hide: () => {
            modals.forEach(modal => {
                modal.hide();
            })
        }
    }
}

export {
    addModal,
    removeModal,
    all
};