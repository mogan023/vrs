/*=====================================
Venkateswaraa Website
script.js
=====================================*/

/* ==========================
Mobile Navigation
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navbar) navbar.classList.remove("active");
        if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

/* ==========================
Sticky Header
========================== */

const header = document.querySelector(".header");

if (header) window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0d0d0d";

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});

/* ==========================
Reveal Animation
========================== */

const reveals = document.querySelectorAll(

    ".section,.service-card,.stat-card,.contact,.cta"

);

function revealSections() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

/* ==========================
Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================
Active Navigation
========================== */

const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

navLinks.forEach(link => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    link.classList.remove("active");
    if ((currentPage === "index.html" && (href === "index.html" || href === "#home")) || href === currentPage) {
        link.classList.add("active");
    }
});

window.addEventListener("scroll", () => {
    if (currentPage !== "index.html") return;
    let current = "";
    document.querySelectorAll("section[id]").forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 140) current = section.id;
    });
    if (current === "contact") {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#contact"));
    }
});

/* ==========================
Counter Animation
========================== */

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            const suffix = text.replace(number, "");

            let count = 0;

            const speed = Math.max(10, number / 60);

            const update = () => {

                if (count < number) {

                    count += speed;

                    counter.innerText =
                        Math.ceil(count) + suffix;

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText =
                        number + suffix;

                }

            };

            update();

        });

    }

});

/* ==========================
Back To Top Button
========================== */

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#d4af37";
topButton.style.color = "#111";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================
Scroll Progress Bar
========================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

progress.style.position = "fixed";
progress.style.left = "0";
progress.style.top = "0";
progress.style.height = "4px";
progress.style.background = "#d4af37";
progress.style.width = "0";
progress.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

/* ==========================
Typewriter Effect
========================== */

const heroTitle = document.querySelector(".hero-left h2");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typeWriter, 70);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typeWriter, 600);

    });

}

/* ==========================
Image Hover Rotation
========================== */

const founderImage = document.querySelector(".hero-right img");

if (founderImage) {

    founderImage.addEventListener("mousemove", (e) => {

        const rect = founderImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 25;
        const rotateX = (rect.height / 2 - y) / 25;

        founderImage.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    founderImage.addEventListener("mouseleave", () => {

        founderImage.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

}

/* ==========================
Console Message
========================== */

console.log(
    "%cWelcome to Sree Venkateswaraa Regular Service",
    "color:#d4af37;font-size:18px;font-weight:bold;"
);

console.log(
    "%cDesigned with ❤️ using HTML, CSS & JavaScript",
    "color:white;font-size:14px;"
);