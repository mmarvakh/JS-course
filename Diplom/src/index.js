"use strict";

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from "element-closest";
elementClosest(window);
import "fetch-polyfill";
import "es6-promise";
import "formdata-polyfill";


import scrollToNextPage from "./modules/scrollToNextPage";
import menuItems from "./modules/menuItems";
import modalSupport from "./modules/modalSupport";

// Переход на следующий слайд по нажатию на кнопку в виде стрелки
scrollToNextPage();

// Плавный переход по нажатию на пункты из меню в header
menuItems();

// Открытие и закрытие модального окна(перезвоните мне)
modalSupport();