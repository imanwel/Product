// // const signInForm = document.querySelector(".signIn");
// // const button = document.querySelector(".btn");

// // button.addEventListener("mouseenter", () => {
// //   button.style.backgroundColor = "rgb(223, 94, 94)";
// // });
// // button.addEventListener("mouseleave", () => {
// //   button.style.backgroundColor = "gray";
// // });

// signInForm.addEventListener("submit", runLogin);

// let validateSignIn = {
//   email: "",
//   password: "",
// };

// function runLogin(e) {
//   e.preventDefault();

//   let allInputs = document.querySelectorAll(".formInput");
//   let inputValues = Array.from(allInputs);
//   let [val1, val2] = inputValues;

//   let inputFields = document.querySelectorAll(".fields");
//   let theInputs = Array.from(inputFields);

//   theInputs.forEach((item) => {
//     if (item.firstElementChild.classList.contains("signInEmail")) {
//       if (item.firstElementChild.value === "") {
//         loginError(item, "invalid email", item.lastElementChild);
//         validateSignIn.email = "";
//       } else {
//         validateLogin(item, item.lastElementChild);
//         validateSignIn.email = item.lastElementChild.value;
//       }
//     } else if (item.firstElementChild.classList.contains("signInPassword")) {
//       if (item.firstElementChild.value === "") {
//         loginError(item, "incorrect password", item.lastElementChild);
//         validateSignIn.password = "";
//       } else if (item.firstElementChild.value.length <= 5) {
//         loginError(
//           item,
//           "password must not be less than 5",
//           item.lastElementChild
//         );
//         validateSignIn.password = "";
//       } else {
//         validateLogin(item, item.lastElementChild);
//         validateSignIn.password = item.lastElementChild.value;
//       }
//     }
//   });

//   if (validateSignIn.email !== "" && validateSignIn.password !== "") {
//     console.log(validateSignIn);
//     signIn(val1.value, val2.value);
//   }
//   // console.log(val1.value);
// }

// function signIn(email, password) {
//   console.log("emil:", email);
//   console.log("pasword:", password);
// }

// function timeOut(time, message, location) {
//   document.querySelector(".account-creation").style.display = "block";
//   document.querySelector(".account-creation").textContent = message;
//   setTimeout(() => {
//     document.querySelector(".account-creation").style.display = "none";

//     window.document.location.href = location;
//   }, time);
// }

// function invalidAccount(time, message, bColor) {
//   document.querySelector(".account-creation").style.display = "block";
//   document.querySelector(".account-creation").textContent = message;
//   document.querySelector(".account-creation").style.backgroundColor = bColor;
//   setTimeout(() => {
//     document.querySelector(".account-creation").style.display = "none";
//   }, time);
// }
