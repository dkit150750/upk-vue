export default function email({ next, store }) {
  if (store.getters['auth/isEmailVerified']) {
    next();
  } else {
    next({ name: 'verifyEmail' });
  }
}
