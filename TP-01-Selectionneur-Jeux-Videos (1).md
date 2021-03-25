# 🎓 TP - 01 Sélectionneur de Jeux Vidéos

Votre objectif pendant ce TP est d'atteindre les objectifs fonctionnels.

Vous avez la capacité de vous exprimer en `HTML`, `CSS`, `d'utiliser des librairies`, vous disposez d'un `environnement de développement` et avez découvert `JavaScript` en étudiant les `variables`, les `types`, le `DOM`, les `fonctions` et les `évènements`.

___

## 🐥 Précedement

> Vous avez décidé d'une thématique de projet et vous avez découvert des syntaxes vous permettant de vous rapprocher de l'objectif du projet.

Vous travaillez à implémenter le rendu graphique en pur JavaScript pour obtenir une Single Page Application.

___

## 🦆 Maintenant

Vous allez découvrir:
* La logique métier
* Valider un formulaire

___

## 👨🏻‍💻 Logique

> Structure de données

C'est mainteant que vous rentrez dans la logique de votre projet: qu'est-ce qu'une séléction de jeux pour le projet?

* 📝 Proposez un objet qui clarifie la structure d'une selection

```js
const salary = {
    age: null,
    firstname: null,
    lastname: null
};
```

La composant d'affichage qui gère le formulaire de séléction doit disposer de cette structure. Son objectif est de collecter les donnèes du formulaire.

___

## 👨🏻‍💻 Formulaire

Au moment du submit de votre formulaire vous avez deux objectifs, valider les données saisie puis les affecter à votre structure de données.

Si le formulaire contient des informations obligatoires qui ne sont pas saisies ou que leur format est invalide, vous devez mettre en évidence ces erreurs. 

[@see materializecss.com/text-inputs](https://materializecss.com/text-inputs.html)

Remarquez à la section "Custom Error or Success Messages" que vous pouvez fournir un message d'erreur. Quand un élément est invalide, materialize lui affecte une classe particulière pour le mettre en erreur (l'initialisation doit être correcte).

Vous avez besoin d'une structure du langage pour effectuer des décisions. Je vous invite à observer la structure conditionnelle et les opérateurs logiques et de comparaison.

[@see JavaScript/wiki/03#-conditions](https://github.com/seeren-training/JavaScript/wiki/03#-conditions)

```js
if (null !== elementAvecErreur) {
    // le formulare contient des erreurs
}
```

* 📝 Mettez les champs invalides en évidence et ne passez pas à l'étape d'après si le formulaire n'est pas valide.

Si le formulaire est valide vous devez collecter ses informations. Pour chaque champs du formulaire vous devez récupérer sa valeur et l'affecter à votre structure de données. Je vous rappel qu'un objet possède des propriétées.

```js
const input = document.querySelector("#age-salary");
salary.age = input.value;
```

* 📝 Relevez chaque élément de votre formulaire pour affecter leur valeur à votre structure de données.

___

## 🐧 Next

Vous découvrirez:
* L'utilisation d'un Web Service
___

## 👨🏻‍💻 Web Service

En fonction des données saisies par l'utilisateur vous souhaitez proposer un jeux vidéo. Vous ne possédez pas de catalogue à jour de tous les jeux existants. Il est temps d'identifier un service proposant ce catalogue et de l'étudier pour voir ses possibilitées.

[@see api-docs.igdb.com/?javascript#game](https://rawg.io/apidocs)

Un endpoint correspond à une URL qui distribue une donnée précise en fonction de la requête qui lui est faite. Vous devez  créer un compte pour obtenir une clef privée afin de pouvoir utiliser un endpoint. Une fois en possession d'une clef vous pouvez utiliser un endpoint.

```bash
https://api.rawg.io/api/games?key=YOUR_KEY_HERE
```

Il faut analyser les endpoints et leur paramètres pour identifier une requête rentrant dans les critères de votre formulaire. Il est possible que le service ne prenne pas en compte tous vos critères. Analyser les endpoints et les paramètres avec attention, essayez-les.

Par exemple, l'url suivante liste les genres de jeux. 

> Je vous conseil d'utiliser FireFox qui rendra lisible ce format par défaut.

```bash
https://api.rawg.io/api/genres?key=YOUR_KEY_HERE
```

Il est alors possible d'obtenir une liste de jeux pour un genre précis, en l'occurence le genre RPG est identifié par 5 comme observé au endpoint précédent.

```bash
https://api.rawg.io/api/games?genres=5&key=YOUR_KEY_HERE
```

* 📝 Construisez une url type pour l'information que vous souhaitez récupérer.
* 📝 Ajustez vos critères de selection en fonction des capacitées du web service.

Une fois un endpoint identifié de part la construction de son url et de ses paramètres il est temps en JavaScript de récupérer la données.

Je vous invite à vous interesser au concept AJAX.

[@see JavaScript/wiki/06](https://github.com/seeren-training/JavaScript/wiki/06)

```js
const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://api.rawg.io/api/games?genres=5&key=YOUR_KEY_HERE'
);
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log('Response reçue', data);
};
xhr.send();
```

Vous disposez alors de votre information au format objet dans votre programme. Il est alors temps de l'afficher! Pour ce faire souvenez vous du DOM et de comment dynamiser une partie du document. Pour ce faire vous aurez certainement besoin de la syntaxe des tableaux pour accéder aux valeurs de certaines propriétées de cet objet de réponse.

[@see JavaScript/wiki/02](https://github.com/seeren-training/JavaScript/wiki/02#-tableaux)


* 📝 Sur la page dédié à l'affichage du jeux, affichez les informations récupérées préalablement!

___

## 🕕 Manage your time

C'est une première étape à franchir avant de proposer des fonctionnalitées dérivées et différents mode de séléction d'un jeux...