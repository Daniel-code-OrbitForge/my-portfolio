// ======= HERO TEXT TYPING EFFECT =======
const heroText = document.querySelector('.hero h1');
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = "";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      heroText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
}

// ======= HOVER BUTTON WAVE ANIMATION =======
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', (e) => {
    btn.classList.add('btn-hover');
    setTimeout(() => btn.classList.remove('btn-hover'), 600);
  });
});

// ======= GRADIENT BACKGROUND ANIMATION =======
const gradientBackgrounds = document.querySelectorAll('.gradient-animate');

let gradientIndex = 0;
const gradients = [
  "linear-gradient(135deg, #6C63FF, #FF6584)",
  "linear-gradient(135deg, #00C9FF, #92FE9D)",
  "linear-gradient(135deg, #FFDEE9, #B5FFFC)"
];

function changeGradient() {
  gradientBackgrounds.forEach(bg => {
    bg.style.background = gradients[gradientIndex];
  });
  gradientIndex = (gradientIndex + 1) % gradients.length;
}

setInterval(changeGradient, 5000);