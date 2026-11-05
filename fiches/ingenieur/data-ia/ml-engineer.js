'use strict';
// Fiche métier : Machine learning engineer

ajouterFiche({
  title: 'Machine learning engineer',
  role: 'Industrialiser',
  summary: 'Transforme les modèles de machine learning en logiciels fiables et rapides, utilisés par de vrais utilisateurs et à grande échelle.',
  level: 'long',
  studies: 'Bac+5',

  where: 'Entreprises tech, e-commerce, banques, industrie, start-up d’IA, éditeurs de logiciels',
  withWho: 'Data scientists, data engineers, développeur·ses, MLOps engineers, chef·fes de produit',
  missions: [
    'Rendre un modèle de data science utilisable dans une application',
    'Entraîner des modèles sur de gros volumes de données',
    'Optimiser la vitesse et le coût des prédictions',
    'Écrire du code testé, maintenable et versionné',
    'Suivre les performances des modèles une fois en ligne'
  ],
  day: [
    { time: '9h30', task: 'Point d’équipe sur les sujets de la semaine' },
    { time: '10h', task: 'Intégration d’un modèle de recommandation dans l’application' },
    { time: '11h30', task: 'Tests de charge : le modèle répond-il assez vite ?' },
    { time: '14h', task: 'Lancement d’un entraînement sur des serveurs équipés de cartes graphiques (GPU)' },
    { time: '16h', task: 'Relecture du code d’un·e data scientist pour le préparer à la production' },
    { time: '17h', task: 'Analyse du suivi : la qualité des prédictions baisse-t-elle ?' }
  ],

  skills: ['Machine learning et deep learning', 'Python avancé', 'Génie logiciel', 'API et architecture logicielle', 'Calcul sur GPU', 'Cloud'],
  qualities: ['Rigueur', 'Pragmatisme', 'Goût du travail en équipe', 'Curiosité technique'],
  tools: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Docker', 'Kubernetes', 'MLflow', 'FastAPI', 'Git'],

  school: {
    majors: ['Intelligence artificielle', 'Data science', 'Génie logiciel', 'Informatique'],
    courses: ['Machine learning', 'Deep learning', 'Algorithmique', 'Génie logiciel et tests', 'Systèmes distribués', 'Cloud computing', 'Optimisation'],
    projects: ['Projet de déploiement d’un modèle dans une application', 'Stage dans une équipe IA ou machine learning']
  },
  otherRoutes: [
    'Master en informatique ou en intelligence artificielle',
    'Développeur·se logiciel qui se forme au machine learning',
    'Data scientist qui se rapproche du développement'
  ],

  likes: ['Voir ses modèles servir à de vrais utilisateurs', 'Un mélange de maths et de développement', 'Des défis techniques à grande échelle'],
  challenges: ['Deux mondes à maîtriser : la data science et le développement', 'Des bugs parfois difficiles à reproduire', 'Un domaine qui évolue très vite'],

  careers: ['ML engineer senior', 'Lead machine learning', 'AI engineer', 'Architecte IA', 'Responsable d’équipe IA'],
  related: ['data-scientist', 'mlops-engineer', 'ai-engineer']
});
