import {routerRedux} from 'dva/router';
import {login} from '../services/loginService';


export default {
  namespace : 'app',

  state : [],

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({payload }, { call, put }) {  // eslint-disable-line
      const {data} = yield call(login,payload);
      if(data.success){
        yield  put(routerRedux.push('./users'));
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    logMes(state,action){

      return {...state,app:{testValue:'tttt'}};

    },
  },

};
