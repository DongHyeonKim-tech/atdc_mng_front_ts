import axios from 'axios';
import jwt_decode from 'jwt-decode';

const client = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_HOST,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
});

const Authorization = () => {
    console.log('client authorization');
    try {
        const token = JSON.parse(localStorage.getItem('user') as string).access;
        return `Bearer ${token}`;
    } catch (e) {
        return '';
    }
};

client.defaults.headers.common['Authorization'] = Authorization();

client.interceptors.request.use(
    async (config: any) => {
        const userToken = JSON.parse(localStorage.getItem('user') as string);
        if (userToken) {
            config.headers.Authorization = `Bearer ${userToken.access}`;

            const token : {exp: number} = jwt_decode(userToken.access);

            if (token.exp < Date.now() / 1000) {
                localStorage.removeItem('user');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.location = '/';
            }
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default client;
