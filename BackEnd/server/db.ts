import mongoose from 'mongoose';
import config from './config';

const databaseUri = config.databaseUri;

const connectDB = async () => {
	try {
		await mongoose.connect(databaseUri, {});
		console.log('MongoDB connected');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
};

export default connectDB;
