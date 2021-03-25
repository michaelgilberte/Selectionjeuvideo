import { Budget } from "./budget.model";
import { Categories } from "./categories.model";
import { Humeur } from "./humeur.model";


export class Jeu {

    /**
     * Game
     * The game is determined by three class : categories, budget and humeur. 
     */
    constructor() {
        this.categories = new Categories;
        this.humeur = new Budget;
        this.budget = new Humeur;
        ;

    }

}