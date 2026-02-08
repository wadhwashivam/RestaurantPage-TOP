import './style.css';
import { displayContent as homeContent} from './home.js';
import { displayContent as menuContent} from './menu.js';
import { displayContent as aboutContent} from './about.js';

const resetDiv = () =>{
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
};

homeContent.divContainer();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", () => {
    resetDiv();
    homeContent.divContainer();
});

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
    resetDiv();    
    menuContent.divContainer();
});

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener("click", ()=> {
    resetDiv();
    aboutContent.divContainer();
});


// The core logic is done.
// Only styling the home.js, about.js, and menu.js page is left.
// which I will do later using innerHTML in each file.

