<template>
  <div class="problems">
    <template v-if="$route.query.id && Object.keys(single).length > 0">
      <Problem v-bind="single" />
    </template>
    <v-layout v-else-if="!$route.query.id && problems.length > 0" row wrap class="py-2 px-5">
      <v-flex column xs12 md4 v-for="problem in problems" :key="problem.id">
        <v-hover>
          <nuxt-link class="px-3 py-2 ma-2" :to="{path: '/problems', query: { id: problem.id }}" tag="div" style="cursor: pointer;" slot-scope="{ hover }" :class="`elevation-${hover ? 2 : 0}`">

            <h1 class="mb-3" :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">
              {{problem.title}}
            </h1>
            <div v-html="problem.description" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
            </div>
          </nuxt-link>
        </v-hover>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Problem from '~/components/Problem.vue'

export default {
  transition: 'page',
  components: {
    Problem
  },
  data() {
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
      let data
      let newId
      if (this.id) {
        newId = this.single.translations[newLang]
        this.single = {}
        data = await app.getSingleByType('problems', newId)
      } else {
        this.problems = []
        data = await app.getAllByType('problems')
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
        data = await app.getSingleByType('problems', newId)
      } else {
        this.problems = []
        data = await app.getAllByType('problems')
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
