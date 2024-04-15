import { getToken } from "@/utils/auth";

const getDefaultState = () => {
  return {
    token: getToken(),
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
