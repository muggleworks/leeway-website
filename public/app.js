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
    const click = document.getElementById('menuId');
    menuId.style.display = "block";

}
function closeButton() {
    const close = document.getElementById('menuId');
    menuId.style.display = 'none'
}
function faqSection() {
    const faq = document.getElementById('menuId')
    menuId.style.display = 'none'
}
function homeSection() {
    const home = document.getElementById('menuId')
    menuId.style.display = 'none'
}
function howItWorks() {
    const howitworks = document.getElementById('menuID')
    menuId.style.display = 'none'
}



