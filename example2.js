var someInt = 123; // integer
var someFloat = 3.14; // float
var someText = 'foo'; // string, labak izmantot
var someText2 = "bar" + someText; // string (konkatinacija)
var someText3 = `asdfs
asdf
asdf
asdf
df ${someText}`; // string (konkatinacija)(so var parnest jauna rinda,tikai ar `)
let foo = 132; // tikai ES6!!! LET mainigie pieejami tikai taja bloka, kur ir defineti
const bar = 321; // tikai ES6, konstantes

var someTrue = false; // bool
var someNothing = null; // null
var someNothing2; // ari null
var someThing = true, someThing = false; // vairaki mainigie pec kartas

var cars = ['vaz', 'zaz', 'gaz', 'uaz', 'maz', 'bmw'];// masivus var definet pa vairakam rindam
console.log(cars[2]);
cars.push('124');
console.log(cars);

var person = {
    firstName: 'John',
    lastName: 'Doe', // ja grib sim lastName vel kaut ko pa vidu, piem.tuksumu vai -, tad jaliek pedinas -->'last-Name'
    age: 21,
};

console.log(person.lastName);

var people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 21,
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 31,
    },
];

console.log(people[1].lastName);

// == salidzina vertibas
// != nav vienads

// jebkas tukss ir false --> {}, [], 0, ''.

// === salidzina gan tipus, gan vertibas
// !== 

// var foo = '1';

//  if (!!foo === true) { // dubultais noliegums, string it ka paliek par boolean, 

// if (1 == 1 && (1 == 2 || 1 == 3)) {

// }
// else if (1 == 2) {

// } else {

// }

// var bar = 'a';
// switch (bar) {
//     case 'a':
//         // 1
//         break;
//     case 'b':
//         // 2
//         break;
//     case 'c':
//         // 3
//         break;
//     default:
// 4
//}

// while (true) {

// }

// do {

// } while (false);// sis izpildas vismaz vienu reizi, no sakuma izpilda, pec tam parbauda.

for (var i = 1; i <= 30; i++) { // sim uzdevumam ir ap 50 risinajumi!!!
    var nul = '';
    if (i%2 == 0) {
        nul += 'fizz ';
    }
    if (i%3 == 0) {
        nul += 'bazz ';
    }
    if (i%2 != 0 && i%3 != 0) { //if (nul == '') ja "nul" netiek izmainits, tad pieskir "i" vertibu
        nul += i;               // nul = i
    }
    console.log(nul);
}

// parseInt() konverte attiecigi uz Int
// parseFloat() konverte uz Float
// console.log(parseFloat('3.12asd123')); // konverte 'String' uz 'Float', bus 3.12
console.log(Math.round(3.54)); // standarta apalosana
console.log(Math.ceil(3.14)); // uz augsu 
console.log(Math.floor(3.14)); // uz leju

var now = new Date();
console.log(now);

console.log('log'.length);// dabun stringa garumu
console.log('abcdef'.split('')); // parvers par masivu

function add(var1, var2) {
    return var1 + var2; // nekas, kas ir aiz 'return', vairs neizpildas
}
// Ir 'pure function' un 'side efect function'. 'Side effect' dara pasa ieksa kaut ko uz malu.
console.log(add(5, 10)); // funkcijas var izsaukt pirms vinas ir definetas

var substract = function (var1, var2) { // mainigais ka funkcija
    return var1 - var2;
}


/**
 * 
 * @param {int} var1 //   /** ir JS Document komentars, kas domats pasam kodam
 * @param function var2 
 */
function add2(var1, var2) {
    return var1 + var2();
}
console.log(add2(10, function() { // pie si pieraksta ir japierod. Funkcija funkcijaa.
    return 20;
}));

function checkPalindrome(word) {
    word = word.toLowerCase();
    if (word == word.split('').reverse().join('')) {
        return true;
    }
    return false;
}

console.log(checkPalindrome('AluLa'));
console.log(checkPalindrome('asddsa'));
console.log(checkPalindrome('asdfasdf'));

// rekursiva funkcija izsauc pati sevi