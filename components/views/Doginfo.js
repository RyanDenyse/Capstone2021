/* eslint-disable prettier/prettier */
import html from "html-literal";
import Tzu from "../../lib/shihtzu.jpg";
import Akita from "../../lib/akita.jpg";
import Boxer from "../../lib/boxer.jpg";
import Dach from "../../lib/dachshund.jpg";

export default () => html`

<div id="BImainheader">
  <h1>Breed Information</h1>
</div>

<div>
  <h2 class="doglabel"> Shih Tzu </h2>
    <div class="dogpics">
    <img id="Tzu" src="${Tzu}" alt="Shih Tzu" width="600" height="500">
    </div>

    <div class="dogdesc">
      <p> Shih Tzu's are a fun and loving breed! They are affectionate and love a good cuddle session on the couch! Due to their fur, Shih Tzu's need to be groomed frequently and brushed daily to avoid matting, however shedding is very minimal. These dogs are prone to dental disease and other oral issues so be sure to form a good dental regimen with your Veterinarian! Read more about Shih Tzu's <a href="https://www.akc.org/dog-breeds/shih-tzu/">here</a>.
      </p>
    </div>

</div>

<div>
  <h2 class="doglabel"> Short-Haired Dachshund </h2>
    <div class="dogpics">
    <img id="Dach" src="${Dach}" alt="Dachshund" width="600" height="500">
    </div>

    <div class="dogdesc">
      <p> Dachshund's are a friendly and curious breed! Playtime is invaluable to them and they are always seeking adventure. They are affectionate and charismatic! Short-Haired Dachshund's grooming needs are minimal but are moderate shedders. However, there are three different coat variations of dachshund and their grooming needs vary dependent on they type. Due to their shape, Dachshunds can be prone to back and joint injuries. Keeping these dogs at a healthy weight can aid in avoiding some injuries. Please discuss preventative measures with your Veterinarian. Read more about Dachshund's <a href="https://www.akc.org/dog-breeds/dachshund/">here</a>.
      </p>
    </div>

</div>

<div>
  <h2 class="doglabel"> Boxer </h2>
  <div class="dogpics">
    <img id="Boxer" src="${Boxer}" alt="Boxer" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Read more about Boxer's <a href="https://www.akc.org/dog-breeds/boxer/">here</a>
    </p>
  </div>

</div>

<div>
  <h2 class="doglabel"> Akita </h2>

  <div class="dogpics">
    <img  id="Akita" src="${Akita}" alt="Akita" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Read more about Akita's <a href="https://www.akc.org/dog-breeds/akita/">here</a>
    </p>
  </div>

</div>

`;
