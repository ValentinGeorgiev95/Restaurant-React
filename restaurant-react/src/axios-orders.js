import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://valentino-restaurant-default-rtdb.firebaseio.com'
});

export default instance;