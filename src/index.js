console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let anchors = document.querySelectorAll(".thumbnails-anchor");//all HTML elements belonging to the clas thumbnails-anchor
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault(); //canceling default behavior of anchor element hitting
        showDetails();
        setDetails(anchors[i]); //setDetails function call with passing reference to appropriate anchor
    })
}
function setDetails(anchor) {
    console.log("anchor element  was pressed", anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    if(selectedItem){
        selectedItem.classList.remove("selected");
    }
    anchor.parentElement.classList.add("selected");
    selectedItem = anchor.parentElement;
    // get element with class thumbnails-title inside the given anchor.
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    // dog name exists inside thumbnailsTitleEl.textContent.
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute('data-details-title')}`;
}
function showDetails() {
    mainContentEl.classList.remove('hidden');
}
function hideDetails() {
    mainContentEl.classList.add('hidden');
    if(mainContentEl.classList.contains("hidden")){
        selectedItem.classList.remove("selected");
    }
}
