import "../node_modules/materialize-css";
import "materialize-css";


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  console.log('hello woooorld');

/*Exercice
const header = document.querySelector("header");

const nav = document.createElement("nav");
const div = document.createElement("div");
const aLogo = document.createElement("a");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const lia1 = document.createElement("a");
const lia2 = document.createElement("a");
const lia3 = document.createElement("a");

nav.appendChild(div);
div.appendChild(aLogo);
div.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.appendChild(lia1);
li2.appendChild(lia2);
li3.appendChild(lia3);

aLogo.appendChild(document.createTextNode("Accueil"));
li1.appendChild(document.createTextNode("Préférences"));
li2.appendChild(document.createTextNode("Jeu au hasard"));
li3.appendChild(document.createTextNode("Ma biliothèque"));

header.appendChild(nav);*/


  /*Exercice
const header = document.querySelector("header");

header.innerHTML = `<nav>
<div class="nav-wrapper">
<a href="#" class="brand-logo">Logo</a>
<ul id="nav-mobile" class="right hide-on-med-and-down">
  <li><a href="sass.html">Sass</a></li>
  <li><a href="badges.html">Components</a></li>
  <li><a href="collapsible.html">JavaScript</a></li>
</ul>
</div>
</nav>`;
$;{header}*/



const viewPreferences = (main) => {

main.innerHTML=`<h1>Catégories de jeux</h1>

<p>Sélectionne les catégories de jeux que tu préfères :</p>

<form method="GET" action="#">
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Indépendant</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Stratégie</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Gestion</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Action</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>RPG</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Aventure</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Simulation</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Course</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="catégorie" />
            <span>Sport</span>
        </label>
    </p>

</form>

<section class="budget">

<h1>Budget</h1>

<p>Dis-moi ton budget :</p>

<ol>
    <li>0-10€</li>
    <li>11-20€</li>
    <li>21-30€</li>
    <li>30-40€</li>
    <li>40-50€</li>
    <li>50€ et plus</li>
</ol>



<form action="#">
    <p class="range-field">
        <input type="range" id="test5" min="0" max="" step="10" />
    </p>
</form>

</section>


<section class="humeur">

<h1>Humeur</h1>

<p>Je veux un jeu qui soit...</p>

<form method="GET" action="#">
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Joyeux</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Triste</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Poétique</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Mélancolique</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Défouloir</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Comique</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Cérébral</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Dynamique</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Sportif</span>
        </label>
    </p>
    <p>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" id="humeur" />
            <span>Effrayant</span>
        </label>
    </p>

</form>

</section>

<br>

<button class="btn waves-effect waves-light" id="mon-bouton-oui" action="../jeupropose.html" type="submit"
    name="action">Voir à quel jeu
    je joue aujourd'hui
    <i class="material-icons right">send</i>
</button>

<br>`};  
  
viewPreferences(document.querySelector("main"))