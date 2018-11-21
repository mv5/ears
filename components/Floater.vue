<template>
  <div class="floater">
    <v-tooltip top>
      <v-btn 
        dark 
        :large="$vuetify.breakpoint.smAndDown ? false : true"
        :medium="$vuetify.breakpoint.smAndDown ? true : false"
        fab
        class="primary lighten-1" 
        href="tel:1234567"
        slot="activator"
      >
        <v-icon>phone_in_talk</v-icon>
      </v-btn>
      <span>{{ $t('contactDetails.phone') }}</span>
    </v-tooltip>
    <v-tooltip top>
      <v-btn 
        dark 
        :large="$vuetify.breakpoint.smAndDown ? false : true"
        :medium="$vuetify.breakpoint.smAndDown ? true : false"
        fab
        @click="openDialog"
        class="primary lighten-1" 
        slot="activator"
      >
        <v-icon>email</v-icon>
      </v-btn>
      <span>{{ $t('contactDetails.email') }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    openDialog() {
      this.$store.commit('toggleDialog', { isOpen: true })
    }
  }
}
</script>

<style scoped>
.floater {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50vh;
}
</style>
