import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)  // 1) 使用这个插件的install方法

export default new Vuex.Store({
  modules: {
    a: {
      state: { a: 1 },
      modules: {
        c: {
          state: { c: 1 },
          getters: {
            computedC(state) {
              return state.c + 100;
            }
          },
          mutations: {
            syncAdd(state, payload) {
              console.log('add');
            },
            syncMinus(state, payload) {
              console.log('minus');
            }
          },
          actions: { // 异步提交更改
            asyncMinus({commit}, payload) {
              debugger
              console.log('minus1');
              setTimeout(() => {
                commit('syncMinus', payload)
              }, 3000)
            }
          }
        }
      }
    },
    b: {
      state: { b: 1 }
    }
  },
  state: {
    age: 10
  },
  getters: {
    // 计算属性
    myAge(state) {
      return state.age + 10;
    }
  },
  mutations: {
    syncAdd(state, payload) {
      state.age += payload;
    },
    syncMinus(state, payload) {
      state.age -= payload;
    }
  },
  actions: { // 异步提交更改
    asyncMinus({ commit }, payload) {
      debugger
      console.log('minus2');
      setTimeout(() => {
        commit('syncMinus', payload)
      }, 3000)
    }
  }
})
