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

function flipCard6() {
  const page11 = document.getElementById("page11");
  const page12 = document.getElementById("page12");

  if (page11.style.transform === "") {
      page11.style.transform = "rotateY(-180deg)";
      page12.style.transform = "rotateY(0deg)";
  } else {
    page11.style.transform = "";
    page12.style.transform = "";
  }
}

function flipCard7() {
  const page13 = document.getElementById("page13");
  const page14 = document.getElementById("page14");

  if (page13.style.transform === "") {
      page13.style.transform = "rotateY(-180deg)";
      page14.style.transform = "rotateY(0deg)";
  } else {
    page13.style.transform = "";
    page14.style.transform = "";
  }
}

function flipCard8() {
  const page15 = document.getElementById("page15");
  const page16 = document.getElementById("page16");

  if (page15.style.transform === "") {
      page15.style.transform = "rotateY(-180deg)";
      page16.style.transform = "rotateY(0deg)";
  } else {
    page15.style.transform = "";
    page16.style.transform = "";
  }
}

function flipCard9() {
  const page17 = document.getElementById("page17");
  const page18 = document.getElementById("page18");

  if (page17.style.transform === "") {
      page17.style.transform = "rotateY(-180deg)";
      page18.style.transform = "rotateY(0deg)";
  } else {
    page17.style.transform = "";
    page18.style.transform = "";
  }
}

function flipCard10() {
  const page19 = document.getElementById("page19");
  const page20 = document.getElementById("page20");

  if (page19.style.transform === "") {
      page19.style.transform = "rotateY(-180deg)";
      page20.style.transform = "rotateY(0deg)";
  } else {
    page19.style.transform = "";
    page20.style.transform = "";
  }
}

function flipCard11() {
  const page21 = document.getElementById("page21");
  const page22 = document.getElementById("page22");

  if (page21.style.transform === "") {
      page21.style.transform = "rotateY(-180deg)";
      page22.style.transform = "rotateY(0deg)";
  } else {
    page21.style.transform = "";
    page22.style.transform = "";
  }
}

function flipCard12() {
  const page23 = document.getElementById("page23");
  const page24 = document.getElementById("page24");

  if (page23.style.transform === "") {
      page23.style.transform = "rotateY(-180deg)";
      page24.style.transform = "rotateY(0deg)";
  } else {
    page23.style.transform = "";
    page24.style.transform = "";
  }
}

function flipCard13() {
  const page25 = document.getElementById("page25");
  const page26 = document.getElementById("page26");

  if (page25.style.transform === "") {
      page25.style.transform = "rotateY(-180deg)";
      page26.style.transform = "rotateY(0deg)";
  } else {
    page25.style.transform = "";
    page26.style.transform = "";
  }
}

function copyText() {
  navigator.clipboard.writeText("gabriellomba@gmail.com")
    .then(() => alert("Pix copiado"))
    .catch(err => alert("Erro ao copiar: " + err));
}