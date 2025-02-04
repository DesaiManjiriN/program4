
unction validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation (for demonstration purposes)
    if (username === 'manjiri' && password === '123') {
        alert("Login Successful!");
        return true; // Proceed with login
    } else {
        errorMessage.style.display = 'block'; // Show error message
        return false; // Prevent form submission
    }
}