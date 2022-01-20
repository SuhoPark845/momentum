const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeBackgroundColor() {
  const leftColor = colors[Math.floor(Math.random() * colors.length)];
  let RightColor;
  while (true) {
    RightColor = colors[Math.floor(Math.random() * colors.length)];
    if (leftColor !== RightColor) {
      break;
    }
  }

  document.body.style.background = `linear-gradient(to right, ${leftColor}, ${RightColor})`;
}

const button = document.querySelector("button");

button.addEventListener("click", changeBackgroundColor);
