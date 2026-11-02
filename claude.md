# CLAUDE.md — Projet Tribune Travel (ex-EventTrip / TribuneTrip)

> Contexte persistant pour Claude Code. À placer à la racine du dossier du projet dans VS Code.
> Mets ce fichier à jour dès qu'une décision change (nom, URL, structure du workflow...).

## 1. Qui, quoi, pourquoi

- **Auteur** : Dimitri, étudiant ingénieur à l'ESILV (promo 2028). Projet mené avec un ami (deux associés).
- **Projet** : agence de séjours pour grands événements sportifs (Ligue des champions, week-ends de Grand Prix F1, tournois de tennis). Un package unique = **billet + logement + transport**, décliné selon le type de place et le budget.
- **Problème visé** : se rendre à ces événements, se loger et obtenir des places est compliqué et dispersé sur plusieurs sites.
- **Cadre** : projet d'école (parcours « Entreprendre avec l'IA », Atelier 2) avec un vrai backend d'automatisation. Ambition de fond : lancer une startup.
- **Statut** : aucune offre n'est commercialisée. La landing page collecte uniquement des **inscriptions d'intérêt** (pas de paiement, pas de réservation). Tout prix affiché est fictif/illustratif.

### Nom du projet (historique)
TribuneTrip → EventTrip → **Tribune Travel** (nom actuel choisi par Dimitri).
- ⚠️ « Tribune Travel » existe déjà comme marque (comptes Instagram/Facebook @tribunetravel) : risque SEO/marque. Alternatives inventées proposées : Sportrip, Fanvoy, Fantribune, Placeo, Suivéo. **Décision finale non confirmée.**
- Les fichiers et noms de champs/nœuds contiennent encore « EventTrip ». Ne renomme pas les identifiants techniques (path webhook, noms de colonnes) sans le dire, sinon le front et n8n se désynchronisent.

## 2. Architecture

```
Landing page (HTML statique, GitHub Pages)
        │  fetch POST JSON
        ▼
n8n (https://n8n12.skyz-app.com) ── Webhook de PRODUCTION
        │
        ├─ validation (Code) ── invalide → réponse 400
        ├─ tri IA du lead : chaud / tiède / froid
        ├─ enregistrement Google Sheets (avec preuve de consentement)
        ├─ réponse à la landing page
        ├─ email de confirmation (Gmail, HTML)
        └─ si case marketing cochée → email marketing (Gmail)
```

