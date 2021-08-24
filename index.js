/* eslint-disable prettier/prettier */
import { Nav, Header, Main, Footer } from "./components";
import * as state from './store';


import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// Get the navbar
const navbar = document.getElementById("navbar");
// Get the offset position of the navbar
// const sticky = navbar.offsetTop;



function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
// add event listeners to Nav items for navigation
document.querySelectorAll("nav a").forEach((navLink) =>
navLink.addEventListener("click", (event) => {
  event.preventDefault();
  render(state[event.target.title]);
})
);
}

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   // handle the response from the API
//   .then((response) => {
//     // for each post in the response Array,
//     response.data.forEach((post) => {
//       // add it to state.Blog.posts
//       state.Quiz.posts.push(post);
//     });
//   });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
  }
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

router.on({
  ":page" : (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home)
}).resolve();
