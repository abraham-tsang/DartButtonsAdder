const fs = require('fs');

var translations = [];
translations.push(fs.readFileSync('sv-en.txt', {encoding: 'utf8'}));
translations.push(fs.readFileSync('ja-en.txt', {encoding: 'utf8'}));
translations.push(fs.readFileSync('pt-en.txt', {encoding: 'utf8'}));
translations.push(fs.readFileSync('ch-en.txt', {encoding: 'utf8'}));

console.log(translations)
