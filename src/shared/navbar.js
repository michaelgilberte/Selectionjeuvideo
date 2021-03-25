import { AccueilComponent } from '../accueil/accueil.component';
import { viewMaBibliotheque } from '../mabibliotheque/mabibliotheque';
import { MaBibliothequeComponent } from '../mabibliotheque/mabibliotheque.component';
import { viewMenuDeSelection } from '../menudeselection/menudeselection';
import { MenuDeSelectionComponent } from '../menudeselection/menudeselection.component';
import { PreferencesComponent } from '../preferences/Preferences.component';
import template from './navbar.html';
 
export const putNavBar = (element) => {
    element.innerHTML = template;
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
 
 
    document.querySelectorAll(".accueil").forEach((value) => {
        value.onclick = () => {
            new AccueilComponent();
        };
    });
 
    document.querySelectorAll(".preferences").forEach((value) => {
        value.onclick = () => {
            new PreferencesComponent();
        };
    });
 
    document.querySelectorAll(".bibliotheque").forEach((value) => {
        value.onclick = () => {
            new MaBibliothequeComponent();
        };
    });
 
    document.querySelectorAll(".menudeselection").forEach((value) => {
        value.onclick = () => {
            new MenuDeSelectionComponent();
        };
    });
 
};
    // document.querySelectorAll(".random").forEach((value) => {
    //     value.onclick = () => {
    //         RandomComponent(document.querySelector("main"));
    //     };
    // });
