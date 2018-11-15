<template>
  <v-toolbar class="white" fixed app>
    <nuxt-link class="link" to="/">
      <v-toolbar-title class="title" v-text="$t('logo')"></v-toolbar-title>
    </nuxt-link>

    <nuxt-link class="link" to="/about">{{ $t('links.about')}}</nuxt-link>

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
.link {
  margin: 0 20px;
}
</style>