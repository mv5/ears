import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      currLang: 'he',
      label: 'שפה',
      dialogOpen: false
    }),
    mutations: {
      changeLang (state, lang) {
        let label
        switch(lang){
            case 'he':
                label = 'שפה'
                break;
            case 'en':
                label = 'Language'
                break;
        }
        state.currLang = lang
        state.label = label
      },
      toggleDialog(state, isOpen){
        state.dialogOpen = isOpen
      }
    }
  })
}

export default createStore
