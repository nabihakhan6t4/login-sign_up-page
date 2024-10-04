// Password Regex Validation
function validatePassword(password) {
  // Regex to check for minimum 8 characters, one uppercase, one lowercase, one number, and one special character
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  return re.test(password);
}

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Password Match Check
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match!",
      });
      return;
    }

    // Password Strength Check using Regex
    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak password",
        text: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
      });
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
      Swal.fire({
        icon: "error",
        title: "User already exists",
        text: "Please try a different email.",
      });
      return;
    }

    // Store user data in local storage
    const user = {
      name: username,
      email: email,
      password: password, // Save as plain text to hash later on login
    };
    localStorage.setItem(email, JSON.stringify(user));

    // Success Registration
    Swal.fire({
      icon: "success",
      title: "Registered successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "login.html";
    });
  });
