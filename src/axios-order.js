import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f3264.firebaseio.com/'
});

export default instance;