"use strict";

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from "element-closest";
elementClosest(window);
import "fetch-polyfill";
import "es6-promise";
import "formdata-polyfill";

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";  
import togglePopUp from "./modules/togglePopUp";  
import tabs from "./modules/tabs";  
import slider from "./modules/slider";  
import team from "./modules/team";  
import calc from "./modules/calc";  
import sendForm from "./modules/sendForm";  

// Timer
countTimer("4 august 2019");

// Menu
toggleMenu();

// Popup window
togglePopUp();

// Tabs
tabs();

// Slider
slider();

// Our team block
team();

// Calculator
calc(100);

// send-ajax-form
sendForm();