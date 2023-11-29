
let frutas = [];

let verduras = ["jitomate", "cebolla", "zanahoria", "calabaza", "jitomate"];

console.log(verduras[3].toUpperCase());

let indexOfJitomate = verduras.indexOf("JITOMATE".toLowerCase());

console.log(indexOfJitomate); //Revisar la posición de un elemento en mi arreglo

let contains = verduras.includes("cebolla"); //Retorna true o false en caso de incluir o no el elemento en cuestión

console.log(contains);

console.log(verduras);

let numerosAleatorios = [1,5,7,3,56,8,5,3,3,5,7,9,6,5,3,3,5,6,7,7,34]

console.log(numerosAleatorios.length); //La cantidad de elementos en mi arreglo

console.log(frutas); 

frutas.push("fresa"); //Agregar un elemnto al final

console.log(frutas);

frutas.unshift("naranja"); //Agregar un elemento al inicio

console.log(frutas);

verduras.shift(); //Elimina un elemento al inicio

verduras.pop(); //Elimina un elemento al final

console.log(verduras);

let vehiculos = "avion,coche,moto";

let arregloVehiculos = vehiculos.split(","); //split divide el string en cuestión segun el caracter  que le pasemos

console.log(arregloVehiculos);

let newArray = arregloVehiculos.slice(0,2); //Slice retorna los valores eliminados o seleccionados por los indices

console.log(newArray);

console.log(arregloVehiculos);

let cadena = "Holaaaa";

console.log(cadena.slice(3,6));

console.log(cadena.length);

arregloVehiculos.splice(1,1,"bicicleta","barco");

console.log(arregloVehiculos); //splice modifica el arreglo original incluyendo los elementos segun el indice y borra otros segun el segundo parametro

arregloVehiculos.reverse(); //Reverse invierte el arreglo

console.log(arregloVehiculos);

let verdurasVehiculos = arregloVehiculos.concat(verduras); //Concatena los arreglos que nosotros indiquemos

console.log(verdurasVehiculos);

