const form = document.querySelector("form");
const inputValue = document.querySelectorAll(".formInput");

// const errorMessage = document.querySelector(".empty");
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "rgb(223, 94, 94)";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "gray";
});

form.addEventListener("submit", runSubmit);
function runSubmit(e) {
  e.preventDefault();
  let eachInput = Array.from(form.children);

  // console.log(eachInput);

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

  // console.log(validated);

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
