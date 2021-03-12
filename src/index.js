import "../node_modules/materialize-css";
import "materialize-css";
import {putNavBar} from "./shared/navbar"
import {viewAccueil} from "./accueil/accueil";
import {viewMaBibliotheque} from "./mabibliotheque/mabibliotheque";
import {viewMenuDeSelection} from "./menudeselection/menudeselection";
import {viewPreferences} from "./preferences/preferences";
import {viewChargement} from "./chargement/chargement";
import {viewJeuPropose} from "./jeupropose/jeupropose";

putNavBar(document.querySelector("header"));

viewAccueil(document.querySelector("main"));
viewMaBibliotheque(document.querySelector("main"));
viewMenuDeSelection(document.querySelector("main"));
viewPreferences(document.querySelector("main"));
viewChargement(document.querySelector("main"));
viewJeuPropose(document.querySelector("main"));





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


/*<footer class="page-footer">
    <div class="footer-copyright">
      <div class="container">© 2021 Copyright Text<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>*/
  