let lastId = null;
let lastIconId = null;
function expand(elementId) {
    let imgElement = document.getElementById(`${elementId}-icon`);
    let iconId = `${elementId}-icon`;
    imageSrc = imgElement.src;
    imageSrc = imageSrc.split("/").pop();
    imageSrc = (imageSrc === "minus.svg") ? "images/add.svg" : "images/minus.svg";
    imgElement.src = imageSrc;

    if (lastId && lastId != elementId) {
        document.getElementById(lastId).classList.add("hidden");
    }
    if (lastIconId && lastIconId != iconId) {
        document.getElementById(lastIconId).src = "images/add.svg";
    }
    const content = document.getElementById(elementId);
    content.classList.toggle("hidden");
    lastId = elementId;
    lastIconId = iconId;

}
function menuIconClick() {
    const menuClick = document.getElementById('menuId');
    menuClick.style.display = "block";
    const logo= document.getElementById('logo');
    logo.style.display="none"
    // const  hamurgerMenu= document.getElementById('menuIcon');
    // hamurgerMenu.style.display="none";
    const headerBar = document.querySelector('.header-bar');
    headerBar.style.display="none"

}
function closeButton() {
    const menuClose = document.getElementById('menuId');
    menuClose.style.display = 'none';
    const logo= document.getElementById('logo');
    logo.style.display="block";
    // const  hamurgerMenu= document.getElementById('menuIcon');
    // hamurgerMenu.style.display="block";
    const headerBar = document.querySelector('.header-bar');
    headerBar.style.display="flex"
}


