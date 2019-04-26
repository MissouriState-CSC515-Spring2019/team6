'use strict';

require('babel-polyfill'); // needed for babel 6
import { formatURL } from './utility.js';

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
    catch {
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
    //needs to be sent through translater
    return param
}
