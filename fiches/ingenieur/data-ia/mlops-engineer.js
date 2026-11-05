'use strict';
// Fiche métier : MLOps engineer

ajouterFiche({
  title: 'MLOps engineer',
  role: 'Fiabiliser',
  summary: 'Met en place les outils et les automatismes qui permettent de déployer, surveiller et mettre à jour les modèles d’IA sans rien casser.',
  level: 'long',
  studies: 'Bac+5',

  where: 'Entreprises qui utilisent plusieurs modèles en production, éditeurs de logiciels, grandes entreprises, entreprises de services numériques',
  withWho: 'ML engineers, data scientists, data engineers, équipes infrastructure (DevOps)',
  missions: [
    'Automatiser l’entraînement, les tests et le déploiement des modèles',
    'Gérer les versions des modèles et des données',
    'Surveiller les modèles en production et alerter quand ils se dégradent',
    'Gérer l’infrastructure de calcul (serveurs, GPU, cloud) et ses coûts',
    'Définir les bonnes pratiques communes à l’équipe'
  ],
  day: [
    { time: '9h30', task: 'Vérification des alertes de la nuit sur les modèles en production' },
    { time: '10h', task: 'Automatisation du réentraînement mensuel d’un modèle' },
    { time: '11h30', task: 'Aide à un·e data scientist pour déployer son premier modèle' },
    { time: '14h', task: 'Mise à jour de l’infrastructure de calcul' },
    { time: '16h', task: 'Ajout d’un tableau de suivi de la qualité des prédictions' },
    { time: '17h', task: 'Documentation des procédures' }
  ],

  skills: ['Intégration et déploiement continus', 'Conteneurs et orchestration', 'Cloud', 'Bases du machine learning', 'Supervision et alertes', 'Automatisation par scripts'],
  qualities: ['Rigueur', 'Fiabilité', 'Sens de l’organisation', 'Pédagogie'],
  tools: ['Docker', 'Kubernetes', 'MLflow', 'Terraform', 'GitLab CI / GitHub Actions', 'Prometheus', 'Grafana', 'AWS / Azure / Google Cloud'],

  school: {
    majors: ['Cloud et DevOps', 'Génie logiciel', 'Intelligence artificielle', 'Systèmes et réseaux'],
    courses: ['Systèmes d’exploitation et réseaux', 'Cloud computing', 'Intégration et déploiement continus', 'Machine learning', 'Sécurité informatique'],
    projects: ['Projet de déploiement automatisé d’une application', 'Stage ou alternance dans une équipe DevOps ou plateforme']
  },
  otherRoutes: [
    'Ingénieur·e DevOps qui se spécialise dans l’IA',
    'Data engineer ou ML engineer qui se tourne vers l’infrastructure',
    'Master en informatique, cloud ou systèmes'
  ],

  likes: ['Rendre le travail de toute l’équipe plus simple et plus sûr', 'Une vision d’ensemble, du code jusqu’aux serveurs', 'Beaucoup d’automatisation, donc moins de tâches répétitives'],
  challenges: ['Un métier encore jeune, aux contours différents selon les entreprises', 'Des astreintes possibles en cas de panne', 'Beaucoup d’outils à connaître'],

  careers: ['Lead MLOps', 'Ingénieur·e plateforme', 'Architecte cloud', 'Responsable infrastructure IA'],
  related: ['ml-engineer', 'data-engineer']
});
