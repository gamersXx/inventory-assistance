// import apm from 'elastic-apm-node';
// // Add this to the very top of the first file loaded in your app
// apm.start({
// 	serviceName: 'BackendAuth',
// 	serverUrl: 'http://10.16.10.97:8200',
// });

/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import db from './db';
import { json } from 'body-parser';
import routes from './routes';
import helmet from 'helmet';
// import migrations from './migrations';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
const app = express();

app.set('trust proxy', true); // Configurar Express para confiar en los encabezados de proxy
app.use(helmet()); // Security middleware
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Set-Cookie', 'Path=/; HttpOnly; Secure');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
	);

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
}); // CORS
app.use(
	fileUpload({
		limits: { fileSize: 80 * 1024 * 1024 * 1024 }, // 80GB limit
		useTempFiles: true,
		tempFileDir: './tmp/', // Ensure this directory exists and is writable
	})
);
app.use(json()); // Body parser middleware
app.use(cookieParser()); // Cookie parser middleware
app.use('/', routes); // Routes

//migrations
// app.use('/migrations', migrations);
// Error handling middleware

// 404 middleware
app.use((req, res) => {
	res.status(404).json({ errors: ['Page not found'] });
});

db();
const PORT = process.env.INTERNAL_PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
