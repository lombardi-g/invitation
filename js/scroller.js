const products = document.getElementById("products");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

products.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - products.offsetLeft;
  startY = e.pageY - products.offsetTop;
  scrollLeft = products.scrollLeft;
  scrollTop = products.scrollTop;
  products.style.cursor = "grabbing";
});

products.addEventListener("mouseleave", () => {
  isDown = false;
  products.style.cursor = "grab";
});

products.addEventListener("mouseup", () => {
  isDown = false;
  products.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - products.offsetLeft;
  const y = e.pageY - products.offsetTop;
  const walkX = (x - startX) * 1;
  const walkY = (y - startY) * 1;
  products.scrollLeft = scrollLeft - walkX;
  products.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById(
  "action-button--previous"
);
const scrollRightButton = document.getElementById(
  "action-button--next"
);

scrollLeftButton.addEventListener("click", () => {
  products.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  products.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

products.addEventListener("scroll", (e) => {
  const position = products.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (Math.floor(position) === 
    products.scrollWidth - products.clientWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});

function flipCard(n) {
  const front = document.getElementById(`page${n * 2 - 1}`);
  const back  = document.getElementById(`page${n * 2}`);
  const isFlipped = front.style.transform === "rotateY(-180deg)";
  front.style.transform = isFlipped ? "" : "rotateY(-180deg)";
  back.style.transform  = isFlipped ? "" : "rotateY(0deg)";
}

function copyText() {
  navigator.clipboard.writeText("gabriellomba@gmail.com")
    .then(() => alert("Pix copiado"))
    .catch(err => alert("Erro ao copiar: " + err));
}

// products.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].pageX - products.offsetLeft;
//   scrollLeft = products.scrollLeft;
// }, { passive: true });

// products.addEventListener("touchmove", (e) => {
//   const x = e.touches[0].pageX - products.offsetLeft;
//   products.scrollLeft = scrollLeft - (x - startX);
// }, { passive: true });