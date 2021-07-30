import * as API from '@/services/API';

export default {
  getCourses() {
    return API.apiClient.get(`/courses`);
  },
  addCourse() {
    return API.apiClient.post(`/courses`);
  },
  getCourseEdit(id) {
    return API.apiClient.get(`/courses/${id}/edit`);
  },
  updateCourse(payload) {
    return API.apiClient.put(`/courses/${payload.id}`, payload);
  },
};
