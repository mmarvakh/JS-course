"use strict";

const divBlock = document.createElement("div");
divBlock.style.width = "100px";
divBlock.style.height = "100px";
divBlock.style.background = "yellow";
divBlock.style.position = "relative";

let count = 0,
    animate;

const parent = document.body;
parent.appendChild(divBlock);

let button = document.createElement("button"),
    reset = document.createElement("button");
button.style.height = "40px";
button.style.width = "60px";
button.style.background = "black";
parent.appendChild(button);

reset.style.height = "40px";
reset.style.width = "60px";
reset.style.background = "red";
reset.style.color = "white";
reset.textContent = "reset";
parent.appendChild(reset);

let Animate = function () {
    animate = requestAnimationFrame(Animate);
    count++;
    if (count < 350) {
        divBlock.style.left = count * 2 + "px";
    } else {
        cancelAnimationFrame(animate);
    }
}

let animation = false;

button.addEventListener("click", function () {
    if (animation) {
        animate = requestAnimationFrame(Animate);
        animation = false;
    } else {
        animation = true;
        cancelAnimationFrame(animate);
    }
});

reset.addEventListener("click", function () {
    divBlock.style.left = 0;
    count = 0;
})