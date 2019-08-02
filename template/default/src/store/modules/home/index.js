import { UPDATE_NUM } from './mutation-types'
const state = {
    num: 1
}

const actions = {
    addNum ({ state, commit }) {
        commit('updateNum', ++state.num)
    }
}

const mutations = {
    [UPDATE_NUM] (state, payload) {
        console.log(payload)
        state.num = payload
    }
}

const getters = {
    num: state => state.num
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
