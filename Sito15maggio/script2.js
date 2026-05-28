
/*
========================================
HOME GLITCH SYSTEM
- Initial micro anomaly (startup)
- Periodic subtle glitch (random)
========================================
*/

window.addEventListener("load", () => {

    const overlay = document.getElementById("edge-glitch");
    if (!overlay) return;

    /* ==================================================
       1. GLITCH INIZIALE (startup anomaly - 0.6s)
    ================================================== */

    function initialGlitch() {

        const start = performance.now();
        const duration = 600;

        function frame(t) {

            const e = t - start;
            const k = 1 - e / duration;

            if (e >= duration) {

                overlay.style.opacity = "0";
                document.body.style.transform = "none";
                document.body.style.filter = "none";
                document.body.style.letterSpacing = "normal";

                return;
            }

            const drift = (Math.random() - 0.5) * 1.2 * k;

            document.body.style.transform =
                `translate(${drift}px, ${drift}px)`;

            document.body.style.filter =
                `contrast(${1 + 0.05 * k})`;

            document.body.style.letterSpacing =
                `${(Math.random() - 0.5) * 0.25 * k}px`;

            overlay.style.opacity = k * 0.4;

            overlay.style.background = `
                linear-gradient(to right,
                    rgba(0,0,0,0.85) 0%,
                    transparent 50%,
                    rgba(0,0,0,0.85) 100%),

                linear-gradient(to bottom,
                    rgba(0,0,0,0.65) 0%,
                    transparent 50%,
                    rgba(0,0,0,0.65) 100%)
            `;

            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    }


    /* ==================================================
       2. GLITCH PERIODICO (12–25s)
    ================================================== */

    function runGlitch() {

        const start = performance.now();
        const duration = 650;

        function frame(t) {

            const e = t - start;
            const k = 1 - e / duration;

            if (e >= duration) {

                overlay.style.opacity = "0";
                document.body.style.transform = "none";
                document.body.style.filter = "none";
                document.body.style.letterSpacing = "normal";

                return;
            }

            const drift = (Math.random() - 0.5) * 0.5 * k;

            document.body.style.transform =
                `translate(${drift}px, ${drift}px)`;

            document.body.style.filter =
                `contrast(${1 + 0.03 * k})`;

            document.body.style.letterSpacing =
                `${(Math.random() - 0.5) * 0.2 * k}px`;

            overlay.style.opacity = k * 0.3;

            overlay.style.background = `
                linear-gradient(to right,
                    rgba(0,0,0,0.85) 0%,
                    transparent 50%,
                    rgba(0,0,0,0.85) 100%),

                linear-gradient(to bottom,
                    rgba(0,0,0,0.6) 0%,
                    transparent 50%,
                    rgba(0,0,0,0.6) 100%)
            `;

            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    }


    function scheduleNext() {

        const delay = 12000 + Math.random() * 13000;

        setTimeout(() => {
            runGlitch();
            scheduleNext();
        }, delay);
    }


    /* ==================================================
       START SEQUENCE
    ================================================== */

    initialGlitch();
    scheduleNext();
});

















/* CARD */
const cards = document.querySelectorAll(".card, .cardd-reverse, .showroom, .cardhorror");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

cards.forEach(card => observer.observe(card));