import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    /* eslint-disable no-new */
const state = {
    userdata: {
        'id': '123',
        'name': 'nuknow',
        'role': -1,
        'img': '',
    }
}
const mutations = {
    userSignIn(state, userData) {
        state.userdata.name = userData.name
        state.userdata.role = userData.role
        state.userdata.img = userData.img
    }
}
export default new Vuex.Store({
    state,
    mutations
})