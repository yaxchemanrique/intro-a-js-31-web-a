// Declaración son "oraciones completas"
// let j = 0;

// Expresiones son palabras

//let 
// j

/* function juiceMaker(fruta1, fruta2) {
    console.log(`Aqui está tu jugo de ${fruta1} y ${fruta2}`);
}

juiceMaker('naranja', 'zanahoria');
juiceMaker('toronja', 'fresa'); */

/* const retirementAge = 65;

let age = 30;
const yearsUntilRetirement = retirementAge - age;

console.log(`Te hacen falta ${yearsUntilRetirement} años`)

let diegoAge = 22;
const retirementDiego = retirementAge - diegoAge;
console.log(`Te hacen falta ${retirementDiego} años`) */
/*
const retirementAge = 65;
function calcRetirementYears(age) {
    const yearsUntilRetirement = retirementAge - age;
    console.log(`${age}: Te faltan ${yearsUntilRetirement} años`)
}

// calcRetirementYears(30)
// calcRetirementYears(20)
// calcRetirementYears(25)

const ages = [30, 20, 25, 54, 34, 39, 16, 19];
// calcRetirementYears(ages[0]);
// calcRetirementYears(ages[1]);
// calcRetirementYears(ages[2]);
// calcRetirementYears(ages[3]);

for (let i = 0; i < ages.length; i++) {
    calcRetirementYears(ages[i]);
}*/

const retirementAge = 65;
const currentYear = 2023;

function calcAge(birthYear) {
    const age = currentYear - birthYear;
    return age;
}

function calcRetirementYears(birthYear) {
    const age = calcAge(birthYear)
    const yearsUntilRetirement = retirementAge - age;
    console.log(`${age}: Te faltan ${yearsUntilRetirement} años`)
}

calcRetirementYears(1993);
calcRetirementYears(1950);
calcRetirementYears(2005);
calcRetirementYears(2012);