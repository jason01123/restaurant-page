export function addMenuContent(){

    const menuDiv = document.createElement("div");
    // hero
    const menuTitle = document.createElement("H2");
    menuTitle.style.padding = "50px";
    menuTitle.style.backgroundColor = "#cdaa7d";
    menuTitle.innerHTML = "The Burton Pub and Grill Menu";
    menuDiv.appendChild(menuTitle);
    // make a block container with margins
    const blockContainer = document.createElement("div");
    blockContainer.style.marginLeft = "50px";
    blockContainer.style.marginRight = "50px";
    menuDiv.appendChild(blockContainer);

    const paraOneTitle = document.createElement("h3");
    paraOneTitle.innerHTML = "What we are menu";
    blockContainer.appendChild(paraOneTitle);

    const paraOneText = document.createElement("p");
    paraOneText.innerHTML = "Founded in 1998, The Burton Bar & Grill began as a humble neighborhood watering hole in a converted general store at the center of town. Built by longtime locals with a passion for good food and community spirit, it quickly grew into a beloved gathering place where stories were shared over cold pints and hearty meals. Over the years, the pub has seen renovations and a few fresh coats of paint, but it’s never lost its rustic charm or small-town soul. Today, The Burton Bar & Grill stands as a local landmark — a place where generations have gathered to celebrate, unwind, and feel right at home.";

    blockContainer.appendChild(paraOneText);

    const content = document.getElementById("content")
    content.appendChild(menuDiv);
}