const form = document.querySelector('#designForm');
const steps = [...document.querySelectorAll('.question-step')];
const previousButton = document.querySelector('#previousStep');
const nextButton = document.querySelector('#nextStep');
const submitButton = document.querySelector('#showResult');
const stepLabel = document.querySelector('#stepLabel');
const progress = document.querySelector('#progress');
const preview = document.querySelector('#livePreview');
const resultPanel = document.querySelector('#resultPanel');
const primaryRecommendation = document.querySelector('#primaryRecommendation');
const recommendationReason = document.querySelector('#recommendationReason');
const recommendationList = document.querySelector('#recommendationList');
const restartButton = document.querySelector('#restartWizard');
let currentStep = 0;

const styleNames = {
  minimal: 'Minimalismo', glass: 'Glassmorphism', clay: 'Claymorphism',
  neo: 'Neomorphism', bento: 'Bento UI', brutal: 'Neo-Brutalismo'
};

const styleDescriptions = {
  minimal: 'Claro, profesional y fácil de mantener.',
  glass: 'Moderno, profundo y con sensación premium.',
  clay: 'Amable, táctil y cercano.',
  neo: 'Tecnológico, suave y visualmente integrado.',
  bento: 'Modular, ordenado y adecuado para mucha información.',
  brutal: 'Atrevido, directo y con alta personalidad.'
};

function selectedValue(name) {
  return form.elements[name]?.value || '';
}

function validateCurrentStep() {
  const checked = steps[currentStep].querySelector('input:checked');
  if (!checked) {
    steps[currentStep].querySelector('input').focus();
    return false;
  }
  return true;
}

function updateStep() {
  steps.forEach((step, index) => step.classList.toggle('active', index === currentStep));
  stepLabel.textContent = `Paso ${currentStep + 1} de ${steps.length}`;
  progress.value = currentStep + 1;
  previousButton.disabled = currentStep === 0;
  nextButton.hidden = currentStep === steps.length - 1;
  submitButton.hidden = currentStep !== steps.length - 1;
}

function calculateScores() {
  const scores = { minimal: 0, glass: 0, clay: 0, neo: 0, bento: 0, brutal: 0 };
  const purpose = selectedValue('purpose');
  const personality = selectedValue('personality');
  const density = selectedValue('density');
  const accessibility = selectedValue('accessibility');

  if (purpose === 'corporate') { scores.minimal += 4; scores.bento += 1; }
  if (purpose === 'product') { scores.glass += 3; scores.neo += 2; scores.minimal += 1; }
  if (purpose === 'creative') { scores.brutal += 4; scores.clay += 2; scores.glass += 1; }
  if (purpose === 'dashboard') { scores.bento += 5; scores.minimal += 2; }

  if (personality === 'serious') { scores.minimal += 4; scores.bento += 2; }
  if (personality === 'premium') { scores.glass += 4; scores.neo += 2; }
  if (personality === 'friendly') { scores.clay += 5; scores.minimal += 1; }
  if (personality === 'bold') { scores.brutal += 5; scores.glass += 1; }

  if (density === 'low') { scores.minimal += 3; scores.clay += 1; }
  if (density === 'medium') { scores.glass += 1; scores.neo += 2; scores.minimal += 1; }
  if (density === 'high') { scores.bento += 4; scores.minimal += 2; }

  if (accessibility === 'high') { scores.minimal += 4; scores.bento += 2; scores.glass -= 1; scores.neo -= 2; }
  if (accessibility === 'balanced') { scores.minimal += 1; scores.bento += 1; scores.clay += 1; }
  if (accessibility === 'experimental') { scores.brutal += 2; scores.glass += 2; scores.neo += 1; }

  return scores;
}

function bestStyles() {
  return Object.entries(calculateScores()).sort((a, b) => b[1] - a[1]).slice(0, 3);
}

function applyPreview() {
  const ranked = bestStyles();
  const best = ranked[0]?.[0] || 'minimal';
  const palette = selectedValue('palette') || 'blue';
  preview.className = `site-preview preview-${best} palette-${palette}`;
}

form.addEventListener('change', applyPreview);

nextButton.addEventListener('click', () => {
  if (!validateCurrentStep()) return;
  currentStep += 1;
  updateStep();
  applyPreview();
});

previousButton.addEventListener('click', () => {
  currentStep -= 1;
  updateStep();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateCurrentStep()) return;
  const ranked = bestStyles();
  const best = ranked[0][0];
  primaryRecommendation.textContent = `Tu recomendación principal: ${styleNames[best]}`;
  recommendationReason.textContent = `${styleDescriptions[best]} La recomendación considera el propósito, personalidad, cantidad de información y prioridad de accesibilidad que seleccionaste.`;
  recommendationList.innerHTML = ranked.map(([style], index) => `
    <article class="recommendation-item">
      <strong>${index + 1}. ${styleNames[style]}</strong>
      <span>${styleDescriptions[style]}</span>
    </article>`).join('');
  resultPanel.hidden = false;
  applyPreview();
  resultPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

restartButton.addEventListener('click', () => {
  form.reset();
  currentStep = 0;
  resultPanel.hidden = true;
  preview.className = 'site-preview preview-minimal palette-blue';
  updateStep();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateStep();