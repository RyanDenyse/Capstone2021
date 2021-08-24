/* eslint-disable prettier/prettier */
import html from "html-literal";
import Pet from "../lib/PetMatchLogo.png";
// import PetMatchLogo from '/Users/RyanDenyse/Code/SavvyCoders2/Capstone2021/lib/PetMatchLogo.png';

export default (links) => html`

  <div id="navbar">
  <nav>
      <ul class="navlist" id="list1">
        <img id="logo" src="${Pet}" alt="Pet Match Logo" width="200" height="100">
        ${links.map(
          (link) => `<li class="navlist-item"><a href="${link.title}" title="${link.title}">${link.text}</a></li>`
        )}
      </ul>
    </nav>
  </div>
`;

{/* <li class="navlist-item"><a href="">Find Your Match</a></li>
        <li class="navlist-item"><a href="">Veterinarians</a></li>
        <li class="navlist-item"><a href="">Breed Info</a></li>
        <li class="navlist-item"><a href="">General Health Info</a></li> */}
