export function addHomeContent(){
    const homeDiv = document.createElement("div");
    // hero
    const homeTitle = document.createElement("H2");
    homeTitle.style.padding = "50px";
    homeTitle.style.backgroundColor = "#cdaa7d";
    homeTitle.innerHTML = "Welcome to the Burton Pub and Grill";
    homeDiv.appendChild(homeTitle);
    // make a block container with margins
    const blockContainer = document.createElement("div");
    blockContainer.style.marginLeft = "50px";
    blockContainer.style.marginRight = "50px";
    homeDiv.appendChild(blockContainer);

    const paraOneTitle = document.createElement("h3");
    paraOneTitle.innerHTML = "Where good food, great company, and unforgettable nights come together.";
    blockContainer.appendChild(paraOneTitle);

    const paraOneText = document.createElement("p");
    paraOneText.innerHTML = "Nestled in the heart of Burton, our bar and grill is your go-to spot for winding down, catching up, and enjoying the best of small-town charm. Whether you're stopping in after work, meeting friends for a night out, or discovering us for the first time, you'll feel right at home.";
    blockContainer.appendChild(paraOneText);

    const content = document.getElementById("content")
    content.appendChild(homeDiv);
}




