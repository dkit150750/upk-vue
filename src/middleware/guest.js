export default async function guest({ next, store }) {
  const storageItem = window.localStorage.getItem('guest');

  if (storageItem === 'isNotGuest' && !store.getters['auth/authUser']) {
    await store.dispatch('auth/getAuthUser');

    if (store.getters['auth/authUser']) {
      next({ name: 'profile' });
    } else {
      store.dispatch('auth/setGuest', { value: 'isGuest' });
      next();
    }
  } else {
    next();
  }
}
