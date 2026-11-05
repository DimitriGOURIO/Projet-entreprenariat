'use strict';
// Boutons "Ça me correspond" et envoi du formulaire vers n8n.
// Le contenu envoyé ne doit pas changer sans adapter le workflow n8n (voir claude.md, section 4).

const form = document.getElementById('interest-form');
const status = document.getElementById('status');
const submitBtn = form.querySelector('button[type="submit"]');
const defaultSubmitText = submitBtn.textContent;

document.querySelectorAll('[data-formula]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('formula').value = button.dataset.formula;
    if (button.dataset.event) document.getElementById('event').value = button.dataset.event;
    document.getElementById('interet').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    document.getElementById('email').focus({preventScroll:true});
  });
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.elements.website.value) return;

  const data = new FormData(form);
  const interest = {
    email: String(data.get('email')).trim().toLowerCase(),
    event: data.get('event'),
    details: String(data.get('details')).trim(),
    budget: data.get('budget'),
    departure: String(data.get('departure')).trim(),
    formula: data.get('formula'),
    consent: form.elements.consent.checked,
    marketing: form.elements.marketing.checked,
    createdAt: new Date().toISOString()
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';

  try {
    const response = await fetch(SITE.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(interest)
    });
    if (!response.ok) throw new Error('Réponse serveur invalide');

    status.className = 'status';
    status.textContent = 'Votre intérêt est bien enregistré. Vous allez recevoir un email de confirmation.';
    form.reset();
  } catch (error) {
    status.className = 'status error';
    status.textContent = 'Un problème est survenu pendant l’envoi. Vérifiez votre connexion puis réessayez.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = defaultSubmitText;
  }
});
