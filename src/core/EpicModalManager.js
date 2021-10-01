import BaseEpicModal from "./BaseEpicModal.js";
import { DEFAULT_Z_INDEZ, HTML_DATA_KEYS } from "./Constants.js";

let modals = [];

let zIndex = DEFAULT_Z_INDEZ;

const addModal = (modal) => {
    if (!modal && modal instanceof BaseEpicModal == false ) { return };
    modals.push(modal);
}

const removeModal = (id = "") => {
    if (!id) { return };
    modals = modals.filter(modal => modal.id != id);
}

const bringToFront =(modal)=>{
    if (!modal && modal instanceof BaseEpicModal == false && !modal.domElementReference) { return };
    modals.forEach(m=>{
        if( m.domElementReference){
            m.domElementReference.style.zIndex = `${zIndex-1}`;
        }
    })
    modal.domElementReference.style.zIndex = `${zIndex}`;
}

const setZindex =(z_index = DEFAULT_Z_INDEZ)=>{
    zIndex = z_index;
    modals.forEach(m=>{
        if( m.domElementReference){
            m.domElementReference.style.zIndex = `${zIndex}`;
        }
    })

}

const isEpicModalInstance = (id = "") =>{
    const exists = document.querySelector(`[${HTML_DATA_KEYS.id} = "${id}"]`).classList.contains("epic-modal");
    if(exists){
        return true
    }else{
        return false;
    }
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
    setZindex,
    isEpicModalInstance 
};