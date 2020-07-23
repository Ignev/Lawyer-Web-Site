// Imports
import for_each from 'core-js/features/array/for-each';
import form from "./form";
import popup from "./popup";
import slider from "./slider";
import maps from "./maps";

// Call functions

window.addEventListener('DOMContentLoaded', () => {
    form();
    popup('.btn', '.popup', '.popup__close', '.popup__inner');
    slider();
    maps();
});