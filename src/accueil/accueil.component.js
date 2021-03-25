import template from './accueil.html';

export class AccueilComponent {

    constructor() {
        this.displayAccueil(document.querySelector("main"));
    }
    displayAccueil(element) {
        element.innerHTML = template
    }
}