let lastId = null;
function expand(id, id1) {

    var imgElement = document.getElementById(id1);
    imageSrc = imgElement.src;
    imageSrc = imageSrc.split("/").pop();
    imageSrc = (imageSrc === "minus.svg") ? "images/Union.svg" : "images/minus.svg";
    imgElement.src = imageSrc;

    if (lastId && lastId != id) {
        document.getElementById(lastId).classList.add("hidden");
    }
    const content = document.getElementById(id);
    content.classList.toggle("hidden");
    lastId = id;

}


