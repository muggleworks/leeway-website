let lastId = null;
let lastId1 = null;
function expand(ElementId, ElementId1) {

    let imgElement = document.getElementById(ElementId1);
    imageSrc = imgElement.src;
    imageSrc = imageSrc.split("/").pop();
    imageSrc = (imageSrc === "minus.svg") ? "images/add.svg" : "images/minus.svg";
    imgElement.src = imageSrc;

    if (lastId && lastId != ElementId) {
        document.getElementById(lastId).classList.add("hidden");

    }
    if (lastId1 && lastId1 != ElementId1) {
        document.getElementById(lastId1).src = "images/add.svg";
    }


    const content = document.getElementById(ElementId);
    content.classList.toggle("hidden");
    lastId = ElementId;
    lastId1 = ElementId1;

}


