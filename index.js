/* eslint-disable prettier/prettier */
import { Nav, Header, Main, Footer } from "./components";
import * as state from './store';

import Navigo from "navigo";
import {capitalize} from "lodash"

const router = new Navigo(window.location.origin);

router.on({
  ":page" : (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home)
}).resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
