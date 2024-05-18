const timeToMinutes = (tiempo: string) => {
	const cantidad = parseInt(tiempo);
	const unidad = tiempo.slice(-1);

	let minutos;

	switch (unidad) {
		case 'm':
			minutos = cantidad;
			break;
		case 'h':
			minutos = cantidad * 60;
			break;
		case 'd':
			minutos = cantidad * 24 * 60;
			break;
		default:
			throw new Error('Unidad de tiempo no reconocida');
	}

	return minutos;
};

export { timeToMinutes };
