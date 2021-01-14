import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  // 定义要共享的状态
  state: {
    shopPriceSum: 299.7,
  },
  // 定义改变状态的方法
  mutations: {
    increment(state, price) {
      state.shopPriceSum += price;
    },
    decrement(state, price) {
      state.shopPriceSum -= price;
    },
  },
  getters: {
    changPrice(state) {
      return `￥${state.shopPriceSum.toFixed(2)}`;
    },
  },
});

export default vuex;
