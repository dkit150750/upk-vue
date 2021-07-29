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
};
