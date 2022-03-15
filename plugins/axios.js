export default function ({ $axios, store }) {
  return $axios.setToken(store.state.token, 'Bearer');
};
