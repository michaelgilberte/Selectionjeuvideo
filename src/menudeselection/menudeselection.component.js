import template from './menudeselection.html';
 
export class MenuDeSelectionComponent {
 
    constructor() {
this.displayMenuDeSelection(document.querySelector("main"));
    }
displayMenuDeSelection(element) {
    element.innerHTML = template
}
}