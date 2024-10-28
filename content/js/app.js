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
let count = document.querySelector(".count");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".cart").style.display = "block";
  addAction(document.querySelector("#clothOption"), cloth);
  // if (document.querySelector(".view-section").style.display === "none") {
  //   document.querySelector(".pop-up").style.display = "flex";
  // }
  // document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".select").style.display = "flex";

  let cartDetails;
  if (localStorage.getItem("cartDetails") === null) {
    cartDetails = [];
  } else {
    cartDetails = JSON.parse(localStorage.getItem("cartDetails"));
    count.textContent = cartDetails.length;
  }
  cartDetails.forEach((theCart, index) => {
    let cartItems = document.querySelector(".cart-items");
    let cartList = document.querySelector(".cart-list");
    let li = document.createElement("li");
    let theDescription = document.createElement("p");
    let theImage = document.createElement("img");
    theImage.classList.add("w-h");
    li.appendChild(theDescription);
    li.appendChild(theImage);
    cartList.appendChild(li);
    cartItems.appendChild(cartList);
    theDescription.textContent = theCart[index].description;
    theImage.src = theCart[index].image;
    li.className = "lists";

    console.log(theCart[index].description);
    // console.log(theCart[index].description);
  });
});

function eventListeners() {
  document.querySelector(".wlcm-btn").addEventListener("click", openPage);
  toggleBtn.addEventListener("click", navMenu);
  closeNav.addEventListener("click", () => {
    nav.style.left = "-295px";
    navBar.style.left = "-700px";
    document.querySelector("body").style.overflow = "auto";
  });
  itemView.addEventListener("click", getDetails);
  document.querySelector(".cart").addEventListener("click", viewCart);
  document.querySelector(".closeCart").addEventListener("click", () => {
    document.querySelector(".cart-details").style.display = "none";
    document.querySelector(".closeCart").style.color = "red";
    document.querySelector(".closeCart").style.backgroundColor = "transparent";
  });
}

function openPage() {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
  cloth.style.display = "block";
}

function navMenu(e) {
  e.preventDefault();
  navBar.style.left = "0";
  nav.style.left = "0";
  closeNav.style.backgroundColor = "transparent";
  closeNav.style.color = "white";
  document.querySelector("body").style.overflow = "hidden";
}

let counT = 1;
let itemDetails = [];
function getDetails(e) {
  e.preventDefault();

  if (e.target.parentElement.parentElement.classList.contains("arrangement")) {
    let target = e.target.parentElement.parentElement.firstElementChild;
    let image = target.firstElementChild.src;
    let description = target.firstElementChild.nextElementSibling.textContent;
    let price =
      target.firstElementChild.nextElementSibling.nextElementSibling
        .textContent;
    let details = {
      image,
      price,
      description,
    };
    itemDetails.push(details);

    let cartDetails;
    if (localStorage.getItem("cartDetails") === null) {
      cartDetails = [];
    } else {
      cartDetails = JSON.parse(localStorage.getItem("cartDetails"));
    }
    cartDetails.push(itemDetails);
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  }

  let cartItems = document.querySelector(".cart-items");
  let cartList = document.querySelector(".cart-list");
  let li = document.createElement("li");
  let theDescription = document.createElement("p");
  let theImage = document.createElement("img");
  theImage.classList.add("w-h");
  li.appendChild(theDescription);
  li.appendChild(theImage);
  cartList.appendChild(li);
  cartItems.appendChild(cartList);

  if (e.target.classList.contains("add")) {
    count.textContent = counT;
    counT++;

    if (localStorage.getItem("cartDetails") === null) {
      cartDetails = [];
    } else {
      cartDetails = JSON.parse(localStorage.getItem("cartDetails"));
    }
    cartDetails.forEach((theCart, index) => {
      theDescription.textContent = theCart[index].description;
      theImage.src = theCart[index].image;
      li.className = "lists";

      console.log(theCart[index].description);
      // console.log(theCart[index].description);
    });
    console.log(cartDetails.length);
  }
}

function viewCart() {
  // document.querySelector(".cart-details").style.border = "1px solid red";
  if (document.querySelector(".cart-details").style.display !== "block") {
    document.querySelector(".cart-details").style.display = "block";
  } else {
    document.querySelector(".cart-details").style.display = "none";
  }
}

let shopBtn = document.querySelectorAll(".shop");
shopBtn.forEach((item) => {
  item.addEventListener("click", openShop);
});
function openShop() {
  document.querySelector(".pop-up").style.display = "flex";
  document.querySelector(".select").style.display = "flex";
  document.querySelector(".view-section").style.display = "none";
  document.querySelector(".cart").style.display = "block";
  if (document.querySelector(".pop-up").style.display === "flex") {
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
    console.log("working");
  }
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

eventListeners();
