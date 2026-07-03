let rotation = 0;
let scale = 1;

function showMessage() {
    alert("Welcome to AI Photo & Video Studio!");
}

function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const image = document.getElementById("preview");
    image.src = URL.createObjectURL(file);
    image.style.display = "block";

    rotation = 0;
    scale = 1;
    updateImage();
}

function rotateLeft() {
    rotation -= 90;
    updateImage();
}

function rotateRight() {
    rotation += 90;
    updateImage();
}

function zoomIn() {
    scale += 0.1;
    updateImage();
}

function zoomOut() {
    if (scale > 0.2) {
        scale -= 0.1;
        updateImage();
    }
}

function updateFilters() {
    updateImage();
}

function updateImage() {

    const image = document.getElementById("preview");

    const brightness = document.getElementById("brightness").value;
    const contrast = document.getElementById("contrast").value;
    const saturation = document.getElementById("saturation").value;

    image.style.transform =
        `rotate(${rotation}deg) scale(${scale})`;

    image.style.filter =
        `brightness(${brightness}%)
         contrast(${contrast}%)
         saturate(${saturation}%)`;
}

function resetImage() {

    rotation = 0;
    scale = 1;

    document.getElementById("brightness").value = 100;
    document.getElementById("contrast").value = 100;
    document.getElementById("saturation").value = 100;

    updateImage();
}

function downloadImage() {
    alert("Download feature अगले चरण में जोड़ेंगे।");
}
