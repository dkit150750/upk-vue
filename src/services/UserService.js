import * as API from '@/services/API';

export default {
  changeAdmin(id) {
    return API.apiClient.put(`/users/${id}/admin`);
  },
};
