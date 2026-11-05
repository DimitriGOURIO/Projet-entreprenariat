'use strict';
// Charge les fiches métiers rangées dans fiches/ (voir fiches/sommaire.js). Rien à modifier ici pour le contenu.
// Pas d'étape de build : les fichiers sont ajoutés à la page un par un, puis "fichesReady" donne le résultat.

const loadedDomains = {};
const loadedFiches = {};

// Un fichier sait où il est rangé : fiches/<école>/<domaine>/<nom>.js
function scriptFolder() {
  const parts = document.currentScript.src.split('/');
  return { name: parts.pop().replace(/\.js$/, ''), domain: parts.pop(), school: parts.pop() };
}

// Appelée par chaque domaine.js
function ajouterDomaine(domain) {
  const { school, domain: id } = scriptFolder();
  loadedDomains[`${school}/${id}`] = { ...domain, id, school, anchor: `${school}-${id}` };
}

// Appelée par chaque fichier de fiche
function ajouterFiche(fiche) {
  const { school, domain, name } = scriptFolder();
  if (loadedFiches[name]) console.warn(`Deux fiches s'appellent "${name}" : renommez l'un des fichiers.`);
  loadedFiches[name] = { ...fiche, id: name, schoolId: school, domainId: domain };
}

// Les fichiers se téléchargent en parallèle mais s'exécutent dans l'ordre (async = false)
function loadScripts(paths) {
  return Promise.all(paths.map(path => new Promise(resolve => {
    const script = document.createElement('script');
    script.src = path;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => {
      console.warn(`Fichier introuvable : ${path} (vérifiez le nom dans le sommaire ou le domaine.js)`);
      resolve();
    };
    document.head.append(script);
  })));
}

const fichesReady = (async () => {
  await loadScripts(SOMMAIRE.flatMap(school => school.domains.map(domain => `fiches/${school.id}/${domain}/domaine.js`)));
  await loadScripts(Object.values(loadedDomains).flatMap(domain => domain.fiches.map(name => `fiches/${domain.school}/${domain.id}/${name}.js`)));

  const schools = SOMMAIRE.map(school => ({
    ...school,
    domains: school.domains
      .map(id => loadedDomains[`${school.id}/${id}`])
      .filter(Boolean)
      .map(domain => ({ ...domain, fiches: domain.fiches.map(name => loadedFiches[name]).filter(Boolean) }))
  }));
  return { schools, byId: loadedFiches };
})();

// Lien vers une fiche
const ficheUrl = id => `fiche-metier.html?id=${encodeURIComponent(id)}`;

// Carte d'une fiche, créée depuis <template id="fiche-card-template">
function createFicheCard(fiche, index) {
  const card = document.getElementById('fiche-card-template').content.firstElementChild.cloneNode(true);
  card.href = ficheUrl(fiche.id);
  card.querySelector('.fiche-role').textContent = fiche.role;
  card.querySelector('h4').textContent = fiche.title;
  card.querySelector('.fiche-card-summary').textContent = fiche.summary;
  card.querySelector('.fiche-studies').textContent = fiche.studies;
  card.style.setProperty('--tone', `var(--tone-${index % 4 + 1})`);
  card.style.setProperty('--tone-soft', `var(--tone-${index % 4 + 1}-soft)`);
  return card;
}
