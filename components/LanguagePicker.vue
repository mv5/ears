<template>
      <v-select
          :items="items"
          item-text="name"
          item-value="value"
          :value="currLang"
          :label="label"
          @change="changeLang"
        ></v-select>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            items: [
                {
                    name: "English",
                    value: "en"
                },
                {
                    name: "עברית",
                    value: "he"
                }
            ],
        }
    },
    methods: {
        changeLang(lang){
            this.$store.commit('changeLang', lang)
        }
    },
    computed: mapState([
        'currLang',
        'label'
    ])
}
</script>

<style scoped>
    .v-select{
        width: 5vw;
        flex: 0 0 auto;
    }
</style>
