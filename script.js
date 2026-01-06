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
    // 🎭 PREMIUM GSAP ANIMATIONS
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Magnetic Buttons Effect
        const magneticBtns = document.querySelectorAll('.btn, .nav-btn, .nav-btn1');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
            });
        });

        // Elite Reveal System
        gsap.from("header", { y: -50, opacity: 0, duration: 1, ease: "expo.out" });
        gsap.from(".home-content h1", { y: 50, opacity: 0, duration: 1.2, ease: "expo.out", delay: 0.2 });
        gsap.from(".home-content p", { y: 30, opacity: 0, duration: 1, ease: "power2.out", delay: 0.4 });
        gsap.from(".home-img", { scale: 0.9, opacity: 0, duration: 1.5, ease: "expo.out", delay: 0.3 });

        // Section Titles Architecture
        gsap.utils.toArray('.heading').forEach(heading => {
            gsap.from(heading, {
                opacity: 0,
                y: 40,
                letterSpacing: "10px",
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: { trigger: heading, start: "top 90%" }
            });
        });

        // Staggered Cards with "Weight"
        const revealStagger = (selector, trigger) => {
            gsap.from(selector, {
                opacity: 0,
                y: 60,
                stagger: 0.1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: { trigger: trigger, start: "top 85%" }
            });
        };

        revealStagger(".service-box", ".services-container");
        revealStagger(".portfolio-content .row", ".portfolio-content");
        revealStagger(".tech-item", ".marquee-content");

        // Journey Timeline
        gsap.from(".timeline-container", {
            opacity: 0,
            x: (i) => i % 2 === 0 ? -40 : 40,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: ".timeline", start: "top 75%" }
        });
    }

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("J3seaIAFcq0yF7t2Z");
    }

    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nameInput = document.querySelector("input[name='name']");
            const emailInput = document.querySelector("input[name='email']");
            const messageInput = document.querySelector("textarea[name='message']");

            if (nameInput && emailInput && messageInput) {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const message = messageInput.value.trim();

                if (name && email && message) {
                    emailjs.send("service_vl71dzo", "template_2cx26vc", {
                        from_name: name,
                        message: message,
                        reply_to: email
                    }).then(response => {
                        alert("Your message has been sent successfully! ✅");
                        form.reset();
                    }).catch(error => {
                        alert("Failed to send message. ❌");
                    });
                }
            }
        });
    }

    document.getElementById('theme-toggle').onclick = function () {
        document.body.classList.toggle('light-theme');
        this.innerHTML = document.body.classList.contains('light-theme')
            ? "<i class='bx bx-sun' style='font-size:2rem;color:#B621FE;'></i>"
            : "<i class='bx bx-moon' style='font-size:2rem;color:#00C9FF;'></i>";
    };
});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
});

const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300 && backToTopBtn) {
        backToTopBtn.style.display = 'block';
    } else if (backToTopBtn) {
        backToTopBtn.style.display = 'none';
    }
});
if (backToTopBtn) {
    backToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}
