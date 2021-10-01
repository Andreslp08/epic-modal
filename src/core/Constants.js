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
    "default-light":"default-light",
    "default-dark":"default-dark",
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