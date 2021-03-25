import template from './mabibliotheque.html';
 
export class MaBibliothequeComponent {
 
    constructor() {
this.displayMaBibliotheque(document.querySelector("main"));
    }
displayMaBibliotheque(element) {
    element.innerHTML = template
}
}