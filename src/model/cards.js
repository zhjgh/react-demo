import { getDataService, postDataService } from '@/service/commonService'
import { api } from '@/util/config';


export default {
  namespace: 'cards',
  state: {
    expand: false,
    loading: false,
    modalVisible: false,
    modalType: 'create',
    currentItem: {},
    dataSource: [],
    pagination: {
      pageSizeOptions: ["5","10","15","20"],
      showSizeChanger: true,
      showQuickJumber: true,
      showQuickJumper: true,
			current: 1,
			total: null,
    },
  },
  effects: {
    *queryList({ payload = {} }, { call, put }) {
      payload.page = payload && payload.page || 1
      payload.pageSize = payload && payload.pageSize || 5
      payload.city = payload && payload.city || '北京'
      yield put({ type: 'showLoading' })
      const res = yield call(postDataService, {url: api.query}, {...payload});
      yield put({
        type: 'saveList', 
        payload: { 
          dataSource: res.data.subjects,
          pagination: {
            current: payload.page || 1,
            pageSize: payload.pageSize || 5,
            total: res.data.total
          }
        } 
      });
      yield put({ type: 'hideLoading' })
    },
    /* *deleteOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.deleteOne, payload);
      console.log('deleteOne');
      console.log(rsp);
      return rsp;
    },
    *addOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.addOne, payload);
      yield put({ type: 'queryList' });
      return rsp;
    }, */
  },
  reducers: {
    saveList(state, { payload: { dataSource, pagination } }) {
      return {
        ...state,
        dataSource,
        pagination: {
          ...state.pagination,
          ...pagination
        }
      }
    },
    showLoading(state){
      return {
        ...state,
        loading: true
      }
    },
    hideLoading(state){
      return {
        ...state,
        loading: false
      }
    },
    showModal(state, { payload }){
      return {
        ...state,
        ...payload,
        modalVisible: true
      }
    },
    hideModal(state, { payload }){
      return {
        ...state,
        ...payload,
        modalVisible: false
      }
    },
  },
};
