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
    const menu = document.getElementById('menuId');
    menu.classList.add("menu-open")
}
function closeButton() {
    const menu = document.getElementById('menuId');
    menu.classList.remove("menu-open")
}
function showTransactionScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('transaction-screen').style.display = 'block';
}

function showHomeScreen() {
    document.getElementById('transaction-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

