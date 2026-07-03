const canvas = new fabric.Canvas("canvas");

let currentImage = null;

function loadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        fabric.Image.fromURL(e.target.result, function(img) {

            canvas.clear();

            currentImage = img;

            img.set({
                left: 50,
                top: 50,
                scaleX: 0.5,
                scaleY: 0.5
            });

            canvas.add(img);
            canvas.setActiveObject(img);
            canvas.renderAll();

        });

    };

    reader.readAsDataURL(file);
}

function rotateLeft() {
    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.rotate(obj.angle - 90);
    canvas.renderAll();
}

function rotateRight() {
    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.rotate(obj.angle + 90);
    canvas.renderAll();
}

function zoomIn() {
    canvas.setZoom(canvas.getZoom() + 0.1);
}

function zoomOut() {
    canvas.setZoom(Math.max(0.2, canvas.getZoom() - 0.1));
}

function resetImage() {
    canvas.setZoom(1);

    if (currentImage) {
        currentImage.angle = 0;
        currentImage.left = 50;
        currentImage.top = 50;
        canvas.renderAll();
    }
}

function downloadImage() {

    const link = document.createElement("a");

    link.download = "Edited-Photo.png";

    link.href = canvas.toDataURL({
        format: "png",
        quality: 1
    });

    link.click();
}
