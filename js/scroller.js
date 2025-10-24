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

function flipCard1() {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  if (page1.style.transform === "") {
      page1.style.transform = "rotateY(-180deg)";
      page2.style.transform = "rotateY(0deg)";
  } else {
    page1.style.transform = "";
    page2.style.transform = "";
  }
}

function flipCard2() {
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");

  if (page3.style.transform === "") {
      page3.style.transform = "rotateY(-180deg)";
      page4.style.transform = "rotateY(0deg)";
  } else {
    page3.style.transform = "";
    page4.style.transform = "";
  }
}

function flipCard3() {
  const page5 = document.getElementById("page5");
  const page6 = document.getElementById("page6");

  if (page5.style.transform === "") {
      page5.style.transform = "rotateY(-180deg)";
      page6.style.transform = "rotateY(0deg)";
  } else {
    page5.style.transform = "";
    page6.style.transform = "";
  }
}


function flipCard4() {
  const page7 = document.getElementById("page7");
  const page8 = document.getElementById("page8");
  
  if (page7.style.transform === "") {
    page7.style.transform = "rotateY(-180deg)";
    page8.style.transform = "rotateY(0deg)";
  } else {
    page7.style.transform = "";
    page8.style.transform = "";
  }
}

function flipCard5() {
  const page9 = document.getElementById("page9");
  const page10 = document.getElementById("page10");

  if (page9.style.transform === "") {
      page9.style.transform = "rotateY(-180deg)";
      page10.style.transform = "rotateY(0deg)";
  } else {
    page9.style.transform = "";
    page10.style.transform = "";
  }
}