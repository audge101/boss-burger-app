import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-boss-react-default-rtdb.firebaseio.com/'
});

export default instance;