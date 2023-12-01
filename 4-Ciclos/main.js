
/*let i = 0;

while (i<=10) {
    console.log(i);
    i++;
}*/

/*let respuesta;

let array = [];

do {
    if (respuesta){
        array.push(respuesta);
    }
    respuesta = prompt("Escriba algo más o escriba esc para salir");
} while (respuesta !== "esc");

console.log(array)*/

let pokemons = ["Pikachu", "Charmander", "Perrito"];
let numerosAleatorios = [1,5,7,3,56,8,5,3,3,5,7,9,6,5,3,3,5,6,7,7,34]
let resultado = 0;

for (let i = 0; i < numerosAleatorios.length; i++) {
    resultado = resultado + numerosAleatorios[i];
}

console.log(resultado);

for (let i = 10; i >= 0; i-=2) {
    console.log(i);
}

for (let i = pokemons.length - 1; i >= 0; i--){
    console.log(pokemons[i]);
}