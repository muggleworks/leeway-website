let last = null;
function expand(question) {
    if (last && last != question) {
        document.getElementById(last).classList.add("hidden");
    }
    const content = document.getElementById(question);
    content.classList.toggle("hidden");
    last = question;

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



