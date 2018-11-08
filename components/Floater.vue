<template>
      <v-btn
              color="blue"
              dark
              large
              fixed
              bottom
              fab
              @click="openDialog"
            >
              <v-icon>phone_in_talk</v-icon>
            </v-btn>
</template>

<script>
export default {
  methods: {
    openDialog(){
      this.$store.commit('toggleDialog', true)
    }
  }
}
</script>

<style scoped>

</style>
