/* eslint-disable prettier/prettier */
import html from "html-literal";
export default () => html`

<h1>Pet Match Quiz</h1>

<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>

<form id="questions">
  <h2>What size dog would you like?</h2>
  <div>
  <label for="size"><input type="radio" name="size" value="small" id="size-small" />Small</label>
  <label for="size"><input type="radio" name="size" value="medium" id="size-medium" />Medium</label>
  <label for="size"><input type="radio" name="size" value="large" id="size-large" />Large</label>
  </div>

</form>

`;


