// Check if a user is logged in
var user = localStorage.getItem("user");
if (user) {
  var parsedUser = JSON.parse(user);
  document.getElementById(
    "welcomeMessage"
  ).innerHTML = `Hello ${parsedUser.name}`;
  document.getElementById("logoutButton").classList.remove("hidden");
} else {
  document.getElementById(
    "welcomeMessage"
  ).innerHTML = `Hello, please <a href="login.html">Login</a>`;
}

// Handle logout
document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

// Handle login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value.toLowerCase(); // Convert email to lowercase
    var password = document.getElementById("password").value;

    var storedUser = localStorage.getItem(email);
    if (storedUser) {
      var parsedUser = JSON.parse(storedUser);
      if (parsedUser.password === password) {
        localStorage.setItem("user", JSON.stringify(parsedUser));
        window.location.href = "index.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect password!",
        });
      }
    } else {
      Swal.fire({
        icon: "question",
        title: "User not found",
        text: "Would you like to register?",
      });
    }
  });

// Handle registration
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value.toLowerCase(); // Convert email to lowercase
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Password matching validation
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match!",
      });
      return;
    }

    // Check if the user already exists
    if (localStorage.getItem(email)) {
      Swal.fire({
        icon: "error",
        title: "User already exists",
        text: "Please try a different email.",
      });
      return;
    }

    // Save new user data to localStorage
    const user = {
      name: username,
      email: email,
      password: password,
    };

    localStorage.setItem(email, JSON.stringify(user));
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "You can now log in.",
    }).then(function () {
      window.location.href = "login.html";
    });
  });
