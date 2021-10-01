import { ANIMATIONS, DEFAULT_INITIAL_PROPERTIES, EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS, EPIC_MODAL_REF_CONFIGURABLE_PROPS, ERROR, THEMES } from "./Constants.js";

const setTheme = (element, theme = THEMES["default-light"]) => {
    if (!element || element instanceof HTMLElement == false) { return }
    theme = THEMES[theme] ? theme : THEMES["default-light"];
    const themeClass = `epic-modal-theme-${theme}`;
    element.classList.forEach(className => {
        if (className.includes("epic-modal-theme-")) {
            element.classList.remove(className)
        }
    });
    element.classList.add(themeClass);
}

const setTitle = (element, title = DEFAULT_INITIAL_PROPERTIES.title) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const titleElement = element.querySelector(".window")?.querySelector(".title");
    if (titleElement) {
        titleElement.textContent = title;
    }
    else{
        throw new Error(ERROR +"Element has an invalid HTML structure.Please read documentation about Epic-modal styles, HTML structures and themes.")
    }
}

const setPosition = (element, position = DEFAULT_INITIAL_PROPERTIES.position) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const themeClass = `epic-modal-position-${position}`;
    element.classList.forEach(className => {
        if (className.includes("epic-modal-position-")) {
            element.classList.remove(className)
        }
    });
    element.classList.add(themeClass);
}

const setBackdropClick = (element, backdropClick = DEFAULT_INITIAL_PROPERTIES.backdropClick) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const themeClass = `epic-modal-backdrop-click`;
    if (backdropClick) {
        element.classList.add(themeClass);
    }
    else {
        element.classList.remove(themeClass);
    }
}

const setCustomTemplate = (element, customTemplate = DEFAULT_INITIAL_PROPERTIES.customTemplate) => {
    if (!element || element instanceof HTMLElement == false) { return }
    element.innerHTML = customTemplate;
}

const setContent = (element, content = DEFAULT_INITIAL_PROPERTIES.content) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const contentContainer = element.querySelector(".window")?.querySelector(".content");
    if (contentContainer) {
        contentContainer.innerHTML = content;
    }else{
        throw new Error(ERROR +"Element has an invalid HTML structure.Please read documentation about Epic-modal styles, HTML structures and themes.")
    }
}

const setOpenAnimation = (element, animation = DEFAULT_INITIAL_PROPERTIES.openAnimation) => {
    if (!element || element instanceof HTMLElement == false ||
        element.classList.contains( `epic-modal-anim-${animation}-show`)
        ) { return }
    const anim = ANIMATIONS[animation] ? animation : ANIMATIONS.default;
    const themeClass = `epic-modal-anim-${anim}-show`;
    element.classList.forEach(className => {
        if (className.includes("epic-modal-anim-")) {
            element.classList.remove(className)
        }
    });
    element.offsetWidth;
    element.classList.add(themeClass);
}

const setCloseAnimation = (element, animation = DEFAULT_INITIAL_PROPERTIES.closeAnimation) => {
    if (!element || element instanceof HTMLElement == false ||
        element.classList.contains( `epic-modal-anim-${animation}-hide`)
        ) { return }
    const anim = ANIMATIONS[animation] ? animation : ANIMATIONS.default;
    const themeClass = `epic-modal-anim-${anim}-hide`;
    element.classList.forEach(className => {
        if (className.includes("epic-modal-anim-")) {
            element.classList.remove(className)
        }
    });
    element.offsetWidth;
    element.classList.add(themeClass);
}

const loadDefaultRefInitialProperties = (element, props = EPIC_MODAL_REF_CONFIGURABLE_PROPS) => {
    if (!element || element instanceof HTMLElement == false) { return }
    setTheme(element, props.theme)
    setPosition(element, props.position)
    setBackdropClick(element, props.backdropClick);
}

const loadDefaultCustomRefInitialProperties = (element, props = EPIC_MODAL_CUSTOM_REF_CONFIGURABLE_PROPS) => {
    if (!element || element instanceof HTMLElement == false) { return }
    setPosition(element, props.position)
    setBackdropClick(element, props.backdropClick);
}

const ElementProperties = {
    setTheme,
    setTitle,
    setPosition,
    setBackdropClick,
    setCustomTemplate,
    setContent,
    setOpenAnimation,
    setCloseAnimation,
    loadDefaultRefInitialProperties,
    loadDefaultCustomRefInitialProperties
}

export default ElementProperties;