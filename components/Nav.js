/* eslint-disable prettier/prettier */
import html from "html-literal";

import PetMatchLogo from '../';

export default () => html`
  <div id="navbar">
  <!-- <img id="logo" src="./PetMatchLogo.png" alt="Pet Match Logo" width="200" height="100"> -->
      <ul class="navlist" id="list1">
        <li><img src="${PetMatchLogo}" alt="Pet Match Logo"></li>
        <li class="navlist-item"><a href="">Find Your Match</a></li>
        <li class="navlist-item"><a href="">Veterinarians</a></li>
        <li class="navlist-item"><a href="">Breed Info</a></li>
        <li class="navlist-item"><a href="">General Health Info</a></li>
      </ul>
    </nav>
  </div>
`;
