/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;


// a = 12, b = 22,c = 81
// 81 + 22 + 13 * 21 - 22 * 13 + 12
console.log(++a + +b++ + +c++ - +a++); // 100  تمام a = 12 , b = 21 , c = 81
console.log(++a + -b + +c++ - -a++ + +a); // 100 تمام a = 14 , b = 21 , c = 82
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1); // 100 تمام a = 12 , b = 22, c = 81




/*
    [++a] [+]
    [++a]
    - Value:
    - Explain:
    [+]
    - Explain:
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(); // 173