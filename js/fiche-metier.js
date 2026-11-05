'use strict';
// Page fiche-metier.html?id=... : affiche une fiche du dossier fiches/.

function fillList(id, items, className) {
  document.getElementById(id).replaceChildren(...items.map(item => createElement('li', className, item)));
}

fichesReady.then(({ schools, byId }) => {
  const id = new URLSearchParams(location.search).get('id');
  const fiche = byId[id];

  if (!fiche) {
    document.getElementById('fiche-title').textContent = 'Fiche introuvable';
    document.getElementById('fiche-summary').textContent = 'Cette fiche n’existe pas ou a changé d’adresse.';
    document.getElementById('crumb-title').textContent = 'Fiche introuvable';
    document.querySelectorAll('[data-fiche-only]').forEach(element => { element.hidden = true; });
    document.getElementById('fiche-missing').hidden = false;
    return;
  }

  const school = schools.find(item => item.id === fiche.schoolId);
  const domain = school.domains.find(item => item.id === fiche.domainId);

  document.title = `${fiche.title} — Fiche métier — ${SITE.name}`;
  document.querySelector('meta[name="description"]').content = fiche.summary;

  // En-tête
  const crumbDomain = document.getElementById('crumb-domain');
  crumbDomain.textContent = `${school.name} · ${domain.name}`;
  crumbDomain.href = `metiers.html#${domain.anchor}`;
  document.getElementById('crumb-title').textContent = fiche.title;
  document.getElementById('fiche-role').textContent = fiche.role;
  const level = document.getElementById('fiche-level');
  level.className = `level level-${fiche.level}`;
  level.textContent = SITE.levels[fiche.level];
  document.getElementById('fiche-title').textContent = fiche.title;
  document.getElementById('fiche-summary').textContent = fiche.summary;
  document.getElementById('fiche-where').textContent = fiche.where;
  document.getElementById('fiche-with').textContent = fiche.withWho;
  document.getElementById('fiche-studies').textContent = fiche.studies;

  // Au quotidien
  fillList('fiche-missions', fiche.missions);
  document.getElementById('fiche-day').replaceChildren(...fiche.day.map(step => {
    const item = createElement('li');
    item.append(createElement('b', '', step.time), createElement('span', '', step.task));
    return item;
  }));

  // Compétences et outils
  fillList('fiche-skills', fiche.skills);
  fillList('fiche-qualities', fiche.qualities);
  fillList('fiche-tools', fiche.tools);

  // Études
  document.getElementById('fiche-school').textContent = school.studyTitle;
  fillList('fiche-majors', fiche.school.majors);
  fillList('fiche-courses', fiche.school.courses);
  fillList('fiche-projects', fiche.school.projects);
  fillList('fiche-routes', fiche.otherRoutes);
  const pathwayLink = document.getElementById('fiche-pathway');
  if (SITE.pathways.some(pathway => pathway.id === school.id)) pathwayLink.href = `parcours.html#${school.id}`;
  else pathwayLink.remove();

  // Le pour et le contre, évolutions
  fillList('fiche-likes', fiche.likes);
  fillList('fiche-challenges', fiche.challenges);
  fillList('fiche-careers', fiche.careers);
  const related = fiche.related.map(name => byId[name]).filter(Boolean);
  document.getElementById('fiche-related').replaceChildren(...related.map(createFicheCard));
  document.getElementById('related-block').hidden = !related.length;
});
