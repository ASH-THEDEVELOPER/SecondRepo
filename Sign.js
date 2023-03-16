// JavaScript source code
$(document).ready(function () {
    // Get elements
    const signupContainer = document.getElementById("signup-container");
    const signinContainer = document.getElementById("signin-container");
    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToSignin = document.getElementById("switch-to-signin");
    const signupForm = document.getElementById("signup-form");
    const signinForm = document.getElementById("signin-form");

    // Show sign-up form and hide sign-in form
    function showSignup() {
        signupContainer.style.display = "block";
        signinContainer.style.display = "none";
    }

    // Show sign-in form and hide sign-up form
    function showSignin() {
        signinContainer.style.display = "block";
        signupContainer.style.display = "none";
    }

    // Switch to sign-up form
    switchToSignup.addEventListener("click", (e) => {
        e.preventDefault();
        showSignup();
    });

    // Switch to sign-in form
    switchToSignin.addEventListener("click", (e) => {
        e.preventDefault();
        showSignin();
    });

    // Handle sign-up form submission
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const ConfirmPD = document.getElementById("confirm-password").value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        if(password === ConfirmPD){
        // Check if user with the same email already exists
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            alert("An account with this email already exists");
            return;
        }
    
        // Create new user account
        
        const user = {
            name,
            email,
            password
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful!");
        signupForm.reset();
    }
    });

    // Handle sign-in form submission
    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            window.location.href="Booking.html";
            signinForm.reset();
        } else {
            alert("Invalid email or password");
        }
    });

    
});