import $api from '../API/axios'

export default class AuthService {

	static async login(login, password) {
		return $api.post('/auth/login', {login, password})
	}

	static async register(login, password) {
		return $api.post('/auth/register', {login, password})
	}

	static async logout() {
		return $api.post('/logout')
	}
}