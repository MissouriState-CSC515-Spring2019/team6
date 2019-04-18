'use strict';

// replace spaces with '+'
export function formatURL(param) {
    return param.replace(/ /g, "+");;
}