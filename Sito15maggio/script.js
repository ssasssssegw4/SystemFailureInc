
/*
========================================
BOOT TERMINAL (NO GLITCH)
========================================
*/

const terminal = document.getElementById("terminal-text");
const bootScreen = document.getElementById("boot-screen");


const lines = [
    "[ 0.000 ] Boot sequence initiated",
    "[ 0.120 ] Kernel loading",
    "[ 0.310 ] Memory check OK",
    "[ 0.520 ] CPU online",
    "[ 0.740 ] Filesystem mounted",
    "[ 1.020 ] Services starting",
    "[ 1.600 ] Network ready",
    "[ 2.500 ] UI framework loading",
    "[ 3.600 ] Final checks",
    "[ 4.800 ] System ready"
];

let i = 0;
const STEP = 5000 / lines.length;


/* BOOT */

function boot() {

    if (i >= lines.length) {
        setTimeout(blackScreen, 200);
        return;
    }

    const line = document.createElement("div");
    line.textContent = lines[i];

    terminal.appendChild(line);

    i++;

    setTimeout(boot, STEP);
}


/* BLACK SCREEN 1s */

function blackScreen() {

    bootScreen.style.display = "none";

    const black = document.createElement("div");
    black.id = "black-screen";
    document.body.appendChild(black);

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
}


/* START */

boot();