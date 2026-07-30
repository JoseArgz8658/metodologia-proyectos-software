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
const storageKey = 'mps-theme';
let toastTimer;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  themeToggle.title = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
}

function closeMenu() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir navegación');
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2800);
}

applyTheme(getPreferredTheme());
currentYear.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(storageKey, nextTheme);
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar navegación' : 'Abrir navegación');
});

mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

openModalButton.addEventListener('click', () => modal.showModal());
closeModalButton.addEventListener('click', () => modal.close());
cancelModalButton.addEventListener('click', () => modal.close());
confirmModalButton.addEventListener('click', () => {
  modal.close();
  showToast('Decisión confirmada correctamente.');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.toast));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) closeMenu();
});