let lastId = null;
function expand(ElementId) {
    if (lastId && lastId != ElementId) {
        document.getElementById(lastId).classList.add("hidden");
    }
    const content = document.getElementById(ElementId);
    content.classList.toggle("hidden");
    lastId = ElementId;

}
function menuIconClick() {
    const menuClick = document.getElementById('menuId');
    menuId.style.display = "block";

}
function closeButton() {
    const menuClose = document.getElementById('menuId');
    menuId.style.display = 'none';
}



