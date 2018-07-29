import {routerRedux} from 'dva/router';

export default {
  namespace : 'app',

  state : [],

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'logMes' });
      yield put(routerRedux.push('./users'));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    logMes(state,action){
      alert('s');

    },
  },

};
