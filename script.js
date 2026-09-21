/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".typing");


const words = [
    "Full Stack Developer",
    "UI/UX Designer"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );
}


typeEffect();


/* =========================================================
   FLOATING PARTICLES
========================================================= */

const particleContainer =
    document.getElementById("particles");


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        Math.random() * -20 + "s";

    particle.style.opacity =
        0.2 + Math.random() * 0.7;

    particleContainer.appendChild(
        particle
    );
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .certificate-card, .experience-card, .contact-item"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   PROJECT 3D TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;


            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   HERO 3D MOUSE PARALLAX
========================================================= */

const scene =
    document.querySelector(".scene");


document.addEventListener(
    "mousemove",
    event => {

        if (!scene || window.innerWidth < 900) {
            return;
        }


        const x =
            (event.clientX / window.innerWidth - 0.5);


        const y =
            (event.clientY / window.innerHeight - 0.5);


        scene.style.transform =
            `
            rotateX(${y * -8}deg)
            rotateY(${x * 10}deg)
            `;
    }
);


/* =========================================================
   SKILL NODE INTERACTION
========================================================= */

const skillNodes =
    document.querySelectorAll(
        ".skill-node"
    );


skillNodes.forEach(node => {

    node.addEventListener(
        "mouseenter",
        () => {

            node.style.zIndex = "50";

        }
    );


    node.addEventListener(
        "mouseleave",
        () => {

            node.style.zIndex = "10";

        }
    );

});


/* =========================================================
   BACK TO TOP
========================================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CONTACT MAILBOX PARTICLE EFFECT
========================================================= */

const mailbox =
    document.querySelector(".mailbox");


mailbox.addEventListener(
    "click",
    () => {

        for (let i = 0; i < 15; i++) {

            const particle =
                document.createElement("span");

            particle.style.position =
                "fixed";

            particle.style.left =
                mailbox.getBoundingClientRect().left +
                120 +
                "px";

            particle.style.top =
                mailbox.getBoundingClientRect().top +
                80 +
                "px";

            particle.style.width =
                "5px";

            particle.style.height =
                "5px";

            particle.style.borderRadius =
                "50%";

            particle.style.background =
                i % 2 === 0
                    ? "#00f5ff"
                    : "#9b5cff";

            particle.style.boxShadow =
                "0 0 12px currentColor";

            particle.style.pointerEvents =
                "none";

            particle.style.zIndex =
                "9999";

            document.body.appendChild(
                particle
            );


            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                50 + Math.random() * 100;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            particle.animate(
                [
                    {
                        transform:
                            "translate(0,0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${x}px, ${y}px)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        600 + Math.random() * 500,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }
            );


            setTimeout(
                () => particle.remove(),
                1200
            );

        }

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
`
╔══════════════════════════════════╗
║      THOUFEEK T PORTFOLIO        ║
║                                  ║
║  Full Stack Developer            ║
║  UI/UX Designer                  ║
║  Computer Science Student        ║
║                                  ║
║  Welcome to my digital world 🚀  ║
╚══════════════════════════════════╝
`
);