<template>
  <div class="surgeries">
    <template v-if="$route.query.id && Object.keys(single).length > 0">
      <Surgery v-bind="single" />
    </template>
    <v-layout v-else-if="!$route.query.id && surgeries.length > 0" row wrap class="py-2 px-5">
      <v-flex column xs12 md4 v-for="surgery in surgeries" :key="surgery.id">
        <v-hover>
          <nuxt-link 
            class="px-3 py-2 ma-2" 
            :to="{path: '/surgeries', query: { id: surgery.id }}" 
            tag="div" style="cursor: pointer;" 
            slot-scope="{ hover }" 
            :class="`elevation-${hover ? 2 : 0}`"
          >

            <h1 
                class="mb-3" 
                :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'"
            >
              {{surgery.title}}
            </h1>
            <div 
                v-html="surgery.description" 
                :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'"
            >
            </div>
          </nuxt-link>
        </v-hover>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Surgery from '~/components/Surgery.vue'

export default {
  transition: 'page',
  components: {
    Surgery
  },
  data() {
    return {
      single: {},
      surgeries: []
    }
  },
  async asyncData({ route, app }) {
    const id = route.query.id
    return id
      ? app.getSingleByType('surgeries', route.query.id)
      : app.getAllByType('surgeries')
  },
  computed: {
    ...mapState(['currLang']),
    id() {
      return this.$route.query.id
    }
  },
  watch: {
    async currLang(newLang) {
      const app = this.$root.$options.context.app
      let data
      let newId
      if (this.id) {
        newId = this.single.translations[newLang]
        this.single = {}
        data = await app.getSingleByType('surgeries', newId)
      } else {
        this.surgeries = []
        data = await app.getAllByType('surgeries')
      }

      for (let prop in data) {
        this[prop] = data[prop]
      }
    },
    async id(newId) {
      const app = this.$root.$options.context.app
      let data
      if (newId) {
        this.single = {}
        data = await app.getSingleByType('surgeries', newId)
      } else {
        this.surgeries = []
        data = await app.getAllByType('surgeries')
      }

      for (let prop in data) {
        this[prop] = data[prop]
      }
    }
  }
}
</script>

<style>
</style>
