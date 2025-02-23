const predefinedResponses = {
    "hi": "Mai aapki saheta kaise kar sakta hu",
    "how are you": "I'm just a bunch of code, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a nice day!",
    "sbi khata": "jan dhan yojana ke andar bana ke faide utha sakte hai",
    "jana dhan ":"One basic savings bank account is opened for unbanked person.",

};

function ask() {
    const query = document.getElementById('query').value.toLowerCase();
    const chatBox = document.getElementById('chat-box');

    if (query) {
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${query}`;
        userMessage.className = 'user-message';
        chatBox.appendChild(userMessage);

        let botResponse = predefinedResponses[query] || "I'm sorry, I don't understand that.";
        const botMessage = document.createElement('div');
        botMessage.textContent = `Bot: ${botResponse}`;
        botMessage.className = 'bot-message';
        chatBox.appendChild(botMessage);

        document.getElementById('query').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('confirmation').textContent = `Thank you for signing up, ${name}! You will receive an email at ${email} with the course details.`;
});



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    const correctMobile = "1234567890"; // Replace with the correct mobile number
    const correctPassword = "password123"; // Replace with the correct password

    if (mobile === correctMobile && password === correctPassword) {
        window.location.href = "welcome.html"; // Redirect to the new page
    } else {
        document.getElementById("error-message").textContent = "Invalid mobile number or password.";
    }
});
