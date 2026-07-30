const labStylesheet = document.createElement('link');
labStylesheet.rel = 'stylesheet';
labStylesheet.href = 'lab.css';
document.head.append(labStylesheet);

const root = document.documentElement;
const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const currentYear = document.querySelector('#currentYear');
const modal = document.querySelector('#demoModal');
const openModalButton = document.querySelector('#openModal');
const closeModalButton = document.querySelector('#closeModal');
const cancelModalButton = document.querySelector('#cancelModal');
const confirmModalButton = document.querySelector('#confirmModal');
const toast = document.querySelector('#toast');
const densityControl = document.querySelector('#densityControl');
const radiusControl = document.querySelector('#radiusControl');
const shadowControl = document.querySelector('#shadowControl');
const primaryColorControl = document.querySelector('#primaryColorControl');
const buttonVariantControl = document.querySelector('#buttonVariantControl');
const buttonPreview = document.querySelector('#buttonPreview');
const resetStylesButton = document.querySelector('#resetStyles');

const themeStorageKey = 'mps-theme';
const labStorageKey = 'mps-ui-lab-settings';
const defaultLabSettings = {
  density: 'comfortable',
  radius: 'rounded',
  shadow: 'soft',
  primaryColor: '#3157d5',
  buttonVariant: 'primary',
};
let toastTimer;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  if (themeToggle) themeToggle.title = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
}

function closeMenu() {
  mainNav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir navegación');
}

function showToast(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2800);
}

function readLabSettings() {
  try {
    return { ...defaultLabSettings, ...JSON.parse(localStorage.getItem(labStorageKey) || '{}') };
  } catch {
    return { ...defaultLabSettings };
  }
}

function applyButtonVariant(variant) {
  if (!buttonPreview) return;
  buttonPreview.classList.remove('primary', 'secondary', 'ghost', 'danger-button');
  buttonPreview.classList.add(variant);
}

function applyLabSettings(settings, persist = true) {
  root.dataset.density = settings.density;
  root.dataset.radius = settings.radius;
  root.dataset.shadow = settings.shadow;
  root.style.setProperty('--color-primary', settings.primaryColor);
  root.style.setProperty('--color-primary-strong', settings.primaryColor);
  applyButtonVariant(settings.buttonVariant);

  if (densityControl) densityControl.value = settings.density;
  if (radiusControl) radiusControl.value = settings.radius;
  if (shadowControl) shadowControl.value = settings.shadow;
  if (primaryColorControl) primaryColorControl.value = settings.primaryColor;
  if (buttonVariantControl) buttonVariantControl.value = settings.buttonVariant;

  if (persist) localStorage.setItem(labStorageKey, JSON.stringify(settings));
}

function collectLabSettings() {
  return {
    density: densityControl?.value || defaultLabSettings.density,
    radius: radiusControl?.value || defaultLabSettings.radius,
    shadow: shadowControl?.value || defaultLabSettings.shadow,
    primaryColor: primaryColorControl?.value || defaultLabSettings.primaryColor,
    buttonVariant: buttonVariantControl?.value || defaultLabSettings.buttonVariant,
  };
}

applyTheme(getPreferredTheme());
applyLabSettings(readLabSettings(), false);
if (currentYear) currentYear.textContent = new Date().getFullYear();

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(themeStorageKey, nextTheme);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav?.classList.toggle('open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar navegación' : 'Abrir navegación');
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

openModalButton?.addEventListener('click', () => modal?.showModal());
closeModalButton?.addEventListener('click', () => modal?.close());
cancelModalButton?.addEventListener('click', () => modal?.close());
confirmModalButton?.addEventListener('click', () => {
  modal?.close();
  showToast('Decisión confirmada correctamente.');
});

modal?.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.toast));
});

[densityControl, radiusControl, shadowControl, primaryColorControl, buttonVariantControl]
  .filter(Boolean)
  .forEach((control) => control.addEventListener('input', () => applyLabSettings(collectLabSettings())));

resetStylesButton?.addEventListener('click', () => {
  applyLabSettings({ ...defaultLabSettings });
  showToast('Estilos del laboratorio restablecidos.');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) closeMenu();
});
