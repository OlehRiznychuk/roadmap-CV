const btnShowAnswer = document.querySelector(".show-answer");
const btnPrevious = document.querySelector(".ui-btn");
const btnNext = document.querySelector(".right");

const allQuestions = document.querySelectorAll(".question");
const allAnswers = document.querySelectorAll(".answer");

const progressBar = document.querySelector('.progress-done');

let width = 25; 
let index = 0;

progressBar.style.width = width + "%";


const toggleAnswer = function () {
  if (allAnswers[index].classList.contains("hidden")) {
    allQuestions[index].classList.add("hidden");
    allAnswers[index].classList.remove("hidden");
    btnShowAnswer.textContent = "Hide Answer";
  } else {
    allQuestions[index].classList.remove("hidden");
    allAnswers[index].classList.add("hidden");
    btnShowAnswer.textContent = "Show Answer";
  }
};

btnShowAnswer.addEventListener("click", toggleAnswer);

const previous = function () {
  if (index > 0) {
    allQuestions[index].classList.add("hidden");
    allAnswers[index].classList.add("hidden");
    
    index--;
    progressBar.style.width = (width * (index + 1)) + "%";

    allQuestions[index].classList.remove("hidden");
  }
};

const next = function () {
  if (index < allQuestions.length - 1) {
    allQuestions[index].classList.add("hidden");
    allAnswers[index].classList.add("hidden");

    index++;
    progressBar.style.width = (width * (index + 1)) + "%";

    allQuestions[index].classList.remove("hidden");
  }
};

btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);
