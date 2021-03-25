import template from './jeupropose.html';

export class JeuProposeComponent {

    constructor() {
        this.displayJeuPropose(document.querySelector("main"));
    }
    displayJeuPropose(element) {
        element.innerHTML = template
    }
}