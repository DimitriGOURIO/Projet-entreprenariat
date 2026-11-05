'use strict';
// MODÈLE DE FICHE MÉTIER : ce fichier n'est pas affiché sur le site.
// 1. Copiez-le dans le dossier du domaine (ex. fiches/ingenieur/data-ia/) et renommez-le (ex. data-architect.js).
// 2. Ajoutez le nom du fichier, sans .js, dans la liste "fiches" du domaine.js de ce dossier.
// Ne mettez pas de chiffres (salaires, statistiques) sans source.

ajouterFiche({
  title: 'Nom du métier',
  role: 'Ce qu’on fait surtout',          // étiquette courte affichée sur la carte, ex. « Analyser »
  summary: 'Une ou deux phrases pour expliquer le métier simplement.',
  level: 'long',                          // 'none' = sans diplôme requis, 'short' = études courtes, 'long' = Bac+3 et plus
  studies: 'Bac+5',                       // niveau d'études habituel, en clair

  // Au quotidien
  where: 'Les types d’entreprises ou de structures',
  withWho: 'Les personnes avec qui on travaille',
  missions: [
    'Une mission principale',
    'Une autre mission'
  ],
  day: [                                  // une journée type (exemple)
    { time: '9h', task: 'Ce qu’on fait à cette heure-là' },
    { time: '14h', task: 'Une autre tâche' }
  ],

  // Compétences
  skills: ['Compétence technique'],
  qualities: ['Qualité humaine'],
  tools: ['Outil ou logiciel'],

  // Les études en école d'ingénieurs
  school: {
    majors: ['Majeure ou option conseillée'],
    courses: ['Matière étudiée'],
    projects: ['Projet ou stage utile']
  },
  otherRoutes: ['Autre voie d’accès : master, reconversion…'],

  // Le pour et le contre
  likes: ['Ce qu’on aime'],
  challenges: ['Ce qui est moins facile'],

  // Évolutions
  careers: ['Poste possible après quelques années'],
  related: ['data-analyst']               // noms de fichiers d'autres fiches (liens « Métiers proches »)
});
