const additionalImages = [
    "Rectangle 63.png",
    "Rectangle 62.png",
    "Rectangle 61.png",
    "Rectangle 60.png"
];
const t = document.querySelector("#tema")

function moreImagens() {

    const imageContainer = document.querySelector(".imagens");

    additionalImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem adicional";
        imageContainer.appendChild(img);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", moreImagens);
});


