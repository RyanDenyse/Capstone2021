/* eslint-disable prettier/prettier */
import html from "html-literal";
import dogs from "../../lib/dogs.jpg";
export default (st) => html`

<div id="resultHeader">
  <h2>Here Are Your Pet Match Results</h2>
</div>

<div id="results">
  <p>${st.result.name}</p>
</div>

<div id="lovepic">
  <img id="dogs" src="${dogs}" alt="group of dogs" width="800" height="500">
</div>

<div id="doginfoLink">
  <p>Learn More About Your Pet Match Breed <a href="./Doginfo"> Here </a>.
  </p>
</div>

`
