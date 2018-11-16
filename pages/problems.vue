<template>
    <v-content>
        <template v-if="$route.query.id && Object.keys(single).length > 0">
            <Problem v-bind="single"/>
        </template>
        <v-layout v-else column class="py-2 px-5">
            <v-flex column v-for="problem in problems" :key="problem.id">
                <nuxt-link :to="{path: '/problems', query: { id: problem.id }}" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">

                    <h1 class="mb-3" :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">
                        {{problem.title}}
                    </h1>
                    <div v-html="problem.description" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
                    </div>
                </nuxt-link>

            </v-flex>
        </v-layout>
    </v-content>
</template>

<script>
import { mapState } from 'vuex'
import Problem from '~/components/Problem.vue'

export default {
  components: {
    Problem
  },
  data(){
      return {
          single: {},
          problems: []
      }
  },
  async asyncData({ route, app }) {
    const id = route.query.id
    return id
      ? app.getSingleByType('problems', route.query.id)
      : app.getAllByType('problems')
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
      const id = this.translations[newLang]

      let data = id
        ? await app.getSingleByType('problems', id)
        : await app.getAllByType('problems')

      for (let prop in data) {
        this[prop] = data[prop]
      }
    },
    async id(newId) {
      this.single = {}
      const app = this.$root.$options.context.app
      let data = await app.getSingleByType('problems', newId)
      for (let prop in data) {
        this[prop] = data[prop]
      }
    }
  }
}
</script>

<style>
</style>
