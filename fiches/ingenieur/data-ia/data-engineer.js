'use strict';
// Fiche métier : Data engineer

ajouterFiche({
  title: 'Data engineer',
  role: 'Construire les pipelines',
  summary: 'Conçoit et entretient les « tuyaux » qui collectent, transforment et stockent les données, pour qu’elles arrivent propres et à l’heure chez celles et ceux qui les utilisent.',
  level: 'long',
  studies: 'Bac+5',

  where: 'Entreprises qui gèrent beaucoup de données (e-commerce, banque, énergie, industrie…), entreprises de services numériques, start-up, éditeurs de logiciels',
  withWho: 'Data analysts, data scientists, développeur·ses, équipes infrastructure et sécurité',
  missions: [
    'Récupérer les données de sources variées : applications, capteurs, fichiers, services externes',
    'Construire des pipelines qui transforment et chargent ces données automatiquement',
    'Concevoir l’entrepôt ou le « lac » de données où tout est stocké',
    'Surveiller la qualité, la fraîcheur et la sécurité des données',
    'Optimiser les traitements pour qu’ils restent rapides et peu coûteux'
  ],
  day: [
    { time: '9h30', task: 'Point d’équipe et vérification des traitements lancés pendant la nuit' },
    { time: '10h', task: 'Réparation d’un pipeline en échec : un fichier source a changé de format' },
    { time: '11h30', task: 'Échange avec un·e data analyst qui a besoin d’une nouvelle source de données' },
    { time: '14h', task: 'Développement d’un nouveau flux de données en Python et SQL' },
    { time: '16h', task: 'Relecture de code et tests automatiques' },
    { time: '17h', task: 'Documentation pour le reste de l’équipe' }
  ],

  skills: ['Programmation Python', 'SQL avancé', 'Modélisation de bases de données', 'Traitement distribué', 'Cloud', 'Tests et versionnement du code'],
  qualities: ['Rigueur', 'Autonomie', 'Sens du service', 'Goût pour la résolution de problèmes', 'Anticipation'],
  tools: ['Python', 'SQL', 'Spark', 'Airflow', 'dbt', 'Kafka', 'Git', 'Docker', 'AWS / Azure / Google Cloud'],

  school: {
    majors: ['Data / big data', 'Génie logiciel', 'Cloud et infrastructures', 'Systèmes d’information'],
    courses: ['Bases de données relationnelles et NoSQL', 'Algorithmique et structures de données', 'Systèmes et réseaux', 'Calcul distribué', 'Cloud computing', 'Génie logiciel'],
    projects: ['Projet de construction d’un pipeline de données de bout en bout', 'Stage ou alternance dans une équipe data ou infrastructure']
  },
  otherRoutes: [
    'Master en informatique ou en big data',
    'BUT Informatique, puis une première expérience en développement avant de se spécialiser dans la data',
    'Développeur·se back-end qui se spécialise dans les données',
    'Reconversion : formations intensives en data engineering, plus accessibles avec une base en programmation'
  ],

  likes: ['Un rôle central : sans données fiables, rien ne fonctionne', 'Des problèmes techniques concrets à résoudre', 'Des technologies qui évoluent vite'],
  challenges: ['Peu visible quand tout marche, très sollicité·e quand ça casse', 'Des astreintes possibles dans certaines entreprises pour surveiller les traitements', 'Une veille technologique permanente'],

  careers: ['Data engineer senior ou lead', 'Data architect', 'MLOps engineer', 'Ingénieur·e cloud', 'Responsable de plateforme data'],
  related: ['data-analyst', 'mlops-engineer', 'ml-engineer']
});
