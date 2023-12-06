/* // Scope global

const firstName = 'Yaxche';

console.log(isMillennial)

if (10 > 9) {
    // console.log(firstName);
    const lastName = 'Manrique';
    // console.log(lastName);

    //scope global
    var isMillennial = true;
    console.log(isMillennial);
}

console.log(isMillennial)

// console.log(lastName)

function myFunction() {
    const age = 30;
    // ?  ✅
    console.log(age);
}

// ? ✅
myFunction();

// ? 🚫
// console.log(age); */

/* const firstName = 'Yaxche';
firstName = 'Diego'; */
// 🚫 Uncaught TypeError: Assignment to constant variable.

/* let firstName = 'Yaxche';
console.log(firstName)

firstName = 'Diego';
console.log(firstName) */

/* let firstName = 'Yaxche';
console.log(firstName)

let firstName = 'Diego';
console.log(firstName) 

🚫  Uncaught SyntaxError: Identifier 'firstName' has already been declared
*/
// otra razón por la que NO nos gusta var!!
var firstName = 'Yaxche';
console.log(firstName);

var firstName = 'Diego';
console.log(firstName);

const arr = [1, 2, 3, 4];
console.log(arr);
// arr = [1, 2, 3, 4, 5];
arr.push(5);
console.log(arr);