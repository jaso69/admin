import { createStore } from 'vuex'

export default createStore({
    state () {
      return {
        ruta: String,
      }
    },
    mutations: {
      rutaDel(state) {
        state.ruta = ''
      }
    }
  })