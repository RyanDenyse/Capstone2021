/* eslint-disable prettier/prettier */
import { Nav, Header, Main, Footer } from "./components";
import * as state from './store';


import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);
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
};

function addEventListeners(st) {
// add event listeners to Nav items for navigation
document.querySelectorAll("nav a").forEach((navLink) =>
navLink.addEventListener("click", (event) => {
  event.preventDefault();
  render(state[event.target.title]);
})
);
}

// fetching our data from an API
fetch("url-to-API-endpoint")
  // parsing our response into JSON format
  .then((response) => response.json())
  // "using" the formatted response in our script
  .then((json) => console.log(json));

  axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data));

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {
//   myFunction();
// };

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// };

// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";
//   }
// });



router.on({
  ":page" : (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home)
}).resolve();