- Hébergement front : GitHub Pages (`dimitrigourio.github.io`).
- n8n est accessible publiquement via un domaine (`n8n12.skyz-app.com`) : cela remplace le « tunnel » demandé par la consigne.
- Workflow publié (statut « Published » dans l'éditeur n8n récent) : il répond sans qu'on lance quoi que ce soit à la main.

## 3. Fichiers du projet (versions à jour)

| Fichier | Rôle |
|---|---|
| `index.html` + `css/` + `js/` | **Landing page actuelle** (design bleu clair/blanc, formulaire avec 2 cases à cocher). C'est la référence. `index.html` reste à la racine pour GitHub Pages. |
| `js/config.js` | **Nom, logo, slogan, description, URL du webhook, sports, formules, événements, budgets, exemple.** Premier fichier à ouvrir pour changer le contenu. |
| `js/render.js` | Remplit la page depuis `config.js` (`data-text`, `data-logo`, `data-aria-label`, `data-options`). |
| `js/form.js` | Boutons « Ça me correspond » et envoi au webhook. |
| `css/variables.css` | Couleurs et largeur principales. Les autres CSS sont découpés par section, plus `responsive.css` et `animations.css`, chargés en dernier. |
| `archive/eventtrip-landing-page.html` | Ancienne maquette sombre, gardée pour historique. |
| `eventtrip_n8n_workflow_v3.json` | **Workflow principal actuel** : webhook → validation → IA → Sheets → emails. |
| `eventtrip_linkedin_workflow.json` | Workflow n8n de publication LinkedIn avec validation humaine par email. |
| `deck_sport.js` | Génère la présentation 8 slides (pptxgenjs). |
| `atelier2_s45.js` | Génère le livrable Atelier 2 (docx). |
| `eventtrip_landing.html`, `_v2`, `_v3`, `eventtrip_n8n_workflow.json`, `_v2` | **Anciennes versions**, gardées pour historique. Ne pas les modifier ni s'en inspirer. |

Suggestion de rangement : `site/` (landing), `n8n/` (workflows JSON), `livrables/` (deck, docx, PDF d'atelier), `archive/` (anciennes versions).

## 4. Contrat front ↔ n8n (ne pas casser)

**Endpoint** : `POST https://n8n12.skyz-app.com/webhook/eventtrip-interest` (URL de *production*, jamais `/webhook-test/`).

**Payload JSON envoyé par la landing page** :
```json
{
  "email": "...",        // obligatoire, minuscules
  "event": "...",        // obligatoire (select)
  "details": "...",      // facultatif, max 180 car.
  "budget": "...",       // facultatif (select)
  "departure": "...",    // facultatif, ville de départ
  "formula": "...",      // facultatif: Essentiel | Confort | Premium
  "consent": true,       // case OBLIGATOIRE : être recontacté
  "marketing": false,    // case FACULTATIVE : recevoir actus/offres par email
  "createdAt": "ISO-8601"
}
```
- Honeypot anti-bot : champ `website` (doit rester vide, masqué en CSS).
- Les deux cases sont **distinctes** (`name="consent"` requise, `name="marketing"` facultative). Elles lisent `form.elements.<nom>.checked`, jamais de valeur codée en dur.
- Le texte des cases se modifie dans le `<span>` du `<label class="consent">` dans `index.html` ; ne pas toucher aux attributs `name`.
- L'URL du webhook est dans `js/config.js` (`webhookUrl`), le payload dans `js/form.js`.

## 5. Workflow n8n principal (v3)

Nœuds, dans l'ordre : `Recevoir le formulaire1` (Webhook, CORS `*`, responseMode `responseNode`) → `Vérifier les réponses1` (Code : nettoie, valide email/event/consent, construit `lead` + `consentProof`) → `Email valide ?` (IF ; faux → `Répondre erreur`) → `Trier le lead (IA)` (AI Agent + Chat Model branché en `ai_languageModel`) → `Fusionner la classification` (Code : extrait `temperature`) → `Append row in sheet` → `Confirmer à la landing page1` → `Envoyer l'email de confirmation` → `Marketing coché ?` (IF) → `Envoyer l'email marketing`.

- **Étape IA** : règle de tri = chaud (budget ≥ 1000 € ou formule Confort/Premium, avec détails précis), tiède (infos partielles), froid (très peu d'infos). Le modèle ne répond que par un mot. Le JSON d'origine utilise Mistral Cloud ; l'instance actuelle de Dimitri utilise un **Groq Chat Model** (même branchement).
- **Preuve de consentement** : colonne dédiée « Preuve de consentement » (texte horodaté), plus colonnes `Marketing` et `Température`.
- **Colonnes du Google Sheet** (noms exacts, accents compris) : `Email`, `Evènement` (accent **grave**), `Détail`, `Budget`, `Ville de Départ`, `Formule`, `Consentement`, `Preuve de consentement`, `Marketing`, `Température`, `Date`. Après `Append row`, les nœuds suivants lisent ces noms aplatis : `$json['Evènement']`, `$json['Ville de Départ']`, etc.
- La condition `Marketing coché ?` doit tolérer `true`/`TRUE`/`VRAI` (Google Sheets en français peut renvoyer du texte).
- Les credentials (Gmail OAuth2, Google Sheets OAuth2, modèle IA, LinkedIn) **ne sont pas dans les JSON** : les IDs sont des placeholders ; il faut les reconnecter dans n8n après import.

## 6. Pièges déjà rencontrés (ne pas refaire)

- `<select>` : toujours des `<option>…</option>` complets ; des balises manquantes cassent la liste en vrai navigateur.
- `localhost` dans `WEBHOOK_URL` ne marche que sur la machine de n8n ; utiliser le domaine public.
- `/webhook-test/` n'écoute que pendant « Listen for test event » ; `/webhook/` = production.
- Une erreur CORS affichée peut cacher un 404 (workflow non publié ou mauvais path).
- OAuth Google : l'URI de redirection doit être identique à celle affichée par n8n (`https://n8n12.skyz-app.com/rest/oauth2-credential/callback`). Gmail et Sheets ont chacun leur propre autorisation ; activer Gmail API, Sheets API **et** Drive API ; ajouter le compte comme testeur si l'écran de consentement est en mode test.
- Nœud Sheets « Column names were updated » : ajouter les nouveaux en-têtes dans la feuille puis rafraîchir le mapping (ou recréer le nœud).
- Le nœud « Filter » n'a qu'une sortie : utiliser **IF** pour deux branches.

## 7. LinkedIn

- Workflow : déclencheur manuel → texte (Set) → **Gmail « Send and Wait »** (boutons Approuver/Refuser) → IF `data.approved` → nœud LinkedIn (Post → Create).
- La consigne d'école demande de publier **en tant que personne (profil)** puis de vérifier à la main que le post apparaît. Publier au nom d'une **page entreprise** exige le scope `w_organization_social` (produit Community Management API à demander à LinkedIn), la page à administrer en Super admin, et l'URN `urn:li:organization:<ID>` (l'ID numérique figure dans l'URL d'administration de la page).
- Type d'organisation choisi pour la page : « Société de personnes » (deux associés ; champ purement informatif).

## 8. Livrables d'école

- Analyse stratégique du projet (PESTEL, 5 forces de Porter, marché TAM/SAM/SOM, SWOT, business model, mise en marché) et présentation de **8 slides, à la première personne**, dans le même format que le précédent projet (outil IA de suivi des risques cyber pour PME).
- Les deux générateurs (`deck_sport.js`, `atelier2_s45.js`) partagent la palette **vert sombre `0F3D3E` / vert pâle `BFE3D0` / accent `1E6B52`**, polices Cambria (titres) et Calibri (texte). La landing page, elle, est bleue : ne pas mélanger les deux palettes.
- Chaque slide du deck porte un pied de page « Apport de l'IA / Non vérifié » : conserver ce principe de transparence sur ce qui est vérifié ou non.
- Consigne de l'atelier à respecter : webhook → tunnel/URL publique → formulaire branché → étape IA de tri → enregistrement avec preuve de consentement → email de confirmation, et email marketing **seulement si la case est cochée**.

## 9. Comment je veux que tu travailles

- **Réponds en français** (le code, les noms de variables techniques et les commentaires restent comme dans les fichiers existants).
- Va droit au but : le résultat d'abord, peu de blabla, pas de récapitulatif des étapes.
- Avant de modifier, **lis le fichier concerné** ; modifie la version à jour (section 3) et dis quel fichier tu changes.
- Landing page : ne change pas le visuel sauf demande explicite ; pas de dépendances externes inutiles ; pas d'étape de build (le site doit marcher tel quel sur GitHub Pages). Le contenu répété passe par `js/config.js`, jamais écrit en dur dans `index.html`. Exception : `<title>` et `<meta name="description">`, à garder alignés sur `config.js` car les aperçus de liens n'exécutent pas le JavaScript.
- JSON n8n : après toute édition, valide-le (`python3 -c "import json; json.load(open('fichier.json'))"`) ; garde les IDs de nœuds uniques et les connexions cohérentes ; explique ce qu'il faudra reconnecter à la main (credentials).
- Si un changement touche un nom de champ (front **ou** n8n), mets à jour les deux côtés et la section 4.
- N'invente pas de chiffres de marché, de prix ou de concurrents : indique la source ou marque « non vérifié ».
- Ne mets jamais de secrets (clés API, tokens, secrets OAuth) dans les fichiers ni dans les commits. Pas de commit ni de push sans que je le demande.
- Je suis étudiant : quand une étape est technique (OAuth, DNS, n8n), donne les étapes concrètes et dis ce que je dois voir à l'écran.

## 10. État actuel et prochaines étapes

**Fait** : landing v4 avec deux cases ; workflow v3 fonctionnel de bout en bout (webhook, IA, Sheets, emails, branche marketing) et publié ; workflow LinkedIn créé ; ancien problème Sheets (colonnes) et Marketing (booléen) résolus.

**À faire / à trancher** :
1. Choisir le nom définitif (vérifier la disponibilité du domaine `.fr`/`.com` et des réseaux sociaux) puis répercuter dans la landing (`BRAND_NAME` et `logo` de `js/config.js`, `<title>` et description de `index.html`), les emails, le post LinkedIn et le titre des workflows.
2. Tester la landing **sans** ouvrir n8n pour confirmer que le webhook de production répond seul (vérifier l'onglet Executions et la console du navigateur).
3. Obtenir l'accès LinkedIn Developer (scopes) puis tester le workflow LinkedIn avec un texte court ; vérifier à la main que le post est bien visible sur le profil.
4. Ajouter un lien de désinscription dans l'email marketing (RGPD) et vérifier la mention de consentement.
5. Finaliser l'analyse stratégique et le deck de 8 slides.