'use strict';

const fs = require('hexo-fs');

function webpProcess(htmlContent) {
    return htmlContent.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (str, p1, p2) {
        if (/https:\/\/cdn.jsdelivr.net\/gh\/donggangcj\/CDN\/image\/(.*?)\.(jpg|jpeg|png)/gi.test(p2)) {
            return `<picture><source srcset="${p2.replace(/\.(jpg|jpeg|png)/gi, '.webp')}" type="image/webp">${str}</picture>`;
        }
        return str;
    });  
}

module.exports.webpProcess = function (htmlContent) {
    return webpProcess.call(this, htmlContent);
}



