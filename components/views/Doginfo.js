/* eslint-disable prettier/prettier */
import html from "html-literal";
import Tzu from "../../lib/shihtzu.jpg";
import Akita from "../../lib/akita.jpg";
import Boxer from "../../lib/boxer.jpg";
import Dach from "../../lib/dachshund.jpg";
import Chi from "../../lib/chihuahua.jpg";

export default () => html`

<div id="BImainheader">
  <h1>Breed Information</h1>
</div>

<div>
  <h2 class="doglabel"> Akita </h2>

  <div class="dogpics">
    <img id="Akita" src="${Akita}" alt="Akita" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Akita's are natural protectors and love human companionship. These dogs take protecting their family seriously
      but also loves a good play session! This dogs need an outlet to exercise and craves mental stimulation. These dogs
      have a dense coat that does require regular brushing to avoid shedding all over the home. Socialization is key
      with this breed! Read more about Akitas <a href="https://www.akc.org/dog-breeds/akita/">here</a>
    </p>
  </div>

</div>

<div>
  <h2 class="doglabel"> Boxer </h2>
  <div class="dogpics">
    <img id="Boxer" src="${Boxer}" alt="Boxer" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Loyalty, affection, intelligence, work ethic, and good looks: Boxers are the whole doggy package. Bright and
      alert, sometimes silly, but always courageous, the Boxer has been among America's most popular dog breeds for a
      very long time. Boxers move like the athletes they are named for: smooth and graceful, with a powerful forward
      thrust. Boxers are upbeat and playful. Their patience and protective nature have earned them a reputation as a
      great dog with children. They take the jobs of watchdog and family guardian seriously and will meet threats
      fearlessly. Boxers do best when exposed to a lot of people and other animals in early puppyhood.Read more about
      Boxers <a href="https://www.akc.org/dog-breeds/boxer/">here</a>
    </p>
  </div>

</div>

<div>
  <h2 class="doglabel"> Chihuahua </h2>
  <div class="dogpics">
    <img id="Chihuahua" src="${Chi}" alt="Chihuahua" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> The Chihuahua is a tiny dog with a huge personality. A national symbol of Mexico, these alert and amusing "purse
      dogs" stand among the oldest breeds of the Americas, with a lineage going back to the ancient kingdoms of
      pre-Columbian times. The Chihuahua is a balanced, graceful dog of terrier-like demeanor. The rounded "apple" head
      is a breed hallmark. The erect ears and full, luminous eyes are acutely expressive. Coats come in many colors and
      patterns, and can be long or short. The varieties are identical except for coat. Chihuahuas possess loyalty,
      charm, and big-dog attitude. Even tiny dogs require training, and without it this clever scamp will rule your
      household like a little Napoleon. Compact and confident, Chihuahuas are ideal city pets. They are too small for
      roughhousing with kids, and special care must be taken in cold weather, but Chihuahuas are adaptable as long as
      they get lots of quality time in their preferred lap. Read more about Chihuahuas <a
        href="https://www.akc.org/dog-breeds/chihuahua/">here</a>
    </p>
  </div>

</div>

<div>
  <h2 class="doglabel"> Shih Tzu </h2>
  <div class="dogpics">
    <img id="Tzu" src="${Tzu}" alt="Shih Tzu" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Shih Tzu's are a fun and loving breed! They are affectionate and love a good cuddle session on the couch! The
      Shih Tzu is known to be especially affectionate with children. As a small dog bred to spend most of their day
      inside royal palaces, they make a great pet if you live in an apartment or lack a big backyard. Some dogs live to
      dig holes and chase cats, but a Shih Tzu's idea of fun is sitting in your lap acting adorable as you try to watch
      TV. Due to
      their fur, Shih Tzu's need to be groomed frequently and brushed daily to avoid matting, however shedding is very
      minimal. These dogs are prone to dental disease and other oral issues so be sure to form a good dental regimen
      with your Veterinarian! Read more about Shih Tzus <a href="https://www.akc.org/dog-breeds/shih-tzu/">here</a>.
    </p>
  </div>

</div>

<div>
  <h2 class="doglabel"> Short-Haired Dachshund </h2>
  <div class="dogpics">
    <img id="Dach" src="${Dach}" alt="Dachshund" width="600" height="500">
  </div>

  <div class="dogdesc">
    <p> Dachshund's are a friendly and curious breed! Playtime is invaluable to them and they are always seeking
      adventure. They are affectionate and charismatic! Dachshunds aren't built for distance running, leaping, or
      strenuous swimming, but otherwise these tireless hounds are game for anything. Smart and vigilant, with a big-dog
      bark, they make fine watchdogs. Bred to be an independent hunter of dangerous prey, they can be brave to the point
      of rashness, and a bit stubborn, but their endearing nature and unique look has won millions of hearts the world
      over.
      Short-Haired Dachshund's grooming needs are minimal but are moderate shedders. However, there are three different
      coat variations of dachshund and their grooming needs vary
      dependent on they type. Due to their shape, Dachshunds can be prone to back and joint injuries. Keeping these dogs
      at a healthy weight can aid in avoiding some injuries. Please discuss preventative measures with your
      Veterinarian. Read more about Dachshunds <a href="https://www.akc.org/dog-breeds/dachshund/">here</a>.
    </p>
  </div>

</div>


`;
