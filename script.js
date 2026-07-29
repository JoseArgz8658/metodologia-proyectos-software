const root = document.documentElement;
const themeToggle = document.querySelector('#themeToggle');
const currentYear = document.querySelector('#currentYear');
const storageKey = 'mps-theme';

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.title = theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
}

applyTheme(getPreferredTheme());
currentYear.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(storageKey, nextTheme);
});
