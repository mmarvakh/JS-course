"use strict";

document.addEventListener("DOMContentLoaded", function () {

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
        let block;
        let parent;
        if (this.selector[0] === ".") {
            block = document.createElement("div");
            block.className = this.selector.slice(1);
            block.style.cssText = `${"height:" + this.height + ";"} \
            ${"width:" + this.width + ";"} \
            ${"background-color:" + this.bg + ";"} \
            ${"font-size:" + this.fontSize + ";"}`;
            block.textContent = this.selector;
            parent = document.body;
            parent.style.cssText = "margin: 0 \
            height: 500px; \
            width: 500px;";
            parent.appendChild(block);
        } else if (this.selector[0] === "#") {
            block = document.createElement("p");
            block.className = this.selector.slice(1);
            block.cssText = `${"height:" + this.height + ";"} \
            ${"width:" + this.width + ";"} \
            ${"background-color:" + this.bg + ";"} \
            ${"font-size:" + this.fontSize + ";"}`;
            block.textContent = this.selector;
            parent = document.body;
            parent.appendChild(block);
        }
    };

let DomElementChild = new DomElement(".Лиса", 100, 100, "yellow", "16px");
console.log(DomElementChild);
DomElementChild.create();

let blockMove = document.getElementsByTagName("div")[0];
let top = 0,
    left = 0,
    right = 0,
    bottom = 0;

document.onkeydown = function (event) {
    if (event.key === "ArrowRight") {
        blockMove.style.left = left + "px";
        left += 10;
    }
    if (event.key === "ArrowDown") {
        blockMove.style.top = top + "px";
        top += 10;
    }
    if (event.key === "ArrowUp") {
        blockMove.style.bottom = bottom + "px";
        bottom +=10;
    }
    if (event.key === "ArrowLeft") {
        blockMove.style.right = right + "px";
        right += 10;
    }
};
});