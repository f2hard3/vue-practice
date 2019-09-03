// action types
export const types = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    SET_AMOUNT: 'SET_AMOUNT'
};

// actions
export const actions = {
    [types.INCREMENT]({ state, commit }) {
        commit(types.INCREMENT, state.amount);
    },
    [types.DECREMENT]({ state, commit }) {
        commit(types.DECREMENT, state.amount);
    },
    [types.RESET]({ commit }) {
        commit(types.RESET);
    }
};

// mutations
export const mutations = {
    [types.INCREMENT](state) {
        state.count += state.amount;
    },
    [types.DECREMENT](state) {
        state.count -= state.amount;
    },
    [types.RESET](state) {
        state.count = 0;
    },
    [types.SET_AMOUNT](state, { amount }) {
        state.amount = amount;
    }
};

// getters
export const getters = {
    count(state) {
        return state.count;
    }
};

export default {
    namespaced: true,
    state: {
        count: 0,
        amount: 0
    },
    mutations,
    actions,
    getters
};
