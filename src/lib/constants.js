export const page_size = 10;
export const placeholder = 'https://static.productionready.io/images/smiley-cyrus.jpg';
export const secretKey = process.env.NODE_ENV === 'production' ? process.env.VITE_SECRET_KEY : import.meta.env.VITE_SECRET_KEY
