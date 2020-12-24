const state = {
    name: 'Breno',
    age: 17
}

const getters = {
    getName: state => state.name,
    getAge: state => state.age
}

const actions = {
    setName: ({ commit }, payload) => {
        commit('setName', payload)
    },
    setAge: ({ commit }, payload) => {
        commit('setAge', payload)
    }
}

const mutations = {
    setName: (state, payload) => {
        state.name = payload
    },
    setAge: (state, payload) => {
        state.age = payload
    }
}

export default { state, getters, actions, mutations }