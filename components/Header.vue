<template>
  <v-toolbar class="white" fixed app>
    <v-toolbar-title class="title">
      <nuxt-link class="link" to="/">
        {{ $t('logo') }}
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer class="hidden-md-and-up"></v-spacer>

    <v-toolbar-items>
      <LanguagePicker />

      <Menu />
    </v-toolbar-items>

  </v-toolbar>

</template>

<script>
import LanguagePicker from '~/components/LanguagePicker.vue'
import Menu from '~/components/Menu.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LanguagePicker,
    Menu
  },
  computed: mapState(['currLang'])
}
</script>

<style scoped>
.menu {
  display: flex;
  list-style-type: none;
}
.link {
  margin: 0 20px;
  cursor: pointer;
}
</style>