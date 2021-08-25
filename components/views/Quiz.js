/* eslint-disable prettier/prettier */
import html from "html-literal";
export default () => html`

<h1>Pet Match Quiz</h1>


<form id="questions">
  <h2> How would you described the size of your living space? </h2>
  <div>
  <label for="size"><input type="radio" name="size" value="small" id="size-small" /> Small with no yard available </label>
  <label for="size"><input type="radio" name="size" value="medium" id="size-medium" /> Moderate space with a yard </label>
  <label for="size"><input type="radio" name="size" value="large" id="size-large" /> Large space with a large yard for playtime </label>
  </div>

  <h2>How often can you commit to grooming your dog?</h2>
  <div>
  <label for="grooming"><input type="radio" name="grooming" value="Once a week" id="once" /> Once a week </label>
  <label for="grooming"><input type="radio" name="grooming" value="2-3 times a week" id="2-3xWeek" /> 2-3 times a week </label>
  <label for="grooming"><input type="radio" name="grooming" value="Once a day" id="onceADay" /> Once a day </label>
  </div>

  <h2>How active are you?</h2>
  <div>
  <label for="energy"><input type="radio" name="energy" value="low" id="energy-low" /> I'm a couch potato </label>
  <label for="energy"><input type="radio" name="energy" value="medium" id="energy-medium" /> I enjoy regular activities outdoors </label>
  <label for="energy"><input type="radio" name="energy" value="large" id="energy-high" /> I'm always seeking new outdoor adventures </label>
  </div>

  <h2> What level of shedding is acceptable? </h2>
  <div>
  <label for="shedding"><input type="radio" name="shedding" value="low" id="shedding-low" /> As little as possible </label>
  <label for="shedding"><input type="radio" name="shedding" value="medium" id="shedding-medium" /> Some shedding is ok </label>
  <label for="shedding"><input type="radio" name="shedding" value="heavy" id="shedding-heavy" /> I can handle heavy shedding </label>
  <label for="shedding"><input type="radio" name="shedding" value="no preference" id="shedding-noPreference" /> I have no preference </label>
  </div>




<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>

</form>

`;


