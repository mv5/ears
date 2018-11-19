<template>
  <v-app>
    <Header />

    <v-content>
      <nuxt />
    </v-content>

    <ContactDialog />
    <Floater v-if="$route.name !== 'index'"/>

    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Floater from '~/components/Floater.vue'
import ContactDialog from '~/components/ContactDialog.vue'

export default {
  components: {
    Header,
    Footer,
    Floater,
    ContactDialog
  }
}
</script>

