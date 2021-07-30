import * as API from '@/services/API';

export default {
  addLecture(payload) {
    return API.apiClient.post(`/courses/${payload.id}/lectures`, payload);
  },
};
