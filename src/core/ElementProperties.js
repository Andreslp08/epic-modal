import { ANIMATIONS, THEMES } from "./Constants.js";
import defaultConfig from "./DefaultConfig.js";
import EpicModal from "./EpicModal.js"

const setTheme = (element, theme = THEMES["default-light"]) => {
    if (!element || element instanceof HTMLElement == false) { return }
    theme = THEMES[theme]?theme:THEMES["default-light"];
    const themeClass = `epic-modal-theme-${theme}`;
    element.classList.forEach(className =>{
        if(className.includes("epic-modal-theme-")){
            element.classList.remove(className)
        }
    });
    element.classList.add(themeClass);
}

const setTitle = (element, title = defaultConfig.title) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const titleElement = element.querySelector(".window")?.querySelector(".title");
    if (titleElement) {
        titleElement.textContent = title;
    }
}

const setPosition = (element, position = defaultConfig.position) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const themeClass = `epic-modal-position-${position}`;
    element.classList.forEach(className =>{
        if(className.includes("epic-modal-position-")){
            element.classList.remove(className)
        }
    });
    element.classList.add(themeClass);
}

const setBackdropClick = (element, backdropClick = defaultConfig.backdropClick) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const themeClass = `epic-modal-backdrop-click`;
    if(backdropClick){
        element.classList.add(themeClass);
    }
    else{
        element.classList.remove(themeClass); 
    }
}

const setCustomTemplate= (element, customTemplate = defaultConfig.customTemplate) => {
    if (!element || element instanceof HTMLElement == false) { return }
    element.innerHTML = customTemplate;
}

const setContent= (element, content = defaultConfig.content) => {
    if (!element || element instanceof HTMLElement == false) { return }
    const contentContainer = element.querySelector(".window")?.querySelector(".content");
    if (contentContainer) {
        contentContainer.innerHTML = content;
    }
}

const setOpenAnimation =(element,animation = defaultConfig.openAnimation )=>{
    if (!element || element instanceof HTMLElement == false) { return }
    const  anim = ANIMATIONS[animation]?animation:ANIMATIONS.default;
    const themeClass = `epic-modal-anim-${anim}-show`;
    element.classList.forEach(className =>{
        if(className.includes("epic-modal-anim-")){
            element.classList.remove(className)
        }
    });
    element.offsetWidth;
    element.classList.add(themeClass);
}

const setCloseAnimation =(element,animation = defaultConfig.closeAnimation )=>{
    if (!element || element instanceof HTMLElement == false) { return }
    const  anim = ANIMATIONS[animation]?animation:ANIMATIONS.default;
    const themeClass = `epic-modal-anim-${anim}-hide`;
    element.classList.forEach(className =>{
        if(className.includes("epic-modal-anim-")){
            element.classList.remove(className)
        }
    });
    element.offsetWidth;
    element.classList.add(themeClass);
}

const ElementProperties = {
    setTheme,
    setTitle,
    setPosition,
    setBackdropClick,
    setCustomTemplate,
    setContent,
    setOpenAnimation,
    setCloseAnimation
}

export default ElementProperties;