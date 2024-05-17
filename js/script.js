const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  if (password.value.toLowerCase() !== confirmPassword.value.toLowerCase()) {
    password.setCustomValidity("* Passwords do not match");
    password.reportValidity();
    confirmPassword.classList.add("invalid");

    event.preventDefault();
  }
})