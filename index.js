/* eslint-disable prettier/prettier */
import { Nav, Header, Main, Footer } from "./components";
import * as state from './store';



import Navigo from "navigo";
import { capitalize } from "lodash";
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
  if (st.view === "Quiz") {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      form.style.display = "none";
      console.log("You submitted something dope");

      const inputList = event.target.elements
      const requestData = {
        size: inputList.size.value,
        grooming: inputList.grooming.value,
        energy: inputList.energy.value
      }

      axios
        .post(`${process.env.API}/quizAnswers`, requestData)
        .then(response => {
          state.Quiz.quizAnswers.push(response.data);
          router.navigate("/Quiz");
        })
        .catch(error => {
          console.log("It puked", error);
        })

    })
  }
}






// add event listeners to Nav items for navigation
document.querySelectorAll("nav a").forEach((navLink) =>
  navLink.addEventListener("click", (event) => {
    event.preventDefault();
    render(state[event.target.title]);
  })
);

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




router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    switch (page) {
      case "Veterinarians":
        axios
          .get(
            `https://api.yelp.com/v3/businesses/search`, {
            headers: {
              // Host: `api.yelp.com`,
              Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            },
            params: {
              location: "Nashville",
              term: "Veterinarians",
              open_now: true
            }
          }
          )
          .then(response => {
            // state.Veterinarians.search = {};
            // state.Veterinarians.search.city = response.data.business.location.city;
            // state.Veterinarians.search.location = response.data.business.location;
            // state.Veterinarians.search.name = response.data.business.name
            // state.Veterinarians.search.title = response.data.business.categories.title;
            console.log(response);
            done();
          })
          .catch((err) => console.log(err));
        break;
      default:
        done();
    }
  }
});

router.on({
  ":page": (params) => render(state[capitalize(params.page)]),
  "/": () => render(state.Home)
}).resolve();
