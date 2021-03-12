export const putNavBar = (element) => {

element.innerHTML = `<nav>
<div class="nav-wrapper">
    <a href="#!" class="brand-logo">Accueil</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a href="">Accueil</a></li>
        <li><a href="">Mon espace</a></li>
        <li><a href="">Ma bibliothèque</a></li>
        <li><a href="">Sélectionner votre jeu</a></li>
        <li><a href="">Jeu au hasard</a></li>

    </ul>
</div>
</nav>

<ul class="sidenav" id="mobile-demo">
<li><a href="">Accueil</a></li>
<li><a href="">Mon espace</a></li>
<li><a href="">Ma bibliothèque</a></li>
<li><a href="">Sélectionner votre jeu</a></li>
<li><a href="">Jeu au hasard</a></li>
</ul>`;
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

}; 

