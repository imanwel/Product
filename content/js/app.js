const cloth = document.querySelector(".clothing");
const baG = document.querySelector(".bags");
const shoe = document.querySelector(".shoes");
const acceSsory = document.querySelector(".accessories");
const btn = document.querySelectorAll("button");
const itemView = document.querySelector("main");
const arrangeValue = document.querySelectorAll(".arrangement");
let toggleBtn = document.querySelector("#toggle"),
  closeNav = document.querySelector(".closeNav"),
  navBar = document.querySelector(".navBar"),
  nav = document.querySelector(".nav");

// document.addEventListener("DOMContentLoaded", () => {
//   if (document.querySelector(".view-section").style.display === "none") {
//     document.querySelector(".pop-up").style.display = "flex";
//   }
//   // document.querySelector("body").style.overflow = "hidden";
// });

function eventListeners() {
  document.querySelector(".wlcm-btn").addEventListener("click", openPage);
  toggleBtn.addEventListener("click", navMenu);
}
function openPage() {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}

btn.forEach((item) => {
  item.addEventListener("click", cursorWork);
  function cursorWork(e) {
    if (item === document.querySelector("#clothOption")) {
      addAction(item, cloth);
      baG.style.display = "none";
      shoe.style.display = "none";
      acceSsory.style.display = "none";
    } else if (item === document.querySelector("#bagOption")) {
      addAction(item, baG);
      cloth.style.display = "none";
      shoe.style.display = "none";
      acceSsory.style.display = "none";
    } else if (item === document.querySelector("#shoeOption")) {
      addAction(item, shoe);
      baG.style.display = "none";
      cloth.style.display = "none";
      acceSsory.style.display = "none";
    } else if (item === document.querySelector("#accessoryOption")) {
      addAction(item, acceSsory);
      baG.style.display = "none";
      cloth.style.display = "none";
      shoe.style.display = "none";
    } else {
      item.style.color = " black";
      item.style.backgroundColor = "wheat";
    }

    if (item !== document.querySelector("#clothOption")) {
      document.querySelector("#clothOption").style.backgroundColor = "#f3f3f3";
      document.querySelector("#clothOption").style.color = "black";
    }
    if (item !== document.querySelector("#bagOption")) {
      document.querySelector("#bagOption").style.backgroundColor = "#f3f3f3";
      document.querySelector("#bagOption").style.color = "black";
    }
    if (item !== document.querySelector("#shoeOption")) {
      document.querySelector("#shoeOption").style.backgroundColor = "#f3f3f3";
      document.querySelector("#shoeOption").style.color = "black";
    }
    if (item !== document.querySelector("#accessoryOption")) {
      document.querySelector("#accessoryOption").style.backgroundColor =
        "#f3f3f3";
      document.querySelector("#accessoryOption").style.color = "black";
    }
  }
});

const addAction = (item, option) => {
  option.style.display = "block";
  item.style.color = " rgb(217, 192, 192)";
  item.style.backgroundColor = "rgb(107, 82, 82)";
};

function navMenu(e) {
  e.preventDefault();
  navBar.style.left = "0";
  nav.style.left = "0";
  closeNav.style.backgroundColor = "transparent";
  closeNav.style.color = "white";
  document.querySelector("body").style.overflow = "hidden";
}

closeNav.addEventListener("click", () => {
  nav.style.left = "-295px";
  navBar.style.left = "-700px";
  document.querySelector("body").style.overflow = "auto";
});

arrangeValue.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.add("shadow");
    // document.querySelector(".add").style.display = "block";
    if (item === index) {
      console.log(item);
    }
  });
});

let addBtn = document.querySelectorAll(".add");
let btnAdd = Array.from(addBtn);
let count = document.querySelector(".count");
let counT = 1;
btnAdd.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    count.textContent = counT;
    counT++;
  });
});

let shopBtn = document.querySelectorAll(".shop");
shopBtn.forEach((item) => {
  item.addEventListener("click", openShop);
});
function openShop() {
  document.querySelector(".pop-up").style.display = "flex";
  document.querySelector(".select").style.display = "flex";
  document.querySelector(".view-section").style.display = "none";
  document.querySelector(".cart").style.display = "block";
}

eventListeners();
