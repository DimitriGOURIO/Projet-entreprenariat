'use strict';
// Parties interactives : recherche de l'accueil, explorateur par domaine, onglets de la fiche exemple.

const domainTabs = document.getElementById('domain-tabs');
const domainJobs = document.getElementById('domain-jobs');
const domainTitle = document.getElementById('domain-title');

function showDomain(index, highlightedJob) {
  const domain = SITE.domains[index];

  domainTabs.querySelectorAll('button').forEach((tab, tabIndex) => {
    tab.setAttribute('aria-selected', String(tabIndex === index));
  });
  domainTitle.textContent = domain.name;
  domainJobs.replaceChildren(...domain.jobs.map(job => {
    const card = document.createElement('article');
    const level = document.createElement('span');
    const title = document.createElement('h4');
    const access = document.createElement('p');

    card.className = 'job-card';
    if (job.title === highlightedJob) card.classList.add('is-highlighted');
    level.className = `level level-${job.level}`;
    level.textContent = SITE.levels[job.level];
    title.textContent = job.title;
    access.textContent = job.access;
    card.append(level, title, access);
    if (job.fiche) {
      const link = createElement('a', 'job-link', 'Voir la fiche');
      link.href = `fiche-metier.html?id=${job.fiche}`;
      card.append(link);
    }
    return card;
  }));
}

SITE.domains.forEach((domain, index) => {
  const tab = document.createElement('button');
  tab.type = 'button';
  tab.role = 'tab';
  tab.textContent = domain.name;
  tab.addEventListener('click', () => showDomain(index));
  domainTabs.append(tab);
});
showDomain(0);

// Recherche de l'accueil : ouvre le domaine correspondant, sinon propose de suggérer le métier
const normalize = text => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/·/g, '');

document.getElementById('hero-search').addEventListener('submit', event => {
  event.preventDefault();
  const query = normalize(event.target.elements.q.value.trim());
  const status = document.getElementById('search-status');
  if (!query) return;

  let match = null;
  SITE.domains.forEach((domain, index) => {
    if (match) return;
    const job = domain.jobs.find(item => normalize(item.title).includes(query));
    if (job || normalize(domain.name).includes(query)) match = { index, job: job && job.title };
  });

  if (match) {
    status.textContent = '';
    showDomain(match.index, match.job);
    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
  } else {
    status.textContent = 'Ce métier n’est pas encore dans l’aperçu. Suggérez-le-nous plus bas !';
    document.getElementById('message').value = event.target.elements.q.value.trim();
  }
});

document.querySelectorAll('[data-search]').forEach(chip => {
  chip.addEventListener('click', () => {
    const form = document.getElementById('hero-search');
    form.elements.q.value = chip.dataset.search;
    form.requestSubmit();
  });
});

// Onglets de la fiche métier exemple
document.querySelectorAll('.sheet-tabs button').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sheet-tabs button').forEach(other => {
      const selected = other === tab;
      other.setAttribute('aria-selected', String(selected));
      document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
    });
  });
});

// Boutons "C'est moi" des profils : préremplit le formulaire
document.addEventListener('click', event => {
  const link = event.target.closest('[data-profile]');
  if (link) document.getElementById('profile').value = link.dataset.profile;
});
