import { DEFAULT_Z_INDEZ } from "./Constants.js";
import EpicModal from "./EpicModal.js";
import EpicModalRef from "./EpicModalRef.js";

let modals = [];

let zIndex = DEFAULT_Z_INDEZ;

const addModal = (modal) => {
    if (!modal && modal instanceof EpicModal == false ) { return };
    modals.push(modal);
}

const removeModal = (id = "") => {
    if (!id) { return };
    modals = modals.filter(modal => modal.id != id);
}

const bringToFront =(modal)=>{
    if (!modal && modal instanceof EpicModal == false && !modal.element) { return };
    modals.forEach(m=>{
        if( m.element){
            m.element.style.zIndex = `${zIndex-1}`;
        }
    })
    modal.element.style.zIndex = `${zIndex}`;
}

const setZindex =(z_index = DEFAULT_Z_INDEZ)=>{
    zIndex = z_index;
    modals.forEach(m=>{
        if( m.element){
            m.element.style.zIndex = `${zIndex}`;
        }
    })

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
    all,
    bringToFront,
    setZindex
};