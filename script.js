console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░  ░▒▓█▓▒░▒▓███████▓▒░       ░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ ")
console.log(" ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░       ░▒▓█▓▒▒▓█▓▒░  ")
console.log(" ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░  ░▒▓█▓▒▒▓█▓▒░  ")
console.log("  ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░   ")
console.log("  ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░   ")
console.log("   ░▒▓██▓▒░  ░▒▓████████▓▒░  ░▒▓█▓▒░▒▓███████▓▒░░▒▓██▓▒░▒▓███████▓▒░░▒▓████████▓▒░  ░▒▓██▓▒░    ")
console.log("Ok, you a real real nerd")
console.log("Imagine being good at javascript... Now go out and touch some grass for the both of us.")

var txt = "I am v01d, welcome to my website";
var speed = 100;
var i = 0;
var el = document.getElementById("typing");

function typeWriter() {
    if (i < txt.length) {
        el.textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// The <h1> ships with this text already in it, so crawlers and no-JS visitors
// get a real heading instead of an empty one. Clear it and type it back out.
// This script is deferred, so the DOM is already parsed here — no need to wait
// for DOMContentLoaded, which would let the full text flash on screen first.
el.textContent = "";
typeWriter();
