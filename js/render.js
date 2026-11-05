'use strict';
// Remplit la page à partir de js/config.js. Rien à modifier ici pour changer le contenu.

function renderHead() {
  document.title = `${SITE.name} — ${SITE.tagline}`;
  document.querySelector('meta[name="description"]').content = SITE.description;
}

function renderTexts() {
  document.querySelectorAll('[data-text="name"]').forEach(element => {
    element.textContent = SITE.name;
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

function renderProfiles() {
  const list = document.getElementById('profiles');
  const template = document.getElementById('profile-template');

  SITE.profiles.forEach((profile, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector('.profile-tag').textContent = profile.label;
    card.querySelector('h3').textContent = profile.question;
    profile.points.forEach(point => {
      const item = document.createElement('li');
      item.textContent = point;
      card.querySelector('ul').append(item);
    });
    card.querySelector('.profile-link').dataset.profile = profile.label;
    card.style.setProperty('--tone', `var(--tone-${index % 4 + 1})`);
    card.style.setProperty('--tone-soft', `var(--tone-${index % 4 + 1}-soft)`);
    list.append(card);
  });
}

function renderOptions() {
  const options = {
    profiles: SITE.profiles.map(profile => profile.label),
    domains: SITE.domains.map(domain => domain.name)
  };
  document.querySelectorAll('select[data-options]').forEach(select => {
    options[select.dataset.options].forEach(label => select.add(new Option(label)));
  });
}

renderHead();
renderTexts();
renderLogos();
renderProfiles();
renderOptions();
