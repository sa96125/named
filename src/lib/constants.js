export const secretKey = process.env.NODE_ENV === 'production' ? process.env.VITE_SECRET_KEY : import.meta.env.VITE_SECRET_KEY
export const page_size = 10;