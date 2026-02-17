function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Validate username
  const username = document.getElementById("username").value;
  if (username.length < 3) {
    document.getElementById("usernameError").innerText = "Username must be at least 3 characters long.";
    isValid = false;
  }
  // Validate email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address.";
    isValid = false;
  }
  // Validate password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
    isValid = false;
  }
  return isValid;
}
