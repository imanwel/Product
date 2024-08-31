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

// document.addEventListener("DOMContentLoaded", () => {
//   timeOut(3000);
// });

const validateSuccess = (val, errorMessage) => {
  errorMessage.style.visibility = "hidden";
  val.firstElementChild.classList.remove("invalid");
  val.firstElementChild.classList.add("valid");
};
const validateError = (val, cautionMessage, errorMessage) => {
  errorMessage.style.visibility = "visible";
  errorMessage.textContent = cautionMessage;
  val.firstElementChild.classList.remove("valid");
  val.firstElementChild.classList.add("invalid");
};

form.addEventListener("submit", runSubmit);

function runSubmit(e) {
  e.preventDefault();
  let eachInput = Array.from(form.children);

  let validated = {
    // firstname: "",
    // lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  let loginDetails = {
    email: validated.email,
    password: validated.confirmPassword,
  };

  if (
    // validated.firstname !== "" &&
    // validated.lastname !== "" &&
    validated.username !== "" &&
    validated.email !== "" &&
    validated.confirmPassword !== ""
  ) {
    saveInputsValue();
    timeOut(
      3000,
      "Account created successfully",
      "http://127.0.0.1:5502/signIn.html"
    );
    // console.log("good");
  } else {
    console.log("not saved to storage");
  }

  function saveInputsValue() {
    let details;
    if (localStorage.getItem("details") === null) {
      details = [];
    } else {
      details = JSON.parse(localStorage.getItem("details"));
    }
    details.push(loginDetails);
    localStorage.setItem("details", JSON.stringify(details));
  }
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

// function timeOut(time) {
//   document.querySelector(".account-creation").style.display = "block";
//   setTimeout(() => {
//     document.querySelector(".account-creation").style.display = "none";
//     window.location.href = "http://127.0.0.1:5502/signIn.html";
//   }, time);
// }

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
    timeOut(3000, "login successful", "http://127.0.0.1:5502/");
  } else {
    console.log("there's error in your work");
  }
}

function timeOut(time, message, location) {
  document.querySelector(".account-creation").style.display = "block";
  document.querySelector(".account-creation").textContent = message;
  setTimeout(() => {
    document.querySelector(".account-creation").style.display = "none";
    // window.location.href = "http://127.0.0.1:5502/";
    window.location.href = location;
  }, time);
}

console.log(localStorage.getItem("details"));
