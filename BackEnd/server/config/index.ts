import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const config = {
	port: process.env.PORT || 3000,
	databaseUri: process.env.DATABASE_URI || 'mongodb://localhost:27017',
	jwt: {
		privateKey: fs.readFileSync(process.env.JWT_PRIVATE_KEY as string, 'utf-8'),
		publicKey: fs.readFileSync(process.env.JWT_PUBLIC_KEY as string, 'utf-8'),
		passphrase: process.env.JWT_PASSPHRASE,
		expireSession: process.env.JWT_EXPIRE_SESSION || '5m',
	},
};

export default config;
