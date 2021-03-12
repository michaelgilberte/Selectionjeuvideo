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
    <a href="#!" class="brand-logo">Accueil</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a href="accueil.html">Accueil</a></li>
        <li><a href="menudeselection.html">Mon espace</a></li>
        <li><a href="mabibliotheque.html">Ma bibliothèque</a></li>
        <li><a href="viewPreferences">Sélectionner votre jeu</a></li>
        <li><a href="random.html">Jeu au hasard</a></li>

    </ul>
</div>
</nav>

<ul class="sidenav" id="mobile-demo">
<li><a href="accueil.html">Accueil</a></li>
<li><a href="menudeselection.html">Mon espace</a></li>
<li><a href="mabibliotheque.html">Ma bibliothèque</a></li>
<li><a href="viewPreferences">Sélectionner votre jeu</a></li>
<li><a href="random.html">Jeu au hasard</a></li>
</ul>`;
$;{header}*/

/*<footer class="page-footer">
    <div class="footer-copyright">
      <div class="container">© 2021 Copyright Text<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>*/

import {viewAccueil} from "./accueil/accueil";
 
viewAccueil(document.querySelector("body"));

import {viewPreferences} from "./preferences/preferences";

viewPreferences(document.querySelector("body"));

import {viewChargement} from "./chargement/chargement";

viewChargement(document.querySelector("body"));

import {viewJeuPropose} from "./jeupropose/jeupropose";

viewJeuPropose(document.querySelector("body"));

import {viewMaBibliotheque} from "./mabibliotheque/mabibliotheque";

viewMaBibliotheque(document.querySelector("body"));

import {viewMenuDeSelection} from "./menudeselection/menudeselection";

viewMenuDeSelection(document.querySelector("body"));