const fs = require('fs');
const XLSX = require('xlsx');
const mod = require('./createHeroBanner');

let buf = fs.readFileSync("cadence.xlsx");
let wb = XLSX.read(buf, {type:'buffer'})
let sheetNames = wb.SheetNames;

sheetNames.map((v,i)=> {

let data = XLSX.utils.sheet_to_json(wb.Sheets[sheetNames[i]]);
let firstLtr = v.split(' ')[0][0];
let firstWord = v.split(' ')[0].slice(1);
let restOfWord = v.split(' ').slice(1).join('');
let functionName = firstLtr.toLowerCase() + firstWord + restOfWord + 'Generator';

let genFunction  = mod[functionName];
// console.log(genFunction(data,v));
// console.log(functionName);
console.log(mod.heroBannersGenerator(data,v));

});



