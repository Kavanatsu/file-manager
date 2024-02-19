import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import FolderService from "../services/FolderService";


export default class Store {
	token = localStorage.getItem('token') || '';
	folders = {
		id: '',
		name: '',
		children: []
	};

	constructor () {
		makeAutoObservable(this);
	}

	setToken = (token) => {
		this.token = token;
		localStorage.setItem('token', token);
	}

	setFolders = (payload) => {
		this.folders = payload;
	}

	setFolderId = (payload) => {
		this.folders.id = payload;
	}

	setFolderName = (payload) => {
		this.folders.name = payload;
	}

	setFolderChildren = (payload) => {
		this.folders.children = payload;
	}
	
	async login (login, password) {
		try {
			const response = await AuthService.login(login, password);
			console.log(response);
			this.setToken(response.data.token);
			console.log('Вы вошли');
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}

	async register (login, password) {
		try {
			const response = await AuthService.register(login, password);
			console.log(response);
			this.setToken(response.data.token);
			console.log('Вы зарегистрировались');
		} catch (e) {
			console.log(e.response?.data?.message)
		} finally {

		}
	}

	async logout () {
		try {
			localStorage.removeItem('token');
			console.log('Вы вышли');
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}

	async fetchFolder (id) {
		try {
			const response = await FolderService.getFolder(id);
			console.log(response);
			this.setFolders(response.data.data);
			this.setFolderId(response.data.data.id);
			this.setFolderName(response.data.data.name);
			this.setFolderChildren(response.data.data.children);
		} catch	 (e) {
			console.log(e.response?.data?.message)
		}
	}

	async addFolder (parentId, name) {
		try {
			const response = await FolderService.createFolder(parentId, name);
			console.log(response);
		} catch	 (e) {
			console.log(e.response?.data?.message)
		}
	}
}