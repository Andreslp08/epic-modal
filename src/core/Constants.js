const DATASET_KEYS = {
    id: "epicModalId",
    properties: "epicModalProperties",
    closeButton: "epicModalCloseButton"
}

const HTML_DATA_KEYS = {
    id: "data-epic-modal-id",
    properties: "data-epic-modal-properties",
    closeButton: "data-epic-modal-close-button"
}

const ANIMATIONS = {
    "default":"default",
}

const THEMES = {
    //DEFAULT
    "default-light":"default-light",
    "default-light-gold":"default-light-gold",
    "default-light-salmon":"default-light-salmon",
    "default-light-blue":"default-light-blue",
    "default-light-aqua":"default-light-aqua",
    "default-dark":"default-dark",
    "default-dark-gold":"default-dark-gold",
    "default-dark-salmon":"default-dark-salmon",
    "default-dark-blue":"default-dark-blue",
    "default-dark-aqua":"default-dark-aqua",
    //MINIMALISTIC
    "minimalistic-light":"minimalistic-light",
    "minimalistic-light-gold":"minimalistic-light-gold",
    "minimalistic-light-salmon":"minimalistic-light-salmon",
    "minimalistic-light-blue":"minimalistic-light-blue",
    "minimalistic-light-aqua":"minimalistic-light-aqua",
    "minimalistic-dark":"minimalistic-dark",
    "minimalistic-dark-gold":"minimalistic-dark-gold",
    "minimalistic-dark-salmon":"minimalistic-dark-salmon",
    "minimalistic-dark-blue":"minimalistic-dark-blue",
    "minimalistic-dark-aqua":"minimalistic-dark-aqua",
    //NEON
    "neon-light":"neon-light",
    "neon-dark":"neon-dark",
    "neon-gold":"neon-gold",
    "neon-salmon":"neon-salmon",
    "neon-blue":"neon-blue",
    "neon-aqua":"neon-aqua",
    //CUSTOM
    "custom":"custom"
}

const DEFAULT_Z_INDEZ = 999999999;


const DEFAULT_INITIAL_PROPERTIES = {
    title: "Epic Modal",
    customTemplate: "",
    backdropClick: true,
    theme: "default-light",
    content: "I'm a epic modal!",
    position:"center-center",
    openAnimation:"default",
    closeAnimation:"default"

}

const EPIC_MODAL_REF_CONFIGURABLE_PROPS = {
    theme:DEFAULT_INITIAL_PROPERTIES.theme,
    title:DEFAULT_INITIAL_PROPERTIES.title,
    content:DEFAULT_INITIAL_PROPERTIES.content,
    openAnimation:DEFAULT_INITIAL_PROPERTIES.openAnimation,
    closeAnimation:DEFAULT_INITIAL_PROPERTIES.closeAnimation,
    position:DEFAULT_INITIAL_PROPERTIES.position,
    backdropclick:DEFAULT_INITIAL_PROPERTIES.backdropClick,
}

const EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS = {
    customTemplate:DEFAULT_INITIAL_PROPERTIES.customTemplate,
    openAnimation:DEFAULT_INITIAL_PROPERTIES.openAnimation,
    closeAnimation:DEFAULT_INITIAL_PROPERTIES.closeAnimation,
    position:DEFAULT_INITIAL_PROPERTIES.position,
    backdropclick:DEFAULT_INITIAL_PROPERTIES.backdropClick
}

const ERROR ="[Epic-Modal|ERROR]:";
const WARNING ="[Epic-Modal|WARNING]:";
const INFO ="[Epic-Modal|INFO]:";


export {
    DATASET_KEYS,
    HTML_DATA_KEYS,
    THEMES,
    ANIMATIONS,
    DEFAULT_Z_INDEZ ,
    DEFAULT_INITIAL_PROPERTIES,
    EPIC_MODAL_REF_CONFIGURABLE_PROPS,
    EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS,
    ERROR,
    WARNING,
    INFO
}