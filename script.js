
function rotateImage(imageId, angle) {
    let img = document.getElementById(imageId);
    let currentAngle = img.dataset.angle ? parseFloat(img.dataset.angle) : 0;
    let newAngle = currentAngle + angle;
    img.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;
    img.dataset.angle = newAngle;
}

function changeProject() {
    const project = document.getElementById('projectSelect').value;
    const sideDiskContainer = document.getElementById('sideDiskContainer');
    let images;

    if (project === 'project1') {
        images = [
            'disk1_1.png',
            'disk1_2.png',
            'disk1_3.png',
            'disk1_4.png'
        ];
        sideDiskContainer.style.display = 'none';
    } else if (project === 'project2') {
        images = [
            'disk2_1.png',
            'disk2_2.png',
            'disk2_3.png',
            'disk2_4.png'
        ];
        sideDiskContainer.style.display = 'none';
    } else if (project === 'project3') {
        images = [
            'disk3_1.png',
            'disk3_2.png',
            'disk3_3.png',
            'disk3_4.png'
        ];
        sideDiskContainer.style.display = 'flex';
        rotateImage('image5', 45)  // just to make sure it doesn't start with the perfect code
    }

    document.getElementById('image1').src = images[0];
    document.getElementById('image2').src = images[1];
    document.getElementById('image3').src = images[2];
    document.getElementById('image4').src = images[3];
}

window.onload = changeProject;