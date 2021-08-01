import * as API from '@/services/API';

export default {
  getRecords(page) {
    return API.apiClient.get('/user/records', {
      params: {
        page: page,
      },
    });
  },
  hasRecord({ lecture_id }) {
    return API.apiClient.get('/user/records/has-record', {
      params: {
        lecture_id: lecture_id,
      },
    });
  },
  setRecord(payload) {
    return API.apiClient.post('/user/records', payload);
  },
};
