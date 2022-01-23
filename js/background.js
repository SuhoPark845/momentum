const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const chosenImagePath = `img/${chosenImage}`;

document.body.style.backgroundColor = "white";
document.body.style.backgroundImage = `url(${chosenImagePath})`;
