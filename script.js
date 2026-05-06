const passInput = document.getElementById("passInput");
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bgMusic");

passInput.addEventListener("input", () => {
  if (passInput.value === "0112") {
    switchScreen("page1");
    music.play();
  } else if (passInput.value.length === 4) {
    passInput.classList.add("shake");
    setTimeout(() => passInput.classList.remove("shake"), 300);
    passInput.value = "";
  }
});

function switchScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function nextPage(num) {
  switchScreen("page" + num);
}
