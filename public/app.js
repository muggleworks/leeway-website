let lastId = null;
function expand(id) {
    if (lastId && lastId != id) {
        document.getElementById(lastId).classList.add("hidden");
    }
    const content = document.getElementById(id);
    content.classList.toggle("hidden");
    lastId = id;

}
function menuIconClick() {
    const x = document.getElementById('menuID');
    menuID.style.display = "block";

}
function closeButton() {
    const y = document.getElementById('menuID');
    menuID.style.display = 'none'
}


