const bytesToReadable = (
	bytes: number,
	convert: 'Bytes' | 'KB' | 'MB' | 'GB' | 'TB'
): string => {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	const unitIndex = units.indexOf(convert);

	if (unitIndex === -1) {
		throw new Error('Invalid conversion unit');
	}

	// Convert bytes to the specified unit
	const convertedValue = bytes / Math.pow(1024, unitIndex);

	// Format the result to two decimal places
	return `${convertedValue.toFixed(2)} ${convert}`;
};

export default bytesToReadable;
