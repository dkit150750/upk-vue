import { createStore, createLogger } from 'vuex';

import * as auth from '@/store/modules/Auth';
import * as user from '@/store/modules/User';
import * as message from '@/store/modules/Message';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    auth,
    user,
    message,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
