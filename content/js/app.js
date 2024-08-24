const cloth = document.querySelector(".clothing");
const baG = document.querySelector(".bags");
const shoe = document.querySelector(".shoes");
const acceSsory = document.querySelector(".accessories");
const btn = document.querySelectorAll("button");
const itemView = document.querySelector("main");
const arrangeValue = document.querySelector(".arrangement");
let toggleBtn = document.querySelector("#toggle"),
  closeNav = document.querySelector(".closeNav"),
  navBar = document.querySelector(".navBar"),
  nav = document.querySelector(".nav");

console.log(itemView.children);

btn.forEach((item) => {
  item.addEventListener("click", cursorWork);
  function cursorWork(e) {
    if (item === document.querySelector("#clothOption")) {
      addAction(item, cloth);
      baG.style.display = "none";
      shoe.style.display = "none";
      acceSsory.style.display = "none";
      // if ((cloth.style.display = "none")) {
      //   console.log("hello");
      // }
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
    // item.style.color = " rgb(217, 192, 192)";
    // item.style.backgroundColor = "rgb(107, 82, 82)";
  }

  console.log(item);
});

const addAction = (item, option) => {
  option.style.display = "block";
  item.style.color = " rgb(217, 192, 192)";
  item.style.backgroundColor = "rgb(107, 82, 82)";
};

// const removeAction = (option, option,option) => {
//   option.style.color = " rgb(56, 50, 50)";
//   option.style.backgroundColor = "wheat";
// };

// if (){
//   item.style.color = " black";
//   item.style.backgroundColor = "wheat";
// }

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.style.left = "0";
  nav.style.left = "0";
  closeNav.style.backgroundColor = "transparent";
  closeNav.style.color = "white";
});
closeNav.addEventListener("click", () => {
  nav.style.left = "-295px";
  navBar.style.left = "-700px";
});

console.log(btn);
console.log(itemView.firstElementChild);
