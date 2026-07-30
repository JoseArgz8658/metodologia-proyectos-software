const cards = document.querySelectorAll('.style-card');
const focusButtons = document.querySelectorAll('.focus-style');
const year = document.querySelector('#year');

focusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.style-card');
    const wasFocused = card.classList.contains('is-focused');
    cards.forEach((item) => item.classList.remove('is-focused'));
    focusButtons.forEach((item) => item.textContent = 'Ver enfoque');
    if (!wasFocused) {
      card.classList.add('is-focused');
      button.textContent = 'Quitar enfoque';
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

year.textContent = new Date().getFullYear();