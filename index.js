// Users should be able to:

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Select and submit a number rating
// - See the "Thank you" card state after submitting a rating

let survey = document.getElementById(".rating");
let submit = document.getElementById(".submit");
let thanks = document.getElementById(".thanks");

// Dynamically show the current year
const year = (document.getElementById("year").innerHTML =
    new Date().getFullYear());
