const passInput = document.getElementById("passInput");
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bgMusic");

const letterText = `Hi Aditya,

I am sorry for what happened. I know I fucked up big time. I know I ruined you and I know I ruined everything.

And trust me, more than you asked me that question, I have asked myself that question and I still don't know the answer.

I was just trying not to cry.

I know I was wrong.

I love you. I really do.

Maybe loving me is the problem.

Please don’t love me.

I’ll stay away. I promise.

You deserve happiness.

I’m sorry for ruining something that could’ve been beautiful.

I love you.`;

let index = 0;

passInput.addEventListener("input", () => {
  if (passInput.value === "0112") {
    switchScreen("page1");
    startMusic();
  } else if (passInput.value.length === 4) {
    passInput.classList.add("shake");
    setTimeout(() => passInput.classList.remove("shake"), 300);
    passInput.value = "";
  }
});

function switchScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "page2") {
    startTyping();
  }
}

function nextPage(num) {
  switchScreen("page" + num);
}

function startTyping() {
  const el = document.querySelector(".letter-content");
  el.textContent = "";
  index = 0;

  function type() {
    if (index < letterText.length) {
      el.textContent += letterText.charAt(index);
      index++;
      setTimeout(type, 25); // typing speed
    }
  }
  type();
}

function startMusic() {
  music.volume = 0.4;
  music.play().catch(() => {
    document.body.addEventListener("click", () => music.play(), { once: true });
  });
}
