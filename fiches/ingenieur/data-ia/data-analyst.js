'use strict';
// Fiche métier : Data analyst

ajouterFiche({
  title: 'Data analyst',
  role: 'Analyser',
  summary: 'Transforme les données de l’entreprise en chiffres clairs, en tableaux de bord et en recommandations pour aider les équipes à décider.',
  level: 'long',
  studies: 'Bac+3 à Bac+5',

  where: 'Entreprises de tous secteurs (commerce, banque, industrie, santé…), cabinets de conseil, administrations',
  withWho: 'Équipes métier (marketing, finance, opérations), data engineers, data scientists',
  missions: [
    'Comprendre la question posée par une équipe et la traduire en analyse',
    'Extraire et nettoyer les données utiles',
    'Construire des tableaux de bord et les faire vivre',
    'Analyser les résultats : tendances, écarts, causes possibles',
    'Présenter les conclusions simplement et proposer des actions'
  ],
  day: [
    { time: '9h', task: 'Lecture des indicateurs du jour et vérification des tableaux de bord' },
    { time: '10h', task: 'Réunion avec l’équipe marketing : pourquoi les ventes d’un produit baissent-elles ?' },
    { time: '11h', task: 'Requêtes SQL pour récupérer et croiser les données utiles' },
    { time: '14h', task: 'Analyse et graphiques, recherche des causes possibles' },
    { time: '16h', task: 'Mise à jour d’un tableau de bord demandé par la direction' },
    { time: '17h', task: 'Rédaction d’une synthèse en quelques messages clés' }
  ],

  skills: ['Statistiques descriptives', 'SQL', 'Visualisation de données', 'Tableur avancé', 'Bases de Python ou de R', 'Connaissance du métier de l’entreprise'],
  qualities: ['Curiosité', 'Rigueur', 'Esprit de synthèse', 'Pédagogie', 'Sens du business'],
  tools: ['SQL', 'Excel / Google Sheets', 'Power BI', 'Tableau', 'Looker Studio', 'Python (pandas)'],

  school: {
    majors: ['Data science / big data', 'Informatique décisionnelle (business intelligence)', 'Mathématiques appliquées', 'Double compétence ingénierie et management'],
    courses: ['Probabilités et statistiques', 'Bases de données et SQL', 'Programmation Python', 'Visualisation de données', 'Analyse de données', 'Économie et gestion d’entreprise'],
    projects: ['Projet d’analyse sur un vrai jeu de données (open data, données d’une entreprise partenaire)', 'Stage dans une équipe data ou business intelligence', 'Hackathons et défis data']
  },
  otherRoutes: [
    'BUT Science des données, pour des postes d’analyste dès Bac+3',
    'Licence puis master en statistiques, économétrie ou informatique de gestion (MIAGE)',
    'École de commerce avec une spécialisation data ou business analytics',
    'Reconversion : formation intensive en analyse de données, d’autant plus utile avec une expérience métier'
  ],

  likes: ['Un impact visible : les analyses servent à prendre des décisions', 'Un métier présent dans presque tous les secteurs', 'Un bon équilibre entre technique et échanges humains'],
  challenges: ['Des données souvent incomplètes ou mal rangées : beaucoup de nettoyage', 'Des demandes urgentes et parfois floues à clarifier', 'Savoir dire quand les chiffres ne permettent pas de conclure'],

  careers: ['Data analyst senior', 'Analytics engineer', 'Data scientist, en renforçant les maths et le machine learning', 'Responsable business intelligence', 'Consultant·e data'],
  related: ['data-scientist', 'data-engineer']
});
