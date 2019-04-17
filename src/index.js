'use strict';

// replace spaces with '+'
let formatParam = function (param) {
    let string = param.replace(/ /g, "+");
    return string;
}

// call DuckDuckGo API
async function search(param) {
    let search = formatParam(param)
    let data;
    let url = 'https://api.duckduckgo.com/?q=' + search + '&format=json';
    try {
        let response = await fetch(url);
        if (!response.ok)
            throw new Error(response.statusText);
        data = await response.json()
    }
    catch {
        throw new Error('Catch Block Reached');
    }

    return data;
}

// grab param from input text, get param result and append it to result-div
let button = document.getElementById('search-button');
button.addEventListener('click', () => {
    let param = document.getElementById('search-param').value;
    console.log(param)
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
