const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
let dinoBottom = 0;
let isJumping = false;

function jump() {
  if (isJumping) return;
  let upInterval = setInterval(() => {
    if (dinoBottom >= 120) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (dinoBottom <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          dinoBottom -= 20;
          dino.style.bottom = dinoBottom + "px";
        }
      }, 20);
    } else {
      dinoBottom += 20;
      dino.style.bottom = dinoBottom + "px";
    }
  }, 20);
  isJumping = true;
}

document.addEventListener("keyup", event => {
  if (event.code === "Space") jump();
});

let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));
let cactusMoveInterval = setInterval(() => {
  if (cactusRight < 1600) {
    cactusRight += 40;
    cactus.style.right = cactusRight + "px";
  } else {
    cactusRight = -20;
    cactus.style.right = cactusRight + "px";
  }
}, 50);
