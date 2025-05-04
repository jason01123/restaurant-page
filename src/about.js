export function addAboutContent(){
    const aboutDiv = document.createElement("div");
    // hero
    const aboutTitle = document.createElement("H2");
    aboutTitle.style.padding = "50px";
    aboutTitle.style.backgroundColor = "#cdaa7d";
    aboutTitle.innerHTML = "About the Burton Pub and Grill";
    aboutDiv.appendChild(aboutTitle);
    // make a block container with margins
    const blockContainer = document.createElement("div");
    blockContainer.style.marginLeft = "50px";
    blockContainer.style.marginRight = "50px";
    aboutDiv.appendChild(blockContainer);

    const paraOneTitle = document.createElement("h3");
    paraOneTitle.innerHTML = "Menu";
    blockContainer.appendChild(paraOneTitle);

    const paraOneText = document.createElement("p");
    paraOneText.innerHTML = "Coming soon!  For now we only have beer!";

    blockContainer.appendChild(paraOneText);

    const content = document.getElementById("content")
    content.appendChild(aboutDiv);
}