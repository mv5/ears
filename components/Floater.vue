<template>
  <v-btn class="floater" color="blue" dark large fixed fab @click="openDialog">
    <v-icon>phone_in_talk</v-icon>
  </v-btn>
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
  top: 75vh;
}
</style>
