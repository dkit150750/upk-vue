export default function email({ next, store }) {
  console.log(store.getters['auth/isEmailVerified']);
  if (store.getters['auth/isEmailVerified']) {
    next();
  } else {
    next({ name: 'verifyEmail' });
  }
}
