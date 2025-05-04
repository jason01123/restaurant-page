import { contentLoad } from "./page-load.js";
import { addHomeContent } from "./home.js";
import { addMenuContent } from "./menu.js";
import { addAboutContent } from "./about.js";
contentLoad();

document.getElementById("menuButton").addEventListener("click", displayMenu);

function displayMenu(){
    clearContent();
    addMenuContent();
}

document.getElementById("homeButton").addEventListener("click", displayHome);

function displayHome(){
    clearContent();
    addHomeContent();
}

document.getElementById("aboutButton").addEventListener("click", displayAbout);

function displayAbout(){
    clearContent();
    addAboutContent();
}

function clearContent(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}