import Vue from "vue"
import Vuex from "vuex"
import Constant from "../Constant"

Vue.use(Vuex)

const store = new Vuex.Store({
  // Vue 객체 생성
  state: {
    todolist: [
      { todo: "영화보기", done: false },
      { todo: "주말 산책", done: true },
      { todo: "ES6", done: false },
      { todo: "잠실 야구장", done: false }
    ]
  },
  mutations: {
    [Constant.ADD_TODO]: (state, payload) => {
      if (payload.todo !== "") {
        state.todolist.push({ todo: payload.todo, done: false })
      }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
      state.todolost[payload.index].done = !state.todolist[payload.index].do
    },
    [Constant.DELETE_TODO]: (state, payload) => {
      state.dotolist.splice(payload.index, 1)
    }
  }
})
export default store
