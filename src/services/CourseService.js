import * as API from '@/services/API';

export default {
  getCourses() {
    return API.apiClient.get(`/courses`);
  },
};
