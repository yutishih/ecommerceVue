const actions = {
  login({ commit }: any, user: any) {
    // 帳密確認寫在這
    commit("setUser", user);
    localStorage.setItem("user", JSON.stringify(user));
  },
  logout({ commit }: any) {
    commit("setUser", null);
    localStorage.removeItem("user");
  },
};

export default actions;
