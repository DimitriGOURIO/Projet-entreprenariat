'use strict';
// Envoi du formulaire d'inscription vers n8n (SITE.webhookUrl dans js/config.js).

const form = document.getElementById('signup-form');
const status = document.getElementById('status');
const submitBtn = form.querySelector('button[type="submit"]');
const defaultSubmitText = submitBtn.textContent;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.elements.website.value) return;

  if (!SITE.webhookUrl) {
    status.className = 'status';
    status.textContent = 'Merci ! Les inscriptions ouvrent très bientôt : le formulaire n’est pas encore relié.';
    return;
  }

  const data = new FormData(form);
  const signup = {
    email: String(data.get('email')).trim().toLowerCase(),
    profile: data.get('profile'),
    domain: data.get('domain'),
    message: String(data.get('message')).trim(),
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
      body: JSON.stringify(signup)
    });
    if (!response.ok) throw new Error('Réponse serveur invalide');

    status.className = 'status';
    status.textContent = 'C’est noté ! Vous serez parmi les premiers à découvrir la plateforme.';
    form.reset();
  } catch (error) {
    status.className = 'status error';
    status.textContent = 'Un problème est survenu pendant l’envoi. Vérifiez votre connexion puis réessayez.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = defaultSubmitText;
  }
});
