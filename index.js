// Users should be able to:

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Select and submit a number rating
// - See the "Thank you" card state after submitting a rating

const survey = document.querySelector(".container-one");
const submitbtn = document.querySelector(".submit");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const thanks = document.querySelector(".container-two");
const options = document.querySelectorAll("[data-number]");
const choice = document.querySelector(".choice");

// options.forEach((number) => {
//     number.addEventListener("click", () => {
//         // choice.innerText = value;
//     });
// });

one.addEventListener("click", () => {
    one.style.backgroundColor = "hsl(25, 97%, 53%)";
    choice.innerHTML = " 1 ";
});

two.addEventListener("click", () => {
    two.style.backgroundColor = "hsl(25, 97%, 53%)";
    choice.innerHTML = " 2 ";
});

three.addEventListener("click", () => {
    three.style.backgroundColor = "hsl(25, 97%, 53%)";
    choice.innerHTML = " 3 ";
});

four.addEventListener("click", () => {
    four.style.backgroundColor = "hsl(25, 97%, 53%)";
    choice.innerHTML = " 4 ";
});

five.addEventListener("click", () => {
    five.style.backgroundColor = "hsl(25, 97%, 53%)";
    choice.innerHTML = " 5 ";
});

submitbtn.addEventListener("click", () => {
    survey.style.display = "none";
    thanks.style.display = "block";
});

// Dynamically show the current year
const year = (document.getElementById("year").innerHTML =
    new Date().getFullYear());
