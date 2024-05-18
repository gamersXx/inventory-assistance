import db from '../db';

const seed = async () => {
	try {
		console.log('Seeding...');
		db();
	} catch (error) {
		console.log(error);
	}
	console.log('Seeding completed.');
	return process.exit(0);
};
seed();
