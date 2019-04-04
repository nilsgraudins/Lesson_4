var someInt = 123; // integer
var someFloat = 3.14;
var someText = 'foo';// jaizmanto single quots
var someText2 = "bar";
var someText3 = `asdf ${someText3}`; // tikai ES6, var savienot divus mainigos
console.log(someText3);
let foo = 123; // ari ES6, pieejams tikai blokaa
const bar = 321; // nevar mainit
var someTrue = false; // bool
var someNothing = null; // nulle, nav vertibas
var something;// ir null
something = true; // var rakstit mainigos bez var, vienu zem otra
var cars = ['vaz', 'zaz', 'gaz', 'maz']; // masivs
// mainot vertibu, norada tikai nosaukumu
console.log(cars[2]);
cars.push(123);
console.log(cars);
// objekti
var person = {
    firstName: 'John',
    lastName: 'Doe',
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
        age: 32,
    },
];

console.log(people[1]['firstName']);

// +
// -
// *
// /
// %
// console.log(1 + 1);

// ==
// !=
// <
// >
// <=
// >=

// ===
// !==

// 1 == '1' // true
// '' == false // true
// 0 == false // true
// [] == false // true
// {} == false // true

// 1 === '1' // false
// 1 != '1' // false
// 1 !== '1' // true

// var foo = '1';
// if (!!foo === true) {

// } else if (1 == 2) {

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
//         // 4
// }

// while (true) {

// }

// do {

// }while(false);

// for(var i = 0; i < 10; i++) {
// console.log(i);
// }

// ja skaitlis dalās bez atlikuma ar 2  => fizz
// ja skaitlis dalās bez atlikuma ar 3 => bazz
// ja nedalās bez atlikuma ar nevienu => skaitlis
// līdz 50

// for (var i =1; i < 51; i++){
//     if (i%2==0 && i%3!=0){
//         Console("fizz");
//     }else if(i%2!=0 && i%3==0){
//         Console("bazz");
//     }else if(i%2==0 && i%3==0 ){
//         Console("fizzbazz")
//     }else if(i%2!=0 && i%3!=0) {
//         Console(i);    }
// }

// function Console(value) {
//     console.log(value);
// }

for (var i = 1; i < 51; i++) {
    if (i % 2 == 0 && i % 3 != 0) {
        Console("fizz");
    } if (i % 2 != 0 && i % 3 == 0) {
        Console("bazz");
    } if (i % 2 == 0 && i % 3 == 0) {
        Console("fizzbazz")
    } if (i % 2 != 0 && i % 3 != 0) {
        Console(i);
    }
}

function Console(value) {
    console.log(value);
}

// parseInt() konverte
// parseFloat()
// console.log(parseFloat('3.12asdf123'));
console.log(Math.round(3.14));
console.log(Math.ceil(3.14));
console.log(Math.floor(3.14));

var now = new Date(); // datums bus vajadzigs gala darbaa

// 2037.gada pasaules gals, jo beidzas pasaules datoru laiks. 

console.log('janis, anna, peteris'.split(','));

function add(var1, var2) {
    return var1 + var2; // aiz return nekas vairs neizpildaas
}
console.log(add(5, 10));

var subtract = function (var1, var2) {
    return var1 - var2;
}

function add2 (var1, var2){
    return var1 + var2();
}
console.log(add2(10, function(){
return 20;
 }))// interesanti sadalas iekavas. Padodam funkciju funkcijaa

/** // datora komentars. ar //** un enter
 * 
 */

function checkPalindrom(word1) {


    var reverseWord = word1.split("").reverse().join("")

    if (word1.toLowerCase().replace(" ", "") == reverseWord.toLowerCase().replace(" ", "")) {
        return 'true';
    } else {
        return 'false';
    }
}


console.log(checkPalindrom('A nna'));

// refresh ar ctrl + shift + r

// konsole rakstot window un document palidz redzet papildus info