import { createStore, createLogger } from 'vuex';

import auth from '@/store/modules/Auth';
import theme from '@/store/modules/Theme';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    auth,
    theme,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
