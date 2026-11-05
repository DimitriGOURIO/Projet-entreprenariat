'use strict';
// Fiche métier : Chercheur·se en intelligence artificielle

ajouterFiche({
  title: 'Chercheur·se en IA',
  role: 'Faire avancer la recherche',
  summary: 'Invente et teste de nouvelles méthodes d’intelligence artificielle, puis publie ses résultats pour faire avancer la connaissance, dans un laboratoire public ou en entreprise.',
  level: 'long',
  studies: 'Bac+8 (doctorat)',

  where: 'Laboratoires publics, universités, centres de recherche d’entreprises, start-up d’IA',
  withWho: 'Autres chercheur·ses, doctorant·es, ingénieur·es de recherche, partenaires industriels',
  missions: [
    'Lire les publications récentes et repérer les questions encore ouvertes',
    'Proposer de nouvelles méthodes et les tester par des expériences',
    'Écrire des articles scientifiques et les présenter en conférence',
    'Encadrer des stagiaires et des doctorant·es',
    'Répondre à des appels à projets pour financer ses travaux'
  ],
  day: [
    { time: '9h', task: 'Lecture des articles parus dans la semaine' },
    { time: '10h', task: 'Réunion avec les doctorant·es de l’équipe' },
    { time: '11h', task: 'Lancement d’une série d’expériences sur un cluster de calcul' },
    { time: '14h', task: 'Analyse des résultats et nouvelles hypothèses' },
    { time: '16h', task: 'Rédaction d’un article pour une conférence' },
    { time: '17h30', task: 'Séminaire du laboratoire' }
  ],

  skills: ['Mathématiques avancées', 'Deep learning', 'Méthode scientifique', 'Programmation pour la recherche', 'Rédaction scientifique en anglais'],
  qualities: ['Persévérance', 'Créativité', 'Esprit critique', 'Autonomie', 'Goût du partage'],
  tools: ['Python', 'PyTorch', 'JAX', 'LaTeX', 'Clusters de calcul (GPU)'],

  school: {
    majors: ['Intelligence artificielle', 'Mathématiques appliquées', 'Parcours recherche ou double diplôme avec un master'],
    courses: ['Optimisation', 'Probabilités avancées', 'Apprentissage statistique', 'Deep learning', 'Vision par ordinateur', 'Traitement du langage'],
    projects: ['Stage dans un laboratoire de recherche', 'Projet de recherche encadré pendant les études', 'Doctorat après le Bac+5']
  },
  otherRoutes: [
    'Master recherche en IA, mathématiques ou informatique, puis doctorat',
    'Doctorat en entreprise (convention CIFRE), en partenariat avec un laboratoire'
  ],

  likes: ['Travailler sur des problèmes que personne n’a encore résolus', 'Une grande liberté dans le choix des sujets', 'Une communauté internationale'],
  challenges: ['Des études très longues', 'Des postes permanents dans le public très sélectifs', 'Beaucoup d’essais qui échouent avant un résultat'],

  careers: ['Chercheur·se permanent·e dans le public', 'Research scientist en entreprise', 'Responsable d’équipe de recherche', 'Création d’une start-up issue de la recherche'],
  related: ['data-scientist', 'ml-engineer', 'ai-engineer']
});
