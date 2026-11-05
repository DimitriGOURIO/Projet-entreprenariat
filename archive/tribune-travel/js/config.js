'use strict';
// CONFIGURATION DU SITE : modifier ce fichier met à jour toute la page.
// Les couleurs sont dans css/variables.css, les autres textes dans index.html.

const BRAND_NAME = 'Tribune Travel';

const SITE = {
  name: BRAND_NAME,

  // Logo du menu et du pied de page : image, puis texte en deux parties ("end" s'affiche en bleu clair).
  // L'icône de l'onglet du navigateur est assets/favicon.png.
  logo: { image: 'assets/logo-light.png', start: 'tribune ', end: 'travel.' },

  // Grand titre de l'accueil, sur deux lignes. Forme aussi le titre de l'onglet.
  slogan: { line1: 'Le sport se vit', line2: 'sur place.' },

  description: `${BRAND_NAME} : un projet de séjours sportifs avec billet, logement et transport, adaptés à votre budget. Faites-nous connaître l’événement qui vous fait rêver.`,

  // URL de PRODUCTION du webhook n8n (nœud Webhook > onglet "Webhook URLs" > Production).
  // Ne pas renommer "eventtrip-interest" ici sans changer aussi le chemin dans n8n.
  webhookUrl: 'https://n8n12.skyz-app.com/webhook/eventtrip-interest',

  // Étiquettes en bas de l'accueil
  sports: ['Football', 'Formule 1', 'Tennis'],

  // Cartes de la section Les formules et liste du formulaire.
  // "flag" est facultatif : il met la formule en avant.
  // Le tri IA de n8n s'appuie sur les noms Confort et Premium.
  formulas: [
    {
      name: 'Essentiel',
      description: 'Pour être là et profiter de l’ambiance.',
      features: ['Une place d’entrée de gamme', 'Un logement simple et pratique', 'Un trajet au budget maîtrisé']
    },
    {
      name: 'Confort',
      flag: 'Le bon équilibre',
      description: 'Le grand moment, avec un peu plus de confort.',
      features: ['Une place avec une meilleure vue', 'Un hôtel bien situé', 'Un trajet aux horaires pratiques']
    },
    {
      name: 'Premium',
      description: 'Pour faire de l’événement une vraie occasion.',
      features: ['Une catégorie de place supérieure', 'Un hôtel haut de gamme', 'Un transport plus confortable']
    }
  ],

  // Listes du formulaire
  events: [
    'Football — Ligue des Champions',
    'Formule 1 — Grand Prix',
    'Tennis — Grand Chelem ou autre tournoi',
    'Autre événement sportif'
  ],
  budgets: ['Moins de 500 €', '500 à 1 000 €', '1 000 à 2 000 €', 'Plus de 2 000 €'],

  // Séjour de la section Exemple. "event" et "formula" doivent reprendre
  // exactement une valeur de "events" et de "formulas".
  example: {
    price: '790 €',
    event: 'Football — Ligue des Champions',
    formula: 'Confort'
  }
};
