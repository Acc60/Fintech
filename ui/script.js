function showAlert() {
    alert("Welcome to FinTech Solutions! Let's get started.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("confirmation").innerText = "Message sent successfully!";
        this.reset();
    } else {
        document.getElementById("confirmation").innerText = "Please fill out all fields.";
    }
});
