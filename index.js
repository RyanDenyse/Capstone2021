/* eslint-disable prettier/prettier */
import { Nav, Header, Main, Footer } from "./components";
import * as state from './store';


import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";
import e from "cors";

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
  if(st.view === "Quiz"){

    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
      event.preventDefault()
        form.style.display = 'none';
      console.log('You submitted something dope no cap');
      const answer = document.getElementById("results")
      answer.innerHTML = `
    <h1>${st.breeds[0].name}</h1>
      `
    })


  }
// add event listeners to Nav items for navigation
document.querySelectorAll("nav a").forEach((navLink) =>
navLink.addEventListener("click", (event) => {
  event.preventDefault();
  render(state[event.target.title]);
})
);
}

// // fetching our data from an API
// fetch("url-to-API-endpoint")
//   // parsing our response into JSON format
//   .then((response) => response.json())
//   // "using" the formatted response in our script
//   .then((json) => console.log(json));

//   axios
//   .get("https://api.yelp.com/v3/businesses/{xi_NafsMk55UWq8aKiXCwg}")
//   .then((response) => console.log(response.data));

// // When the user scrolls the page, execute myFunction
// // window.onscroll = function() {
// //   myFunction();
// // };

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// // function myFunction() {
// //   if (window.pageYOffset >= sticky) {
// //     navbar.classList.add("sticky");
// //   } else {
// //     navbar.classList.remove("sticky");
// //   }
// // };

// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";

//     if (page === "Veterinarians") {
//       axios
//       .get (
//         `https://api.yelp.com/v3/businesses/{xi_NafsMk55UWq8aKiXCwg}search?location=Nashville&categories=veterinarians=true HTTP/1.1<br>Host: api.yelp.com<br>Authorization: Bearer <R5G2Ckju74G-BbD0VMzzLF5UOsxguuCmUfFHAamvVVe-j6evtfr2cpm-EcOjseCGGlDQvSYD1UQQD31ry5--_iGmJyr4Bn54_fPRYmuNR57gY8xOvUr-dh7yK9MnYXYx><br>Cache-Control: no-cache`
//         )
//         .then(response => {
//           state.Veterinarians.search = {};
//           response.data.search[0];
//           done();
//         })
//         .catch((err) => console.log(err));
//     }
//   },
// });



router.on({
  ":page" : (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home)
}).resolve();
