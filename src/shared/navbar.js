import { viewPreferences } from '../preferences/preferences';
import template from './navbar.html';

export const putNavBar = (element) => {
    element.innerHTML = template;
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

    const monespace = document.querySelector('.monespace');
    const monespace2 = document.querySelector('.monespace2');
    monespace.onclick = () => {
        viewPreferences(document.querySelector("main"));
        return false;
    };

    monespace2.onclick = () => {
        viewPreferences(document.querySelector("main"));
        return false;

    };

    

}; 





