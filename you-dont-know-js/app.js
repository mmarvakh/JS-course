"use strict";

let procedure = document.querySelectorAll(".books"),
    elements =  document.querySelectorAll(".book");

procedure[0].insertBefore(elements[1], elements[0]);
procedure[0].insertBefore(elements[4], elements[2]);
procedure[0].insertBefore(elements[3], elements[2]);
procedure[0].insertBefore(elements[5], elements[2]);

let back = document.querySelector("body");

back.setAttribute("style", "background-image: url(./image/you-dont-know-js.jpg)")

let changeHead = document.getElementsByTagName("h2")[2];
changeHead.textContent = "Книга 3. this и Прототипы Объектов";

changeHead.setAttribute("style", "color: darkkhaki");

back.children[2].remove();

let procedureInside = document.getElementsByTagName("ul"); // 1 и 4 / 5

let child_5 = procedureInside[1].children[4],
    child_7 = procedureInside[1].children[6],
    child_8 = procedureInside[1].children[8],
    child_4 = procedureInside[1].children[4],
    child_2 = procedureInside[1].children[2],
   child_10 = procedureInside[1].children[10];


procedureInside[1].insertBefore(child_7, child_5);
procedureInside[1].insertBefore(child_8, child_4);
procedureInside[1].insertBefore(child_2, child_10);

let child_1_9 = procedureInside[4].children[9],
    child_1_2 = procedureInside[4].children[2],
    child_1_3 = procedureInside[4].children[3],
    child_1_4 = procedureInside[4].children[4],
    child_1_5 = procedureInside[4].children[5],
    child_1_8 = procedureInside[4].children[8];


procedureInside[4].insertBefore(child_1_9, child_1_2);
procedureInside[4].insertBefore(child_1_3, child_1_2);
procedureInside[4].insertBefore(child_1_4, child_1_2);
procedureInside[4].insertBefore(child_1_5, child_1_8);

let newChapter = document.createElement("li");

newChapter.textContent = "Глава 8: За пределами ES6";

procedureInside[5].appendChild(newChapter);

procedureInside[5].insertBefore(procedureInside[5].children[10], procedureInside[5].children[9]);




