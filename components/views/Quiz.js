/* eslint-disable prettier/prettier */
import html from "html-literal";
export default (st) => html`

<div id="quizheader">
<h1>Pet Match Quiz</h1>
</div>

<form id="questions" >
  <h2> How would you described the size of your living space? </h2>
  <div>
  <label for="size"><input type="radio" name="size" value="small" id="size-small" /> Small with no yard available </label>
  <label for="size"><input type="radio" name="size" value="medium" id="size-medium" /> Moderate space with a yard </label>
  <label for="size"><input type="radio" name="size" value="large" id="size-large" /> Large space with a large yard for playtime </label>
  </div>

  <h2>How often can you commit to grooming your dog?</h2>
  <div>
  <label for="grooming"><input type="radio" name="grooming" value="low" id="once" /> Once a week </label>
  <label for="grooming"><input type="radio" name="grooming" value="medium" id="2-3xWeek" /> 2-3 times a week </label>
  <label for="grooming"><input type="radio" name="grooming" value="large" id="onceADay" /> Once a day </label>
  </div>

  <h2>How active are you?</h2>
  <div>
  <label for="energy"><input type="radio" name="energy" value="low" id="energy-low" /> I'm a couch potato </label>
  <label for="energy"><input type="radio" name="energy" value="medium" id="energy-medium" /> I enjoy regular activities outdoors </label>
  <label for="energy"><input type="radio" name="energy" value="large" id="energy-high" /> I'm always seeking new outdoor adventures </label>
  </div>

<div>
<button id="submit">Submit Quiz</button>
</div>

</form>
<div id="results"></div>
`;



