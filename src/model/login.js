import router from 'umi/router';

export default {
  namespace: 'login',
  state: {
    
  },
  effects: {
    *login({ payload }, { call, put, select }){
      console.log('登录')
      router.push('/')
    }
  },
  reducers: {
  },
};
