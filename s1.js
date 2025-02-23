document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    const correctMobile = "1234567890"; // Replace with the correct mobile number
    const correctPassword = "1234567890"; // Replace with the correct password

    if (mobile === correctMobile && password === correctPassword) {
        window.location.href = "welcome.html"; // Redirect to the new page
    } else {
        document.getElementById("error-message").textContent = "Invalid mobile number or password.";
    }
});
