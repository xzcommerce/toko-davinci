let msgvid = document.querySelector('#msgvid');

msgvid.playbackRate = 1.5;

let accordi = document.querySelectorAll('.accordion');

accordi.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
        accordion.classList.toggle('active');

        let panel = accordion.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";;
        };
    });
});

var masks = document.querySelectorAll('.mask');

masks.forEach(function(mask) {
  mask.style.transition = '0.8s ease';

  mask.addEventListener('mouseenter', function() {
    mask.style.transform = 'scale(0.97)';
  });

  mask.addEventListener('mouseleave', function() {
    mask.style.transform = 'scale(1)';
  });
});
  
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight + 30 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    let elements = document.querySelectorAll('.FadeInUp');

    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animated');
            }
    }) 
}


window.addEventListener('scroll', handleScrollAnimation);


const button = document.getElementById("fourth-highlight");
const container = document.querySelector(".particle-container");

const emojis = [
  "emoji-lip.svg",
  "basket-ball.svg",
  "upside-down.svg",
  "sos-emoji.svg",
  "money-wings.svg",
  "disguised-emoji.svg",
  "cowboy-emoji.svg",
  "emoji-peng.svg",
  "cherry-emoji.svg"
];

button.addEventListener("click", function() {
  const emoji = document.createElement("img");
  const randomIndex = Math.floor(Math.random() * emojis.length);
  emoji.src = `/assets/${emojis[randomIndex]}`;

  emoji.style.position = "absolute";
  emoji.style.top = "0";
  emoji.style.left = Math.random() * (container.offsetWidth - emoji.width) + "px";

  const duration = 1000;
  const startTime = Date.now();
  const gravity = 0.3; // Acceleration due to gravity
  const initialVelocity = Math.random() * 5 + 5; // Random initial velocity
  let position = 0;
  let velocity = initialVelocity;
  let fadeOut = false;

  function animate() {
    const elapsedTime = Date.now() - startTime;
    const progress = elapsedTime / duration;

    velocity += gravity;
    position += velocity;

    if (position >= container.offsetHeight - emoji.height) {
      position = container.offsetHeight - emoji.height; // Keep the element within the container
      velocity *= -0.4; // Apply a bounce effect
      if (!fadeOut) {
        emoji.style.transition = "opacity 0.6s";
        emoji.style.opacity = 0; // Start fading out after the first bounce
        fadeOut = true;
      }
    }

    emoji.style.transform = `translateY(${position}px)`;

    if (progress < 1 || elapsedTime < 4000) {
      requestAnimationFrame(animate);
    } else {
      container.removeChild(emoji);
    }
  }

  container.appendChild(emoji);
  animate();
});












