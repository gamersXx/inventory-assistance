import english from './en.json';
import spanish from './ve.json';
// import { store } from '@/stores/config';

const LANGUAGES = {
	ENGLISH: 'en',
	SPANISH: 've',
};

export const getI18N = () => {
	const currentLocale = 'es'//store.language;
	if (currentLocale === LANGUAGES.ENGLISH) return english;
	if (currentLocale === LANGUAGES.SPANISH) return spanish;
	return spanish;
};
