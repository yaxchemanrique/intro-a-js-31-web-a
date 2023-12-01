let numeroUsuario = prompt("Ingrese un número:");
let numero = parseInt(numeroUsuario);
// let numero = parseFloat(numeroUsuario);

if (numero || numero === 0) {
    console.log(typeof numero);
    if (numero % 2 === 0) {
        console.log(numero + " es par.");
    } else {
        console.log(numero + " es impar.");
    }
} else {
    console.log('Número inválido');
}