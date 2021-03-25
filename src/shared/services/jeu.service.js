import { Categories } from "../models/categories.model";
import { Humeur } from "../models/humeur.model";
import { Jeu } from "../models/jeu.model";
 
const jeu = new Jeu;
 
export class JeuService {
 
    constructor() {
    }
 
    static setJeu() {
        jeu.categories.independant = document.querySelector(".independant").checked;
        jeu.categories.strategie = document.querySelector(".strategie").checked;
        jeu.categories.gestion = document.querySelector(".gestion").checked;
        jeu.categories.action = document.querySelector(".action").checked;
        jeu.categories.rpg = document.querySelector(".rpg").checked;
        jeu.categories.fps = document.querySelector(".fps").checked;
        jeu.categories.aventure = document.querySelector(".aventure").checked;
        jeu.categories.simulation = document.querySelector(".simulation").checked;
        jeu.categories.course = document.querySelector(".course").checked;
        jeu.categories.sport = document.querySelector(".sport").checked;
        jeu.categories.multijoueurs = document.querySelector(".multijoueurs").checked;
        jeu.budget.min = document.querySelector(".min");
        jeu.budget.max = document.querySelector(".max");
        jeu.humeur.joyeux = document.querySelector(".joyeux").checked;
        jeu.humeur.triste = document.querySelector(".triste").checked;
        jeu.humeur.poetique = document.querySelector(".poetique").checked;
        jeu.humeur.melancolique = document.querySelector(".melancolique").checked;
        jeu.humeur.defoulant = document.querySelector(".defoulant").checked;
        jeu.humeur.comique = document.querySelector(".comique").checked;
        jeu.humeur.cerebral = document.querySelector("cerebral").checked;
        jeu.humeur.dynamique = document.querySelector(".dynamique").checked;
        jeu.humeur.sportif = document.querySelector(".sportif").checked;
        jeu.humeur.effrayant = document.querySelector(".effrayant").checked;
    }
    static getJeu(){
        return jeu;
    }
}


    /*console.log("pasok");
    //composant
    error.innerHTML = "Vous devez cocher au moins une case";
*/
