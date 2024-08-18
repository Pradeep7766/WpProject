const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // TO DO: implement authentication logic here
  // for demonstration purposes, just check if username and password are not empty
  if (username !== '' && password !== '') {
    // simulate successful login
    console.log('Login successful!');
    // redirect to dashboard or home page
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});