
function rotateImage(imageId, angle) {
    let img = document.getElementById(imageId);
    let currentAngle = img.dataset.angle ? parseFloat(img.dataset.angle) : 0;
    let newAngle = currentAngle + angle;
    img.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;
    img.dataset.angle = newAngle;
}
