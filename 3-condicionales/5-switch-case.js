let day = 'lunes';

// day === 'lunes'
// day === 1 ? -> FALSE
switch (day) {
	case 'lunes':
		{
			console.log('Sumergirme en mi propia miseria');
			break;
		}
	case 'martes':
		console.log('Contemplar el abismo');
		break;
	case 'miercoles':
		console.log('Resolver el hambruna mundial');
		break;
	case 'jueves':
	case 'viernes':
	case 'sabado':
		console.log('Danza y ejercicio');
		break;
	case 'domingo':
		console.log('cena conmigo mismo');
		break;
	default:
		console.log('Ese no es un día de la semana');
}

console.log('Fin del codigo')