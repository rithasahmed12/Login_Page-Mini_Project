function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementsByName('password')[0];
    const errorMessage = document.getElementById('error-message');


    const emailRegex = /^[a-zA-Z0-9._-]+@['gmail']+\.[a-zA-Z]{2,4}$/;


    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Invalid email address';
        return false; 
    }

    
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters,one uppercase letter, one lowercase letter, one number, and one special character.';
        return false; 
    }

    errorMessage.textContent = ''; 
    return true; 
}       gc