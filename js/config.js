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
  // fiche (facultatif) : nom d'un fichier du dossier fiches/, ajoute un lien « Voir la fiche ».
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
        { title: 'Data analyst', level: 'long', access: 'Bac+3 à Bac+5 en statistiques, informatique ou gestion', fiche: 'data-analyst' }
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
  },

  // Page parcours.html : voies d'accès et débouchés, sans nom d'école.
  // "id" sert dans les liens : parcours.html#commerce ouvre directement le bon onglet.
  // Chaque voie : title, audience (pour qui), duration, steps (dans l'ordre), plus (atout), watch (à savoir).
  pathways: [
    {
      id: 'commerce',
      tab: 'Écoles de commerce',
      intro: 'Marketing, finance, vente, ressources humaines… Les écoles de commerce forment aux métiers de l’entreprise. Plusieurs chemins y mènent, avec ou sans prépa.',
      routes: [
        {
          title: 'Prépa, puis grande école',
          audience: 'Bac général, ou bac STMG avec la prépa technologique',
          duration: '5 ans',
          steps: ['Bac', 'Prépa économique · 2 ans', 'Concours communs', 'Programme Grande École · 3 ans', 'Bac+5 (grade master)'],
          plus: 'Ouvre l’accès aux écoles les plus sélectives, avec une culture générale solide.',
          watch: 'Un rythme de travail très soutenu pendant deux ans.'
        },
        {
          title: 'École post-bac en 5 ans',
          audience: 'Bac général ou technologique, sur concours post-bac',
          duration: '5 ans',
          steps: ['Bac', 'Concours post-bac', 'Cycle bachelor puis master · 5 ans', 'Bac+5'],
          plus: 'Pas de prépa : stages et international dès la première année.',
          watch: 'Frais de scolarité sur cinq ans. Vérifiez que le diplôme est visé par l’État.'
        },
        {
          title: 'Bachelor en 3 ans',
          audience: 'Bac général ou technologique',
          duration: '3 ans',
          steps: ['Bac', 'Bachelor · 3 ans', 'Premier emploi ou master'],
          plus: 'Un Bac+3 concret pour travailler vite, ou poursuivre ensuite.',
          watch: 'Reconnaissance variable : privilégiez les bachelors visés ou au grade de licence.'
        },
        {
          title: 'BTS ou BUT, puis admission parallèle',
          audience: 'Bac général, technologique ou professionnel',
          duration: '5 ans',
          steps: ['Bac', 'BTS ou BUT · 2 à 3 ans', 'Admission sur titre', 'Grande école · 2 à 3 ans', 'Bac+5'],
          plus: 'Une formation concrète d’abord, avec la possibilité de s’arrêter à Bac+2 ou Bac+3.',
          watch: 'Places limitées : dossier, épreuves écrites et oral.'
        },
        {
          title: 'Licence, puis école ou master',
          audience: 'Bac général ou technologique',
          duration: '5 ans',
          steps: ['Bac', 'Licence (économie, gestion, droit, langues…) · 3 ans', 'Admission parallèle ou master', 'Bac+5'],
          plus: 'Un coût réduit à l’université et du temps pour mûrir son projet.',
          watch: 'Demande de l’autonomie dans le travail.'
        }
      ],
      outcomes: [
        { domain: 'Marketing & communication', jobs: ['Chef·fe de produit', 'Brand manager', 'Responsable marketing digital'] },
        { domain: 'Finance & audit', jobs: ['Auditeur·rice financier·ère', 'Analyste financier·ère', 'Contrôleur·se de gestion'] },
        { domain: 'Vente & développement', jobs: ['Business developer', 'Key account manager', 'Responsable commercial·e'] },
        { domain: 'Ressources humaines', jobs: ['Chargé·e de recrutement', 'Responsable RH'] },
        { domain: 'Conseil & stratégie', jobs: ['Consultant·e en stratégie', 'Consultant·e en organisation'] },
        { domain: 'Achats & supply chain', jobs: ['Acheteur·se', 'Supply chain manager'] },
        { domain: 'Entrepreneuriat', jobs: ['Créateur·rice d’entreprise', 'Repreneur·se d’entreprise'] }
      ]
    },
    {
      id: 'ingenieur',
      tab: 'Écoles d’ingénieurs',
      intro: 'Concevoir, produire, coder, construire… Le diplôme d’ingénieur (Bac+5) mène à des métiers techniques et de gestion de projet. Il se prépare par plusieurs chemins.',
      routes: [
        {
          title: 'Prépa scientifique, puis école',
          audience: 'Bac général avec maths et sciences (prépa TSI pour un bac STI2D ou STL)',
          duration: '5 ans',
          steps: ['Bac', 'Prépa scientifique · 2 ans', 'Concours communs', 'Cycle ingénieur · 3 ans', 'Diplôme d’ingénieur · Bac+5'],
          plus: 'Accès au plus grand nombre d’écoles et très bon niveau scientifique.',
          watch: 'Une charge de travail très forte pendant deux ans.'
        },
        {
          title: 'École post-bac avec prépa intégrée',
          audience: 'Bac général avec maths et sciences, sur concours post-bac',
          duration: '5 ans',
          steps: ['Bac', 'Concours post-bac', 'Prépa intégrée · 2 ans', 'Cycle ingénieur · 3 ans', 'Diplôme d’ingénieur · Bac+5'],
          plus: 'Pas de concours après la prépa, et des projets concrets dès la première année.',
          watch: 'On choisit son école dès la sortie du bac.'
        },
        {
          title: 'BUT ou BTS, puis admission parallèle',
          audience: 'Bac général, technologique (STI2D, STL…) ou professionnel',
          duration: '5 à 6 ans',
          steps: ['Bac', 'BUT ou BTS · 2 à 3 ans', 'Prépa ATS d’un an (facultative)', 'Cycle ingénieur · 3 ans', 'Diplôme d’ingénieur'],
          plus: 'Une approche concrète d’abord, et un diplôme utilisable en cours de route.',
          watch: 'Il faut souvent renforcer les maths avant d’entrer en école.'
        },
        {
          title: 'Licence scientifique, puis école ou master',
          audience: 'Bac général avec maths et sciences',
          duration: '5 ans',
          steps: ['Bac', 'Licence (maths, physique, informatique…) · 2 à 3 ans', 'Cycle ingénieur ou master', 'Bac+5'],
          plus: 'Coût réduit, et une porte ouverte vers la recherche.',
          watch: 'Un master universitaire n’est pas un titre d’ingénieur, même si les métiers sont souvent proches.'
        },
        {
          title: 'Cycle ingénieur en apprentissage',
          audience: 'Après un Bac+2 : BTS, BUT, prépa ou licence',
          duration: '3 ans après Bac+2',
          steps: ['Bac+2', 'Cycle ingénieur en apprentissage · 3 ans', 'Diplôme d’ingénieur · Bac+5'],
          plus: 'Un salaire, des frais de formation pris en charge et trois ans d’expérience.',
          watch: 'Il faut trouver une entreprise et suivre le rythme école-entreprise.'
        }
      ],
      outcomes: [
        { domain: 'Conception & R&D', jobs: ['Ingénieur·e R&D', 'Ingénieur·e calcul et simulation'] },
        { domain: 'Production & qualité', jobs: ['Ingénieur·e méthodes', 'Ingénieur·e qualité', 'Responsable de production'] },
        { domain: 'Numérique & data', jobs: ['Ingénieur·e logiciel', 'Data scientist', 'Ingénieur·e cybersécurité'] },
        { domain: 'Énergie & environnement', jobs: ['Ingénieur·e énergies renouvelables', 'Ingénieur·e environnement'] },
        { domain: 'BTP & infrastructures', jobs: ['Ingénieur·e structure', 'Conducteur·rice de travaux'] },
        { domain: 'Conseil & gestion de projet', jobs: ['Consultant·e', 'Chef·fe de projet'] },
        { domain: 'Recherche', jobs: ['Chercheur·se (après un doctorat)', 'Ingénieur·e de recherche'] }
      ]
    }
  ]
};
