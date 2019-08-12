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
import modalOffer from "./modules/modalOffer";
import calculator from "./modules/calculator";
import validation from "./modules/validation";
import ajax from "./modules/ajax";
import sliderPartners from "./modules/sliderPartners";
import sliderReviews from "./modules/sliderReviews";
import modalTrewTime from "./modules/modalTrewTime";

// Переход на следующий слайд по нажатию на кнопку в виде стрелки
scrollToNextPage();

// Плавный переход по нажатию на пункты из меню в header
menuItems();

// Открытие и закрытие модального окна(Техподдержка)
modalSupport();

// Открытие и закрытие модального окна(Оставить заявку)
modalOffer();

// Калькулятор расчета стоимости услуг
calculator();

// Валидация форм
validation();

// Ajax отправка форм
ajax();

// Слайдер с компаниями
sliderPartners();

// Слайдер с отзывами
sliderReviews();

// Открытие модального окна без участия пользователя после 60 секунд
modalTrewTime();