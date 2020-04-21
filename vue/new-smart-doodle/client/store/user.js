export const state = () => {
  return {
    terms: [],
    phoneAgency: []
  }
}

export const mutations = {
  SET_TERMS(state, payload) {
    state.terms = Object.freeze(payload)
  },
  SET_AGENCY(state, payload) {
    state.phoneAgency = Object.freeze(payload)
  }
}

export const actions = {
  // 로그인
  login({ state, dispatch }, user) {
    return this.$auth.loginWith('local', {
      data: user
    })
  },
  fetchUser() {
    return this.$auth.fetchUser()
  },
  logout() {
    return this.$auth.logout()
  },
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
  },
  // 통신사 가져오기
  async phoneAgencyGet({ commit }, user) {
    console.log('data')
    try {
      const { data } = await this.$axios.post('code/codelist', {
        hgrkCd: 'MNO_CD'
      })
      commit('SET_AGENCY', data.result)
    } catch (e) {
      console.log('err', e)
      return e
    }
  },
  // 회원가입
  async signup({ commit }, user) {
    console.log('user', user)
    try {
      const data = await this.$axios.post('member/join', user)
      return data
    } catch (e) {
      // console.log("err", e);
      return e
    }
  }
}
