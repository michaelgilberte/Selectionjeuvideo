export class Verify {

    constructor() {
    }

    static verify() {
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
            && false === multijoueurs.checked) {
            return false
        } if (false === joyeux.checked
            && false === triste.checked
            && false === poetique.checked
            && false === melancolique.checked
            && false === defoulant.checked
            && false === comique.checked
            && false === cerebral.checked
            && false === dynamique.checked
            && false === sportif.checked
            && false === effrayant.checked) {
            return false
        }
        return true
    }

}

