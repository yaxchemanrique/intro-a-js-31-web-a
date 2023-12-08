let image = document.getElementById("image");
let btn = document.getElementById("toggle");

function toggleImage() {
    let styleType = image.style.display === "block" ? "none" : "block";
    image.style.display = styleType;
}

btn.addEventListener("click", toggleImage);