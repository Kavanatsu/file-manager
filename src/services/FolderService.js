import $api from '../API/axios'

export default class FolderService {
	static async getFolder(id) {
		return $api.get(`/drive/folder/${id}`)
	}

	static async createFolder(parentId, name) {
		return $api.post('/drive/folder/', {parentId, name})
	}

	static async updateFolder(id, name) {
		return $api.patch(`/drive/folder/${id}`, {id, name})
	}

	static async deleteFolder(id) {
		return $api.delete(`/drive/folder/${id}`)
	}
}