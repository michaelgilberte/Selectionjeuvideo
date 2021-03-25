import template from './preferences.html';
import noUiSlider from 'nouislider';
import { Categories } from "../shared/models/categories.model"
import { Jeu } from '../shared/models/jeu.model';
import { Humeur } from '../shared/models/humeur.model';
import { JeuService } from '../shared/services/jeu.service';
import { JeuProposeComponent } from '../jeupropose/jeupropose.component';
import { Verify } from '../shared/services/verify.service';


export class PreferencesComponent {

    constructor() {
        this.displayPreferences(document.querySelector("main"));
    };

    displayPreferences(element) {
        element.innerHTML = template;
        this.displaySlider();
        this.displaySliderPrice();
        const giveFormGame = document.querySelector("#mon-bouton-oui");
        giveFormGame.onclick = (element) => {
            this.verify();
        };
    };


    displaySlider() {
        var slider = document.getElementById('test-slider');
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            step: 10,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 100
            },
        });

    }

    displaySliderPrice() {
        //chiffres qui apparaissent quand on utilise le slider//
        const slider = document.getElementById('test-slider');
        slider.noUiSlider.on("change", () => {
            console.log(slider.noUiSlider.get());
            document.querySelector(".min").innerHTML = slider.noUiSlider.get()[0]
            document.querySelector(".max").innerHTML = slider.noUiSlider.get()[1]
        });
    };

    displayErrorMessage() {
        const errorMessage = document.querySelector(".erreur-message");
        errorMessage.innerHTML = "Vous devez cocher au moins une case";


    };

    verify() {
        const hasBeenVerified = Verify.verify();
        if (false === hasBeenVerified) {
            this.displayErrorMessage();
        }
        else if (true === hasBeenVerified) {
            new JeuProposeComponent;
        }

    }

};













/*import { viewJeuPropose } from '../jeupropose/jeupropose';
import template from './preferences.html';
import noUiSlider from 'nouislider';

//composant --> (nom fichier) Preferences.component.js ; (nom method) display ; (attribut) displayGame
export const viewPreferences = (element) => {
    element.innerHTML = template;

    // composant --> Slider.component.js ; display ; displaySlider
    var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
        start: [0, 100],
        connect: true,
        step: 10,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
            'min': 0,
            'max': 100
        },
    });

    // composant --> SliderPrice.component.js ; display ; displaySliderPrice
    slider.noUiSlider.on("change", () => {
        console.log(slider.noUiSlider.get());
        document.querySelector(".min").innerHTML = slider.noUiSlider.get()[0]
        document.querySelector(".max").innerHTML = slider.noUiSlider.get()[1]
    });

//composant --> ValidButton.component.js ; interact ; interactValidButton
    const giveFormGame = document.querySelector("#mon-bouton-oui");


    }
//model
    /*  slider.noUiSlider.get();

      const independant = document.querySelector(".independant")
      const strategie = document.querySelector(".strategie")
      const gestion = document.querySelector(".gestion")
      const action = document.querySelector(".action")
      const rpg = document.querySelector(".rpg")
      const fps = document.querySelector(".fps")
      const aventure = document.querySelector(".aventure")
      const simulation = document.querySelector(".simulation")
      const course = document.querySelector(".course")
      const sport = document.querySelector(".sport")
      const multijoueurs = document.querySelector(".multijoueurs")

      const joyeux = document.querySelector(".joyeux")
      const triste = document.querySelector(".triste")
      const poetique = document.querySelector(".poetique")
      const melancolique = document.querySelector(".melancolique")
      const defoulant = document.querySelector(".defoulant")
      const comique = document.querySelector(".comique")
      const cerebral = document.querySelector(".cerebral")
      const dynamique = document.querySelector(".dynamique")
      const sportif = document.querySelector(".sportif")
      const effrayant = document.querySelector(".effrayant")
 //composant
      const error = document.querySelector(".erreur-message")
 //service
      console.log(independant.checked);
      if (false === independant.checked
          && false === strategie.checked
          && false === gestion.checked
          && false === action.checked
          && false === rpg.checked
          && false === fps.checked
          && false === aventure.checked
          && false === simulation.checked
          && false === course.checked
          && false === sport.checked
          && false === multijoueurs.checked ) {
          console.log("pasok");
          //composant
          error.innerHTML = "Vous devez cocher au moins une case";
      } else if (false === joyeux.checked
          && false === triste.checked
          && false === poetique.checked
          && false === melancolique.checked
          && false === defoulant.checked
          && false === comique.checked
          && false === cerebral.checked
          && false === dynamique.checked
          && false === sportif.checked
          && false === effrayant.checked ) {
          console.log("pasok");
          error.innerHTML = "Vous devez cocher au moins une case";

      } else {

          const jeux = {
              categories: {
                  independant: independant.checked,
                  strategie: strategie.checked,
                  gestion: gestion.checked,
                  action: action.checked,
                  rpg: rpg.checked,
                  aventure: aventure.checked,
                  simulation: simulation.checked,
                  course: course.checked,
                  sport: sport.checked,

              },
              budget: {
                  min: slider.noUiSlider.get()[0],
                  max: slider.noUiSlider.get()[1],

              },
              humeur: {
                  joyeux: joyeux.checked,
                  triste: triste.checked,
                  poetique: poetique.checked,
                  melancolique: melancolique.checked,
                  defoulant: defoulant.checked,
                  comique: comique.checked,
                  cerebral: cerebral.checked,
                  dynamique: dynamique.checked,
                  sportif: sportif.checked,
                  effrayant: effrayant.checked,
              }
          };
 //service
          console.log(jeux);
          console.log('ok');
          viewJeuPropose(document.querySelector("main"));

      };







    return false;
};





};
};
*/