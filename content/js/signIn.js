const signInForm = document.querySelector(".signIn");
// const signEmail = document.querySelector("#signInEmail");
// const signPassword = document.querySelector("#signInPassword");
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "rgb(223, 94, 94)";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "gray";
});

// document.addEventListener("DOMContentLoaded", () => {
//   timeOut(3000, "login successful");
//   // setTimeout(() => {
//   //   console.log("hello");
//   // }, 2000);
// });

let validateSignIn = {
  email: "",
  password: "",
};

signInForm.addEventListener("submit", runLogin);

function runLogin(e) {
  e.preventDefault();

  let allInputs = document.querySelectorAll(".formInput");
  let inputValues = Array.from(allInputs);
  let [val1, val2] = inputValues;

  let inputFields = document.querySelectorAll(".fields");
  let theInputs = Array.from(inputFields);

  theInputs.forEach((item) => {
    if (item.firstElementChild.classList.contains("signInEmail")) {
      if (item.firstElementChild.value === "") {
        validateError(item, "invalid email", item.lastElementChild);
        validateSignIn.email = "";
      } else {
        validateSuccess(item, item.lastElementChild);
        validateSignIn.email = val1.value;
        // signIn();
      }
    } else if (item.firstElementChild.classList.contains("signInPassword")) {
      if (item.firstElementChild.value === "") {
        validateError(item, "incorrect password", item.lastElementChild);
        validateSignIn.password = "";
      } else {
        validateSuccess(item, item.lastElementChild);
        validateSignIn.password = val2.value;
        // signIn();
      }
    }
  });

  if (validateSignIn.email !== "" && validateSignIn.password !== "") {
    console.log(validateSignIn);
    signIn();
  }
  console.log(val1.value);
}

const validateSuccess = (item, errorMessage) => {
  errorMessage.style.visibility = "hidden";
  item.firstElementChild.classList.remove("invalid");
  item.firstElementChild.classList.add("valid");
};
const validateError = (item, cautionMessage, errorMessage) => {
  errorMessage.style.visibility = "visible";
  errorMessage.textContent = cautionMessage;
  item.firstElementChild.classList.remove("valid");
  item.firstElementChild.classList.add("invalid");
};

function signIn() {
  let signInDetails;
  if (localStorage.getItem("signInDetails") === null) {
    signInDetails = [];
  } else {
    signInDetails = JSON.parse(localStorage.getItem("signInDetails"));
  }
  signInDetails.push(validateSignIn);
  localStorage.setItem("signInDetails", JSON.stringify(signInDetails));

  if (
    localStorage.getItem("details") === localStorage.getItem("signInDetails")
  ) {
    console.log("you're good to go");
    timeOut(3000, "login successful");
  } else {
    console.log("there's error in your work");
  }
}

function timeOut(time, message) {
  document.querySelector(".account-creation").style.display = "block";
  document.querySelector(".account-creation").textContent = message;
  setTimeout(() => {
    document.querySelector(".account-creation").style.display = "none";
    location.href = "http://127.0.0.1:5502/";
  }, time);
}

console.log(localStorage.getItem("details"));
