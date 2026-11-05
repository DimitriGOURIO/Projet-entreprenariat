'use strict';
// Page parcours.html : onglets commerce / ingénieur, voies d'accès et débouchés (SITE.pathways dans js/config.js).

const pathwayTabs = document.getElementById('pathway-tabs');
const pathwayIntro = document.getElementById('pathway-intro');
const routeList = document.getElementById('routes');
const outcomeList = document.getElementById('outcomes');
const routeTemplate = document.getElementById('route-template');

function showPathway(index) {
  const pathway = SITE.pathways[index];

  pathwayTabs.querySelectorAll('button').forEach((tab, tabIndex) => {
    tab.setAttribute('aria-selected', String(tabIndex === index));
  });
  history.replaceState(null, '', `#${pathway.id}`);
  pathwayIntro.textContent = pathway.intro;

  routeList.replaceChildren(...pathway.routes.map((route, routeIndex) => {
    const card = routeTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector('.route-num').textContent = String(routeIndex + 1).padStart(2, '0');
    card.querySelector('h3').textContent = route.title;
    card.querySelector('.route-audience').textContent = route.audience;
    card.querySelector('.route-duration').textContent = route.duration;
    card.querySelector('.route-plus').append(route.plus);
    card.querySelector('.route-watch').append(route.watch);
    route.steps.forEach(step => card.querySelector('.route-steps').append(createElement('li', '', step)));
    return card;
  }));

  outcomeList.replaceChildren(...pathway.outcomes.map(outcome => {
    const card = createElement('article', 'outcome');
    const jobs = createElement('ul', 'outcome-jobs');
    outcome.jobs.forEach(job => jobs.append(createElement('li', '', job)));
    card.append(createElement('h4', '', outcome.domain), jobs);
    return card;
  }));
}

SITE.pathways.forEach((pathway, index) => {
  const tab = createElement('button', '', pathway.tab);
  tab.type = 'button';
  tab.role = 'tab';
  tab.addEventListener('click', () => showPathway(index));
  pathwayTabs.append(tab);
});

// Onglet de départ : celui de l'adresse (#commerce, #ingenieur), sinon le premier
const startIndex = SITE.pathways.findIndex(pathway => `#${pathway.id}` === location.hash);
showPathway(Math.max(startIndex, 0));
