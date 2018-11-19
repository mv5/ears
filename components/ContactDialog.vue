<template>
  <v-dialog 
    v-model="dialogOpen" 
    @input="e => dialogOpen = false"
  >
    <ContactForm v-on:form-sent="dialogOpen = false"/> 
  </v-dialog>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  computed: {
    dialogOpen: {
      get() {
        return this.$store.state.dialogOpen
      },
      set(newValue) {
        this.$store.commit('toggleDialog', { isOpen: newValue })
      }
    }
  }
}
</script>

<style>
.v-dialog {
  width: 500px;
}
@media (max-width: 980px) {
  .v-dialog {
    width: 300px;
  }
}
</style>
