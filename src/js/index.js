'use strict';

require('babel-polyfill'); // needed for babel 6
import { formatURL } from './utility.js';

//YandexTranslator (This translators api was easier to work with than google)
var YandexTranslator = require('yandex.translate');
//need key to use
var yandexTranslateKey = 'trnsl.1.1.20190426T162658Z.7ab6b6406b4b1383.3fd9bb63fbcc62a9b084be2668dba88801722207';
var translator = new YandexTranslator(yandexTranslateKey);

//example of usage
///translator.translate('hello', 'ru').then(console.log);
///translator.detect('hello').then(console.log);



// call DuckDuckGo API with given param
async function search(param) {
    let search = formatURL(param)
    let data;
    let url = 'https://api.duckduckgo.com/?q=' + search + '&format=json';
    try {
        let response = await fetch(url);
        if (!response.ok)
            throw new Error(response.statusText);
        data = await response.json()
    }
    catch(err) {
        throw new Error('Catch Block Reached')
    }

    return data;
}

// grab param from input text, get param result and append it to result-div
let button = document.getElementById('search-button');
button.addEventListener('click', () => {
    let param = document.getElementById('search-param').value;
    search(param)
        .then((data) => {
            let div = document.getElementById('result-div');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            let t = document.createTextNode(JSON.stringify(data));
            div.appendChild(t)
        });
});

//creating translation
let t_button = document.getElementById('translate-button');
t_button.addEventListener('click', () => {
    let param = document.getElementById('tranlater').value;
    //should put info through translater
    translate(param)
        .then((data) => {
            let div = document.getElementById('translation');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            let t = document.createTextNode(JSON.stringify(data));
            div.appendChild(t)
        });


});


//access translater
async function translate(param) {
    //needs to be sent through translate
    //translator.detect(param).then(console.log);
    let data = translator.translate(param, 'ru');
    return data;
}

//select language button(here we need a funtion to add option to select language

//Allows for use of Angular 
var angular = require('angular');
//Creates angular module with no dependencies
var ngModule = angular.module('app', []);
//logs module information in console
console.log(ngModule);
