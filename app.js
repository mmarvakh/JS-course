"use strict";

document.addEventListener("DOMContentLoaded", function () {

let block;
let parent;

function DomElement (selector, height, width, bg, fontSize, margin, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.margin = margin;
    this.position = position;
}

DomElement.prototype.create = function () {
        if (this.selector[0] === ".") {
            block = document.createElement("div");
            block.className = this.selector.slice(1);
            block.style.cssText = `height: ${this.height}px; 
            width: ${this.width}px; 
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            margin: auto auto;
            position: absolute;`;
            block.textContent = this.selector.slice(1);
            parent = document.body;
            parent.appendChild(block);
        } 
        if (this.selector[0] === "#") {
            block = document.createElement("p");
            block.className = this.selector.slice(1);
            block.style.cssText = `${"height:" + this.height + ";"} \
            ${"width:" + this.width + ";"} \
            ${"background-color:" + this.bg + ";"} \
            ${"font-size:" + this.fontSize + ";"}`;
            block.textContent = this.selector.slice(1);
            parent = document.body;
            parent.appendChild(block);
        }
    };

let DomElementChild = new DomElement(".jija", 100, 100, "green", "16px");
console.log(DomElementChild);
DomElementChild.create();

let top = 0,
    left = 0,
    right = 0,
    bottom = 0;

document.onkeydown = function (event) {
    if (event.key === "ArrowRight") {
        block.style.left = left + "px";
        left += 10;
    }
    if (event.key === "ArrowDown") {
        block.style.top = top + "px";
        top += 10;
    }
    if (event.key === "ArrowUp") {
        block.style.bottom = bottom + "px";
        bottom +=10;
    }
    if (event.key === "ArrowLeft") {
        block.style.right = right + "px";
        right += 10;
    }
};
});