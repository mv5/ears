<template>
  <v-toolbar class="white" fixed app>
    <nuxt-link class="link" to="/">
      <v-toolbar-title class="title" v-text="$t('logo')"></v-toolbar-title>
    </nuxt-link>

    <ul class="menu">
      <nuxt-link class="link" to="/about" tag="li">{{ $t('links.about')}}</nuxt-link>
    </ul>

    <LanguagePicker />
  </v-toolbar>

</template>

<script>
import LanguagePicker from '~/components/LanguagePicker.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LanguagePicker
  },
  computed: mapState(['currLang'])
}
</script>

<style scoped>
.menu {
  list-style-type: none;
}
.link {
  margin: 0 20px;
  cursor: pointer;
}
</style>