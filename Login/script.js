function validatePasswords() {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    const errorElement = document.getElementById('error');
  
    if (password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match!";
      return false;
    }
  
    errorElement.textContent = "";
    return true;
  }
  