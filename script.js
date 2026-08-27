/* ======================================
   BARRE DE PROGRESSION
====================================== */

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / pageHeight) * 100;

    progress.style.width = percentage + "%";

});


/* ======================================
   ANIMATION DES SECTIONS
====================================== */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach((element) => {

    observer.observe(element);

});


/* ======================================
   ANIMATION DES CARTES DU HERO
====================================== */

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    card.animate(

        [
            {
                transform: "translateY(0px)"
            },

            {
                transform: "translateY(-10px)"
            },

            {
                transform: "translateY(0px)"
            }
        ],

        {
            duration: 3000 + index * 500,

            iterations: Infinity,

            easing: "ease-in-out"
        }

    );

});


/* ======================================
   EFFET PARALLAXE LÉGER
====================================== */

const visual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

    if (!visual) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 80;

    const y =
        (window.innerHeight / 2 - event.clientY) / 80;

    visual.style.transform =
        `translate(${x}px, ${y}px)`;

});