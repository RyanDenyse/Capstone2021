/* eslint-disable prettier/prettier */
import html from "html-literal";
import * as views from "./views"

export default (st) => html`

${views[st.view](st)}

`;
{/* <div class="header" id="h1">
<h1>Let Us Help You Find Your Perfect Pet Match</h1>
</div>
 */}
