'use strict';
// SOMMAIRE DES FICHES MÉTIERS
// Rangement : fiches/<type d'école>/<domaine>/<fiche>.js
//   - chaque dossier de domaine contient un fichier domaine.js (nom, présentation, liste des fiches)
//   - puis un fichier par fiche métier (modèle à copier : fiches/modele-fiche.js)
//
// Pour ajouter un domaine : créer le dossier et son domaine.js, puis ajouter le nom du dossier dans "domains".
// Pour ajouter une fiche : créer le fichier dans le dossier du domaine, puis l'ajouter dans son domaine.js.
// Le nom du fichier sert d'adresse (fiche-metier.html?id=data-analyst) : il doit être unique sur tout le site.

const SOMMAIRE = [
  {
    id: 'ingenieur',               // nom du dossier ; le même que dans SITE.pathways pour le lien vers parcours.html
    name: 'Écoles d’ingénieurs',
    studyTitle: 'En école d’ingénieurs',  // titre de la partie « Les études » des fiches
    domains: ['data-ia']           // dossiers de domaines, dans l'ordre d'affichage
  }
];
