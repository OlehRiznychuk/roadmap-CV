// import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.1.0/build/es6/luxon.min.js";

// let dateNow = DateTime.now();
// console.log(dateNow);
// console.log(dateNow.year);

// function calculateAge() {
//   let userInput = document.getElementById("date-input").value;
//   let userYearsElement = document.getElementById("user-years");
//   let userMonthsElement = document.getElementById("user-months");

//   userInput = userInput.split("-");

//   let userYear = dateNow.year - userInput[0];
//   let userMonth = dateNow.month - userInput[1];
//   let userDay = dateNow.day - userInput[2];

//   userYearsElement.innerHTML = userYear;
//   userMonthsElement.innerHTML = userMonth;

//     console.log(userInput);
//     console.log(userYear);
//     console.log(userMonth);
//     console.log(userDay);
// }

// document.querySelector(".calc-btn").addEventListener("click", calculateAge);

import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.1.0/build/es6/luxon.min.js";

function calculateAge() {
  let userInput = document.getElementById("date-input").value;

  if (!userInput) {
    alert("Please enter your birth date.");
    return;
  }

  let birthDate = DateTime.fromISO(userInput);
  let dateNow = DateTime.now();

  let age = dateNow.diff(birthDate, ["years", "months"]).toObject();

  document.getElementById("user-years").textContent = Math.floor(age.years);
  document.getElementById("user-months").textContent = Math.floor(age.months);

  document.getElementById("finalAge").style.opacity = "1";
}

document.querySelector(".calc-btn").addEventListener("click", calculateAge);
console.log(DateTime.now());
