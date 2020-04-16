export const state = () => {
  return {
    terms: []
  }
}

export const mutations = {
  SET_TERMS(state, payload) {
    state.terms = Object.freeze(payload)
  }
}

export const actions = {
  // 약관가져오기
  async termsGet({ commit }, user) {
    console.log('data')
    try {
      const { data } = await this.$axios.get('terms/termsInfo')
      commit('SET_TERMS', data.result)
    } catch (e) {
      console.log('err', e)
      return e
    }
  }
}
