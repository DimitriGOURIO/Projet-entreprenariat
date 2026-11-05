'use strict';
// Page metiers.html : toutes les fiches, rangées par type d'école puis par domaine (dossier fiches/).

fichesReady.then(({ schools }) => {
  const catalogue = document.getElementById('catalogue');

  catalogue.replaceChildren(...schools.map(school => {
    const block = document.getElementById('school-template').content.firstElementChild.cloneNode(true);
    const pathway = SITE.pathways.find(item => item.id === school.id);
    const link = block.querySelector('.school-link');

    block.querySelector('h2').textContent = school.name;
    if (pathway) link.href = `parcours.html#${pathway.id}`;
    else link.remove();

    block.querySelector('.school-domains').append(...school.domains.map(domain => {
      const article = document.getElementById('domain-template').content.firstElementChild.cloneNode(true);
      article.id = domain.anchor;
      article.querySelector('h3').textContent = domain.name;
      article.querySelector('.domain-block-head p').textContent = domain.intro;
      article.querySelector('.domain-count').textContent = `${domain.fiches.length} fiche${domain.fiches.length > 1 ? 's' : ''}`;
      article.querySelector('.fiche-cards').append(...domain.fiches.map(createFicheCard));
      return article;
    }));
    return block;
  }));

  // Lien direct vers un domaine (metiers.html#ingenieur-data-ia) : la page est remplie après coup, on y va à la main
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView();
});
