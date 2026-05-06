const passInput = document.getElementById("passInput");
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bgMusic");

const letterText = `Hi Aditya,

I am sorry for what happened. I know I fucked up big time. I know I ruined you and I know I ruined everything. And trust me, more than you asked me that question, I have asked myself that question and I still don't know the answer to it, I am still figuring it out.

I know my attitude today may have seemed like, I don't care, just leave, or I don't care, I am not wrong. But I know I was wrong. I realized the attitude that it might have come out as, because I was just trying not to cry and burst out.

I know I am no one to say that I know you are more hurt. I know. I am not even in the comparison.

I know I am a bad human being. I have questioned myself multiple times.

I love you, trust me. I have not proved it ever, like ever, but I do.

I know there is no chance of us getting back together, but I just wanted you to know that more than you questioned me, I questioned myself that what did you do to deserve that? You just loved me. Made me happy and that's what you got.

I think loving me is a problem. Maybe you should not. Please don't love me aditya.

I know it's not easy. Please, I will stay away from you, I promise. I'll let you have the happiness that you deserve, which I certainly will never be able to give you and I never was able to give you.

So hope you know what I am writing here, which unfortunately has to be digital. I mean it. And I feel what I am saying.

Like, you feel like you were nothing to me, but trust me, you told me that you want me to love someone the way you loved me, but I genuinely loved you.

For me, first kiss was a big, big deal. And me being comfortable enough, me being convinced so easily by myself, without you even trying, that's something I never expected.

And I mean, who would have thought we would be together, right? None of us. And then it just sort of happened.

I know I've done shit that seems the other way. I don't know why I did that. I was so wrong for it.

I will not try to ruin you anymore. I promise you.

I love you. Take care. I'll miss you.

Just because it's ending doesn't mean it was nothing. It was way more than nothing. It was a lot.

I've changed a lot. Not enough. I know.

I would have never expected that I would do it for someone, but I did it for you. I'm not making it count, but maybe it was not enough, but it was a lot.

I did and do love what we had and am responsible for fucking up what could’ve been so beautiful and I'm sorry.

I love you.`;

let index = 0;
let typingSpeed = 22; // adjust for faster/slower feel

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

      // slight pause on full stops/new paragraphs (feels more real)
      let delay = typingSpeed;
      if (letterText.charAt(index) === "." || letterText.charAt(index) === "\n") {
        delay = 120;
      }

      index++;
      setTimeout(type, delay);
    }
  }

  type();
}

function startMusic() {
  music.volume = 0.35;
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
}
