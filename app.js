"use strict";

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
            block.style.cssText = "height: 100px; \
            width: 100px; \
            background-color: yellow; \
            font-size: 16px;";
            parent = document.body;
            parent.appendChild(block);
        } else if (this.selector[0] === "#") {
            block = document.createElement("p");
            block.className = this.selector.slice(1);
            block.cssText = "height: 100px; \
            width: 100px; \
            background-color: yellow; \
            font-size: 16px;";
            parent = document.body;
            parent.appendChild(block);
        }
    };

let DomElementChild = new DomElement(".Лиса");
console.log(DomElementChild);
DomElementChild.create();