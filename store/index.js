import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      currLang: 'he',
      dialogOpen: false
    }),
    mutations: {
      changeLang(state, lang) {
        state.currLang = lang
      },
      toggleDialog(state, { isOpen }) {
        state.dialogOpen = isOpen
      }
    }
  })
}

export default createStore
