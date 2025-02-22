let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'responsive UI/UX designer', 'Web Designer', 'Animation Designer(GSAP)'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

document.getElementById("download-btn").addEventListener("click", () => {
    window.print();
})

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    if (emailjs) {
        emailjs.init("J3seaIAFcq0yF7t2Z"); // Replace with your Public Key
    } else {
        console.error("EmailJS not loaded properly.");
        return;
    }

    // Ensure the contact form exists before adding event listener
    const form = document.querySelector("#contact-form");
    if (!form) {
        console.error("Error: Form with class 'contact-form' not found.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        const nameInput = document.querySelector("input[name='name']");
        const emailInput = document.querySelector("input[name='email']");
        const messageInput = document.querySelector("textarea[name='message']");

        if (!nameInput || !emailInput || !messageInput) {
            console.error("Error: One or more input fields are missing.");
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            console.error("Error: All fields are required.");
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_vl71dzo", "template_2cx26vc", {
            to_name: "Recipient Name",  // You can replace this with dynamic data if needed
            from_name: name,
            message: message,
            reply_to: email // Allows users to reply to the sender's email
        })
        .then(response => {
            console.log("Email sent successfully!", response);
            alert("Your message has been sent successfully!");
            form.reset(); // Clear form fields after successful submission
        })
        .catch(error => {
            console.error("Error sending email:", error);
            alert("Failed to send the message. Please try again later.");
        });
    });
});


