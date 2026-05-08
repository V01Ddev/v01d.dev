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

document.addEventListener('DOMContentLoaded', typeWriter);
