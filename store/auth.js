// initial state                                                                                                                                        
const state = () => ({
    drawer: false,
    isSigned: false
})


// getters
const getters = {
    isSigned: (state) => state.isSigned,
    drawer: (state) => state.drawer
}

// actions
const actions = {
    set_drawer({ commit }, payload) {
        commit('SET_DRAWER_STATE', payload);
    },
    toggle_drawer({commit}){
        commit('TOOGLE_DRAWER_STATE');
    },
    sign_in({commit}){
        commit('CHANGE_TRUE_AUTH_STATE');
    },
    sign_out({commit}){
        commit('CHANGE_FALSE_AUTH_STATE');
    }
}

// mutations
const mutations = {
    SET_DRAWER_STATE (state, payload) {
    state.drawer = payload;
    },
    TOOGLE_DRAWER_STATE(state){
        state.drawer = !state.drawer;
    },
    CHANGE_TRUE_AUTH_STATE(state){
        state.isSigned = true;
    },
    CHANGE_FALSE_AUTH_STATE(state){
        state.isSigned = false;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}