import axios from "axios";

const $api = axios.create({
	baseURL: 'http://5.35.93.223:7000/',
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config;
})

export default $api