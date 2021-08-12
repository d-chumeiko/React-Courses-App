export const getTokenFromLS = () => localStorage.getItem('token') || '';

export const setTokenToLS = (token) => localStorage.setItem('token', token);

export const removeTokenFromLS = () => localStorage.removeItem('token');
