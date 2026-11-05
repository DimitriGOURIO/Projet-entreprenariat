'use strict';
// CONFIGURATION DU SITE : modifier ce fichier met à jour toute la page.
// Les couleurs sont dans css/variables.css, les autres textes dans index.html.

const BRAND_NAME = 'Jobsimo';

const SITE = {
  name: BRAND_NAME,

  // Logo du menu et du pied de page : image, puis texte en deux parties ("end" s'affiche en couleur)
  logo: { image: 'assets/logo.svg', start: 'job', end: 'simo.' },

  // Titre de l'onglet et description lue par Google
  tagline: 'Découvrez les métiers tels qu’ils sont vraiment',
  description: `${BRAND_NAME} : la plateforme pour découvrir les métiers réels, les études qui y mènent et les passerelles pour se reconvertir. Pour les lycéens, les étudiants et les adultes en reconversion.`,

  // URL du webhook n8n qui reçoit les inscriptions.
  // Laisser vide tant que le workflow n'existe pas : le formulaire affiche alors un message d'attente.
  webhookUrl: '',

  // Cartes de la section "Pour qui" et liste "Vous êtes" du formulaire
  profiles: [
    {
      label: 'Lycéen·ne',
      question: '« Quelle école choisir après le bac ? »',
      points: [
        'Comparer BTS, BUT, licence, prépa et écoles post-bac',
        'Voir les matières vraiment étudiées, année par année',
        'Partir d’un métier qui attire pour remonter aux études'
      ]
    },
    {
      label: 'Étudiant·e',
      question: '« Quelle majeure ou spécialisation prendre ? »',
      points: [
        'Savoir où mène chaque majeure, concrètement',
        'Découvrir les postes derrière les intitulés',
        'Lire le parcours d’anciens étudiants'
      ]
    },
    {
      label: 'En réorientation',
      question: '« Mon école ne me plaît pas, et maintenant ? »',
      points: [
        'Repérer ce qui est transférable de votre parcours',
        'Trouver les passerelles et les formations courtes',
        'Changer de voie sans repartir de zéro'
      ]
    },
    {
      label: 'Adulte en reconversion',
      question: '« Je veux changer de métier. »',
      points: [
        'Explorer les métiers accessibles en formation courte',
        'Identifier vos compétences transférables',
        'Connaître les pistes de financement à vérifier (CPF, France Travail…)'
      ]
    }
  ],

  // Section "Explorer par domaine" et liste "Domaine" du formulaire.
  // level : 'none' = sans diplôme requis, 'short' = études courtes (CAP à Bac+2), 'long' = Bac+3 et plus.
  domains: [
    {
      name: 'Santé & social',
      jobs: [
        { title: 'Aide-soignant·e', level: 'short', access: 'Diplôme d’État en un an environ, accessible sans le bac' },
        { title: 'Infirmier·e', level: 'long', access: 'Bac+3 en institut de formation (IFSI)' },
        { title: 'Éducateur·rice spécialisé·e', level: 'long', access: 'Diplôme d’État de niveau Bac+3' }
      ]
    },
    {
      name: 'Numérique',
      jobs: [
        { title: 'Technicien·ne support', level: 'short', access: 'BTS SIO ou titre professionnel en reconversion' },
        { title: 'Développeur·se web', level: 'short', access: 'Bac+2 à Bac+5, ou formation intensive en reconversion' },
        { title: 'Data analyst', level: 'long', access: 'Bac+3 à Bac+5 en statistiques, informatique ou gestion' }
      ]
    },
    {
      name: 'Industrie & ingénierie',
      jobs: [
        { title: 'Opérateur·rice de production', level: 'none', access: 'Accessible sans diplôme, formé·e en entreprise' },
        { title: 'Technicien·ne de maintenance', level: 'short', access: 'Bac pro, BTS ou BUT' },
        { title: 'Ingénieur·e produit', level: 'long', access: 'Bac+5 en école d’ingénieurs ou master' }
      ]
    },
    {
      name: 'BTP & artisanat',
      jobs: [
        { title: 'Électricien·ne', level: 'short', access: 'CAP en deux ans, souvent en apprentissage' },
        { title: 'Menuisier·e', level: 'short', access: 'CAP, puis brevet professionnel possible' },
        { title: 'Conducteur·rice de travaux', level: 'long', access: 'Bac+2 à Bac+5, ou évolution après le terrain' }
      ]
    },
    {
      name: 'Commerce & entreprise',
      jobs: [
        { title: 'Vendeur·se conseil', level: 'none', access: 'Accessible sans diplôme, bac pro ou BTS appréciés' },
        { title: 'Commercial·e B2B', level: 'short', access: 'Bac+2 à Bac+5, l’alternance est très courante' },
        { title: 'Contrôleur·se de gestion', level: 'long', access: 'Bac+5 en finance, gestion ou école de commerce' }
      ]
    },
    {
      name: 'Arts, design & médias',
      jobs: [
        { title: 'Monteur·se vidéo', level: 'short', access: 'Bac+2/3, ou autodidacte avec un bon portfolio' },
        { title: 'Graphiste', level: 'long', access: 'DN MADE (Bac+3) ou école d’art' },
        { title: 'Journaliste', level: 'long', access: 'Souvent Bac+5, écoles de journalisme reconnues' }
      ]
    },
    {
      name: 'Environnement & agriculture',
      jobs: [
        { title: 'Jardinier·e paysagiste', level: 'short', access: 'CAP, bac pro ou BTS aménagements paysagers' },
        { title: 'Agriculteur·rice', level: 'short', access: 'Bac pro, BTSA, ou BPREA en reconversion' },
        { title: 'Chargé·e de mission environnement', level: 'long', access: 'Bac+5 en environnement ou écologie' }
      ]
    },
    {
      name: 'Enseignement & formation',
      jobs: [
        { title: 'Animateur·rice', level: 'none', access: 'BAFA pour débuter, BPJEPS pour en faire un métier' },
        { title: 'Formateur·rice pour adultes', level: 'short', access: 'Expérience dans un métier et titre professionnel' },
        { title: 'Professeur·e des écoles', level: 'long', access: 'Master puis concours de recrutement' }
      ]
    },
    {
      name: 'Transport & logistique',
      jobs: [
        { title: 'Préparateur·rice de commandes', level: 'none', access: 'Accessible sans diplôme, CACES selon le poste' },
        { title: 'Chauffeur·se livreur·se', level: 'none', access: 'Permis B ou C selon le véhicule' },
        { title: 'Responsable logistique', level: 'long', access: 'Bac+3 à Bac+5, ou évolution interne' }
      ]
    },
    {
      name: 'Hôtellerie & restauration',
      jobs: [
        { title: 'Serveur·se', level: 'none', access: 'Accessible sans diplôme, CAP ou bac pro utiles' },
        { title: 'Cuisinier·e', level: 'short', access: 'CAP cuisine, aussi en apprentissage ou reconversion' },
        { title: 'Réceptionniste', level: 'short', access: 'Bac pro ou BTS, anglais indispensable' }
      ]
    }
  ],

  // Étiquettes de niveau d'études affichées sur les métiers
  levels: {
    none: 'Sans diplôme requis',
    short: 'Études courtes',
    long: 'Études longues'
  }
};
