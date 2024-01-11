// login.js

// Function to handle login
function handleLogin() {
    // Redirect to the dashboard page (assuming it's named "dashboard.html")
    window.location.href = 'http://127.0.0.1:5500/dashboard.html'; // Adjust the path as needed
}

// Add a click event listener to the "Login" button
document.getElementById('login-button').addEventListener('click', handleLogin);
