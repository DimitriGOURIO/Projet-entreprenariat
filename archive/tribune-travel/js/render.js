'use strict';
// Remplit la page à partir de js/config.js. Rien à modifier ici pour changer le contenu.

const TEXTS = {
  name: SITE.name,
  nameUpper: SITE.name.toUpperCase(),
  sloganLine1: SITE.slogan.line1,
  sloganLine2: SITE.slogan.line2,
  examplePrice: SITE.example.price,
  exampleFormula: SITE.example.formula
};

const OPTIONS = {
  events: SITE.events,
  budgets: SITE.budgets,
  formulas: SITE.formulas.map(formula => formula.name)
};

function renderHead() {
  document.title = `${SITE.name} — ${SITE.slogan.line1} ${SITE.slogan.line2}`;
  document.querySelector('meta[name="description"]').content = SITE.description;
  document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.documentElement).getPropertyValue('--navy').trim();
}

function renderTexts() {
  document.querySelectorAll('[data-text]').forEach(element => {
    element.textContent = TEXTS[element.dataset.text];
  });
  document.querySelectorAll('[data-aria-label]').forEach(element => {
    element.setAttribute('aria-label', element.dataset.ariaLabel.replace('{name}', SITE.name));
  });
}

function renderLogos() {
  document.querySelectorAll('[data-logo]').forEach(logo => {
    const icon = new Image();
    const text = document.createElement('strong');
    const end = document.createElement('span');

    icon.src = SITE.logo.image;
    icon.alt = '';
    icon.className = 'brand-icon';
    end.textContent = SITE.logo.end;
    text.append(SITE.logo.start, end);
    logo.append(icon, text);
  });
}

function renderSports() {
  const sports = document.getElementById('sports');
  SITE.sports.forEach(sport => {
    const tag = document.createElement('span');
    tag.textContent = sport;
    sports.append(tag);
  });
}

function renderFormulas() {
  const list = document.getElementById('formulas');
  const template = document.getElementById('formula-template');

  SITE.formulas.forEach((formula, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const button = card.querySelector('.btn');
    const flag = card.querySelector('.flag');

    card.querySelector('.count').textContent = `FORMULE / ${String(index + 1).padStart(2, '0')}`;
    card.querySelector('h3').textContent = formula.name;
    card.querySelector('.desc').textContent = formula.description;
    formula.features.forEach(feature => {
      const item = document.createElement('li');
      item.textContent = feature;
      card.querySelector('ul').append(item);
    });

    if (formula.flag) {
      card.classList.add('featured');
      flag.textContent = formula.flag;
    } else {
      flag.remove();
      button.classList.add('outline');
    }
    button.dataset.formula = formula.name;

    list.append(card);
  });
}

function renderOptions() {
  document.querySelectorAll('select[data-options]').forEach(select => {
    OPTIONS[select.dataset.options].forEach(label => select.add(new Option(label)));
  });
}

function renderExample() {
  const button = document.getElementById('example-cta');
  button.dataset.event = SITE.example.event;
  button.dataset.formula = SITE.example.formula;
}

renderHead();
renderTexts();
renderLogos();
renderSports();
renderFormulas();
renderOptions();
renderExample();
