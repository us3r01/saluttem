import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import products from './products'


Vue.use(Vuex)

const createStore = () => {

return new Vuex.Store({
  modules: {
    auth,
    products
  }
})
};

export default createStore
