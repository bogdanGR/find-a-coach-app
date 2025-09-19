export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token // !! converts the statement to boolean (if token is null = false, otherwise is true
  }
};