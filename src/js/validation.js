const emailLogin = document.querySelector('[data-email]');
const passwordLogin = document.querySelector('[data-password]');
const login = document.querySelector('[data-login]');

login.addEventListener('click', (event) => {
  event.preventDefault();

  if (emailLogin.value === 'admin@admin.com' && passwordLogin.value === '12345') {
    window.location.href = '../pages/products.html'
  }
})
