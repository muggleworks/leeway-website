let lastId = null;
let lastId1 = null;
function expand(elementId) {
    let imgElement = document.getElementById(`${elementId}-icon`);
    imageSrc = imgElement.src;
    imageSrc = imageSrc.split("/").pop();
    imageSrc = (imageSrc === "minus.svg") ? "images/add.svg" : "images/minus.svg";
    imgElement.src = imageSrc;

    if (lastId && lastId != elementId) {
        document.getElementById(lastId).classList.add("hidden");

    }
    if (lastId1 && lastId1 != (`${elementId}-icon`)) {
        document.getElementById(lastId1).src = "images/add.svg";
    }


    const content = document.getElementById(elementId);
    content.classList.toggle("hidden");
    lastId = elementId;
    lastId1 = (`${elementId}-icon`);

}


