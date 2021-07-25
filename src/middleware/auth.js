export default async function auth({ to, next, store }) {
  const loginQuery = { name: 'login', query: { redirect: to.fullPath } };

  if (!store.getters['auth/authUser']) {
    await store.dispatch('auth/getAuthUser');

    if (!store.getters['auth/authUser']) {
      next(loginQuery);
    } else {
      next();
    }
  } else {
    next();
  }
}
