let color = prompt('De qué colo es el semáforo?');

if(color === 'verde') {
    console.log('Puedes avanzar');
} else if( color === 'amarillo') {
    console.log('Pasale mas rápido');
} else if( color === 'rojo'){
    console.log('Detente!');
} else {
    console.log('ese no es un color válido!')
}

