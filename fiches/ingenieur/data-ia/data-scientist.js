'use strict';
// Fiche métier : Data scientist

ajouterFiche({
  title: 'Data scientist',
  role: 'Modéliser',
  summary: 'Utilise les statistiques et le machine learning pour expliquer, prévoir ou automatiser : anticiper une demande, détecter une fraude, recommander un produit…',
  level: 'long',
  studies: 'Bac+5',

  where: 'Grandes entreprises, start-up, banques et assurances, industrie, santé, cabinets de conseil, secteur public',
  withWho: 'Data engineers, data analysts, ML engineers, expert·es métier, chef·fes de produit',
  missions: [
    'Cadrer le problème avec les équipes métier : que veut-on prévoir ou comprendre ?',
    'Explorer les données et construire les variables utiles',
    'Entraîner, comparer et évaluer des modèles statistiques ou de machine learning',
    'Vérifier que les résultats sont fiables, explicables et sans biais évident',
    'Présenter les résultats et accompagner leur mise en production'
  ],
  day: [
    { time: '9h30', task: 'Point avec l’équipe produit sur le modèle de prévision des ventes' },
    { time: '10h', task: 'Exploration des données dans un notebook : valeurs manquantes, anomalies' },
    { time: '11h30', task: 'Création de nouvelles variables à partir des données brutes' },
    { time: '14h', task: 'Entraînement et comparaison de plusieurs modèles' },
    { time: '16h', task: 'Analyse des erreurs : dans quels cas le modèle se trompe-t-il ?' },
    { time: '17h', task: 'Préparation d’une présentation des résultats' }
  ],

  skills: ['Probabilités et statistiques', 'Machine learning', 'Python', 'SQL', 'Évaluation de modèles', 'Communication des résultats'],
  qualities: ['Curiosité scientifique', 'Esprit critique', 'Patience', 'Pédagogie', 'Sens du concret'],
  tools: ['Python', 'Jupyter', 'pandas', 'scikit-learn', 'XGBoost', 'PyTorch', 'SQL', 'Git'],

  school: {
    majors: ['Data science / intelligence artificielle', 'Mathématiques appliquées', 'Statistiques et modélisation', 'Recherche opérationnelle'],
    courses: ['Probabilités et statistiques', 'Algèbre linéaire et optimisation', 'Machine learning', 'Deep learning', 'Séries temporelles', 'Programmation Python', 'Éthique des données'],
    projects: ['Projets de modélisation sur des données réelles', 'Compétitions de data science en ligne', 'Stage de fin d’études dans une équipe data science']
  },
  otherRoutes: [
    'Master en statistiques, mathématiques appliquées ou data science',
    'École de statistique et d’économie',
    'Doctorat, pour les postes les plus proches de la recherche',
    'Reconversion : possible avec une bonne base en maths, souvent en passant d’abord par un poste de data analyst'
  ],

  likes: ['Des sujets très variés selon les secteurs', 'Le plaisir de faire parler les données', 'Un métier entre science et terrain'],
  challenges: ['Beaucoup de temps passé à préparer les données plutôt qu’à modéliser', 'Des projets qui n’arrivent pas toujours jusqu’à la production', 'Expliquer un modèle à un public non technique'],

  careers: ['Data scientist senior ou lead', 'Machine learning engineer', 'Responsable data science', 'Chief data officer, après une longue expérience', 'Chercheur·se appliqué·e'],
  related: ['data-analyst', 'ml-engineer', 'chercheur-ia']
});
