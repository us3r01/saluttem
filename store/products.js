// initial state                                                                                                                                        
const state = () => ({
    products: []
})


// getters
const getters = {
    allProducts: (state) => state.products
}

// actions
const actions = {
    async getProducts({ commit }) {
        commit('CLEAN_PRODUCTS')
        const res = await this.$fireStore.collection("productos").orderBy("costo").get();
        res.forEach((doc) => {
            var obj = doc.data()
            obj.id = doc.id
            commit('SET_PRODUCTS', obj);
        });
    },
    async getProductsLimit({ commit }) {
        commit('CLEAN_PRODUCTS')
        const res = await this.$fireStore.collection("productos").orderBy("costo").limit(3).get();
        res.forEach((doc) => {
            var obj = doc.data()
            obj.id = doc.id
            commit('SET_PRODUCTS', obj);
        });
    }
}

// mutations
const mutations = {
    SET_PRODUCTS (state, payload) {
        state.products.push(payload)
    },
    CLEAN_PRODUCTS (state, payload) {
        state.products = []
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}