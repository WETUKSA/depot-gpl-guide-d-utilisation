const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");

const colors = ["#e74c3c", "#8e44ad", "#f1c40f", "#1abc9c", "#2ecc71", "#e67e22"];

changeColorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
});
