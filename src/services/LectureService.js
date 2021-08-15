import * as API from '@/services/API';

export default {
  addLecture(payload) {
    return API.apiClient.post('/lectures', payload);
  },
  deleteLecture(id) {
    return API.apiClient.delete(`/lectures/${id}`);
  },
  getUsers(id) {
    return API.apiClient.get(`/lectures/${id}/users`);
  },
};
