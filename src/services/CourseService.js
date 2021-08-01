import * as API from '@/services/API';

export default {
  getCourses() {
    return API.apiClient.get(`/courses`);
  },
  addCourse() {
    return API.apiClient.post(`/courses`);
  },
  getCourse(id) {
    return API.apiClient.get(`/courses/${id}`);
  },
  updateCourse(payload) {
    return API.apiClient.put(`/courses/${payload.id}`, payload);
  },
  deleteCourse(id) {
    return API.apiClient.delete(`/courses/${id}`);
  },
};
