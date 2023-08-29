document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const contentDiv = document.getElementById("content");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        const password = document.getElementById("password").value;

        // Replace 'your_password' with your actual password
        if (password === "your_password") {
            loginForm.style.display = "none";
            contentDiv.style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
