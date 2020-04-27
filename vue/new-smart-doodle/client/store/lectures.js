export const state = () => {
  return {
    musicList: [],
    mp4List: []
  }
}

export const mutations = {
  SET_MUSIC_LIST(state, payload) {
    state.musicList = payload
  },
  SET_MP4_LIST(state, payload) {
    state.mp4List = payload
  }
}

export const actions = {
  /**
   * 뮤 전체 상품(곡) 리스트
   */
  async getMusicList({ commit }) {
    try {
      const rs = await this.$axios.$get('/lrng/mylrngmewlist')
      commit('SET_MUSIC_LIST', rs.result)
      return rs
    } catch (e) {
      return e
    }
  },
  /**
   * 뮤 1곡(상품)당 12콘텐츠(액티비티) 상세정보
   *
   * @param item.prodId 상품아이디
   * @param item.myLrngSeqno 나의학습일련번호
   */
  async getMusicDetail({ commit }, item) {
    try {
      const rs = await this.$axios.$get('/prod/mylrngprodlistone', {
        params: {
          prodId: item.prodId,
          myLrngSeqno: item.myLrngSeqno
        }
      })
      // for (const a of rs.result) {
      //   a.filePathNm = 'http://210.223.45.233:50001/viewer/mew'
      // }
      return rs
    } catch (e) {
      return e
    }
  },
  /**
   * 콘텐츠(액티비티) 진도체크 시작
   *
   * @param param.myLrngSeqno 나의학습일련번호
   * @param param.prodCtgrSeqno 상품카테고리일련번호
   * @param param.prodId 상품아이디
   * @param param.cntsId 콘텐츠아이디
   *
   * @rs true / false
   */
  async saveContentStart(context, param) {
    try {
      const rs = await this.$axios.post('/lrngcrcm/mylrngcrcminsstart', param)
      return rs
    } catch (e) {
      return e
    }
  },
  /**
   * 콘텐츠(액티비티) 진도체크 완료
   *
   * @param param.myLrngSeqno 나의학습일련번호
   * @param param.prodCtgrSeqno 상품카테고리일련번호
   * @param param.prodId 상품아이디
   * @param param.cntsId 콘텐츠아이디
   *
   * @rs true / false
   */
  async saveContentComplete(context, param) {
    try {
      const rs = await this.$axios.post('/lrngcrcm/mylrngcrcminsstart', param)
      return rs
    } catch (e) {
      return e
    }
  },
  /**
   * 이미지 저장
   * @param myLrngSeqno string 나의학습일련번호
   * @param prodId string 상품아이디
   */
  async savePortfolio(context, param) {
    try {
      const fd = new FormData()
      console.warn('save ㅅㅣ 파라미터 : ===', param)
      fd.append('myLrngSeqno', param.myLrngSeqno)
      fd.append('prodId', param.prodId)
      fd.append('galrLrngClCd', param.galrLrngClCd)
      fd.append('galrLrngTpCd', param.galrLrngTpCd)
      fd.append('tbpfiles', param.tbpfiles)
      fd.append('fileType', param.fileType)
      const rs = await this.$axios.post('/lrnggalr/galrIns', fd)
      return rs
    } catch (e) {
      return e
    }
  },
  /**
   * 갤러리 데이터 가져오기
   * @param param
   */
  async getPortfolio(context, param) {
    try {
      const rs = await this.$axios.$get('/lrnggalr/lrnggalrlist', {
        params: param
      })
      return rs
    } catch (e) {
      return e
    }
  },
  // 최순철 - 동화학습 리스트 가져오기
  async getDonghwaList({ commit }) {
    try {
      const rs = await this.$axios.$get('/lrng/lrnglist')
      console.log('rs', rs)
      commit('SET_MP4_LIST', rs.result)
      return rs
    } catch (e) {
      return e
    }
  },
  // 최순철 - 북토비 상세 가져오기
  async getBookDetail({ commit }, param) {
    console.log('param', param)
    try {
      const rs = await this.$axios.$get('prod/mylrngprodlistone', {
        params: param
      })
      return rs
    } catch (e) {
      return e
    }
  }
}
