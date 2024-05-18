import { Request, Response, NextFunction } from 'express';
import { TokenPayload } from '../interfaces/TokenPayload';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import dotenv from 'dotenv';
import { InvalidToken } from '@/exceptions';

dotenv.config();

const Auth = (req: Request, res: Response, next: NextFunction) => {
	// Verificar que el token de acceso exista en las cabeceras y el token de refrescamiento en las cookies
	const token = req.headers.authorization?.split(' ')[1];
	const refreshToken = req.cookies.refreshToken;
	if (!token || !refreshToken) {
		return res.status(401).json({ message: 'No token provided' });
	}
	// Leer la llave pública
	const publicKey = fs.readFileSync(process.env.JWT_PUBLIC_KEY as string, 'utf-8');

	try {
		// Verificar que el token de acceso sea válido
		const payloadToken = jwt.verify(token, publicKey, { algorithms: ['RS256'] }) as TokenPayload;
		// Verificar que el token de refrescamiento sea válido
		const payloadRefreshToken = jwt.verify(refreshToken, publicKey, { algorithms: ['RS256'] }) as TokenPayload;

		// Verifica que la ip de la petición sea la misma que la del token
		if (payloadToken.ip !== req.ip || payloadRefreshToken.ip !== req.ip) {
			throw new InvalidToken('Invalid token');
		}

		// Enviar los datos al controlador
		req.body.user = payloadToken;

		next();
	} catch (error: unknown) {
		return res.status(401).json({ message: 'Invalid token' });
	}
};

export default Auth;
