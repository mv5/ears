<template>
  <v-app >
    <v-toolbar class="white">
                <nuxt-link class="link" to="/">
                  <v-toolbar-title class="title" v-text="title"></v-toolbar-title>
                </nuxt-link>

    
          <nuxt-link class="link" to="/about">{{about}}</nuxt-link>

      <LanguagePicker />
    </v-toolbar>

    <nuxt />

    <ContactDialog />
    <Floater />
    
    <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-app>
</template>

<script>
import LanguagePicker from '~/components/LanguagePicker.vue'
import Floater from '~/components/Floater.vue'
import ContactDialog from '~/components/ContactDialog.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LanguagePicker,
    Floater,
    ContactDialog
  },
  data() {
    return {
      title: 'אוזניים',
      about: 'אודות'
    }
  },
  computed: mapState(['currLang']),
  watch: {
    currLang(newLang) {
      switch (newLang) {
        case 'en':
          this.title = 'Ears'
          this.about = 'About'
          break
        case 'he':
          this.title = 'אוזניים'
          this.about = 'אודות'
          break
      }
    }
  }
}
</script>

<style scoped>
.link {
  margin: 0 20px;
}
</style>