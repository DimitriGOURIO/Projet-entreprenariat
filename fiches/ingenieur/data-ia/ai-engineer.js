'use strict';
// Fiche métier : AI engineer

ajouterFiche({
  title: 'AI engineer',
  role: 'Créer des produits IA',
  summary: 'Construit des applications qui s’appuient sur l’IA générative et les grands modèles de langage : assistants, recherche intelligente dans des documents, automatisation de tâches…',
  level: 'long',
  studies: 'Bac+5',

  where: 'Start-up, éditeurs de logiciels, grandes entreprises qui lancent des projets d’IA générative, cabinets de conseil',
  withWho: 'Développeur·ses, chef·fes de produit, designers, data scientists, expert·es métier',
  missions: [
    'Choisir le modèle d’IA adapté au besoin, au coût et à la confidentialité des données',
    'Connecter le modèle aux données de l’entreprise (documents, bases, outils internes)',
    'Rédiger et tester les instructions données au modèle (prompts)',
    'Évaluer la qualité des réponses et limiter les erreurs',
    'Intégrer l’IA dans une application et suivre son utilisation'
  ],
  day: [
    { time: '9h30', task: 'Point avec la cheffe de produit sur l’assistant interne' },
    { time: '10h', task: 'Amélioration de la recherche dans les documents de l’entreprise' },
    { time: '11h30', task: 'Test des réponses sur une série de questions de référence' },
    { time: '14h', task: 'Développement d’une nouvelle fonctionnalité de l’application' },
    { time: '16h', task: 'Réunion avec l’équipe juridique : quelles données peut-on utiliser ?' },
    { time: '17h', task: 'Veille sur les nouveaux modèles et les nouvelles méthodes' }
  ],

  skills: ['Développement logiciel', 'Grands modèles de langage (LLM)', 'Recherche augmentée par la génération (RAG)', 'Évaluation de systèmes d’IA', 'API', 'Sécurité et protection des données'],
  qualities: ['Curiosité', 'Esprit critique', 'Sens du produit', 'Adaptabilité'],
  tools: ['Python', 'TypeScript', 'API de modèles de langage', 'LangChain', 'Bases de données vectorielles', 'Docker', 'Git'],

  school: {
    majors: ['Intelligence artificielle', 'Génie logiciel', 'Data science', 'Informatique'],
    courses: ['Machine learning', 'Deep learning', 'Traitement automatique du langage', 'Développement web et API', 'Génie logiciel', 'Éthique et droit du numérique'],
    projects: ['Projet de création d’un assistant ou d’un chatbot', 'Stage dans une équipe produit qui intègre de l’IA']
  },
  otherRoutes: [
    'Développeur·se logiciel qui se forme à l’IA générative',
    'Master en informatique ou en intelligence artificielle',
    'ML engineer ou data scientist qui se tourne vers le produit'
  ],

  likes: ['Un domaine récent où beaucoup reste à inventer', 'Des résultats visibles rapidement', 'Un rôle proche des utilisateurs'],
  challenges: ['Des outils qui changent très vite : la veille est obligatoire', 'Des modèles qui peuvent se tromper avec assurance : il faut tout tester', 'Des questions de coût, de sécurité et de droit à gérer'],

  careers: ['AI engineer senior ou lead', 'Architecte IA', 'Product manager IA', 'Directeur·rice technique de start-up'],
  related: ['ml-engineer', 'data-scientist', 'mlops-engineer']
});
