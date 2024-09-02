const form = document.querySelector("form");
const inputValue = document.querySelectorAll(".formInput");
const signInForm = document.querySelector(".signIn");
// const errorMessage = document.querySelector(".empty");
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "rgb(223, 94, 94)";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "gray";
});
const validateSuccess = (val, errorMessage) => {
  errorMessage.style.visibility = "hidden";
  val.firstElementChild.classList.remove("invalid");
  val.firstElementChild.classList.add("valid");
};
const validateLogin = (val, errorMessage) => {
  errorMessage.style.visibility = "hidden";
  val.firstElementChild.classList.remove("invalid");
  val.firstElementChild.classList.remove("valid");
};
const validateError = (val, cautionMessage, errorMessage) => {
  errorMessage.style.visibility = "visible";
  errorMessage.textContent = cautionMessage;
  val.firstElementChild.classList.remove("valid");
  val.firstElementChild.classList.add("invalid");
};
const loginError = (val, cautionMessage, errorMessage) => {
  errorMessage.style.visibility = "visible";
  errorMessage.textContent = cautionMessage;
  val.firstElementChild.classList.remove("valid");
  val.firstElementChild.classList.remove("invalid");
};

form.addEventListener("submit", runSubmit);

let validated = {
  // firstname: "",
  // lastname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
let eachInput = Array.from(form.children);

function runSubmit(e) {
  e.preventDefault();

  eachInput.forEach((val) => {
    if (val.id === "userName") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your lastname", val.lastElementChild);
        validated.username = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.username = val.firstElementChild.value;
      }
    } else if (val.id === "userEmail") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your email", val.lastElementChild);
        validated.email = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.email = val.firstElementChild.value;
      }
    } else if (val.id === "userPassword") {
      if (val.firstElementChild.value === "") {
        validateError(val, "create a password", val.lastElementChild);
        validated.password = "";
      } else if (val.firstElementChild.value.length <= 5) {
        validateError(
          val,
          "password must not be less than 5",
          val.lastElementChild
        );
        validated.password = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.password = val.firstElementChild.value;
      }
    } else if (val.id === "confirmPassword") {
      if (val.firstElementChild.value === "") {
        validateError(val, "not match", val.lastElementChild);
        validated.confirmPassword = "";
      } else if (
        val.firstElementChild.value !==
        document.querySelector("#userPassword").firstElementChild.value
      ) {
        validateError(val, "password not match", val.lastElementChild);
        validated.confirmPassword = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.confirmPassword =
          document.querySelector("#userPassword").firstElementChild.value;
      }
    }
  });

  if (
    // validated.firstname !== "" &&
    // validated.lastname !== "" &&
    validated.username !== "" &&
    validated.email !== "" &&
    validated.confirmPassword !== ""
  ) {
    saveInputsValue();
    timeOut(2000, "Account created successfully", "/signIn.html");
    // console.log("good");
  } else {
    console.log("not saved to storage");
  }
}

function saveInputsValue() {
  let loginDetails = {
    email: validated.email,
    password: validated.confirmPassword,
  };

  let details;
  if (localStorage.getItem("details") === null) {
    details = [];
  } else {
    details = JSON.parse(localStorage.getItem("details"));
  }
  details.push(loginDetails);
  localStorage.setItem("details", JSON.stringify(details));
}

signInForm.addEventListener("submit", runLogin);

let validateSignIn = {
  email: "",
  password: "",
};

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
        loginError(item, "invalid email", item.lastElementChild);
        validateSignIn.email = "";
      } else {
        validateLogin(item, item.lastElementChild);
        validateSignIn.email = item.lastElementChild.value;
      }
    } else if (item.firstElementChild.classList.contains("signInPassword")) {
      if (item.firstElementChild.value === "") {
        loginError(item, "incorrect password", item.lastElementChild);
        validateSignIn.password = "";
      } else if (item.firstElementChild.value.length <= 5) {
        loginError(
          item,
          "password must not be less than 5",
          item.lastElementChild
        );
        validateSignIn.password = "";
      } else {
        validateLogin(item, item.lastElementChild);
        validateSignIn.password = item.lastElementChild.value;
      }
    }
  });

  if (validateSignIn.email !== "" && validateSignIn.password !== "") {
    signIn(val1.value, val2.value);
  }
  // console.log(val1.value);
}

function signIn(email, password) {
  let details;
  if (localStorage.getItem("details") === null) {
    details = [];
  } else {
    details = JSON.parse(localStorage.getItem("details"));
  }
  details.forEach((info) => {
    if (info.email === email && info.password === password) {
      timeOut(2000, "login successful", "/index.html");
      console.log("good");
    } else {
      invalidAccount(2000, "Account does not exist", "#f25d5d");
      console.log("bad");
    }
  });
}

function timeOut(time, message, location) {
  document.querySelector(".account-creation").style.display = "block";
  document.querySelector(".account-creation").textContent = message;
  setTimeout(() => {
    document.querySelector(".account-creation").style.display = "none";

    window.document.location.href = location;
  }, time);
}

function invalidAccount(time, message, bColor) {
  document.querySelector(".account-creation").style.display = "block";
  document.querySelector(".account-creation").textContent = message;
  document.querySelector(".account-creation").style.backgroundColor = bColor;
  setTimeout(() => {
    document.querySelector(".account-creation").style.display = "none";
  }, time);
}

// console.log(localStorage.getItem("details"));
