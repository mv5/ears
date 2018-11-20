<template>
  <div class="surgeries">
    <template v-if="$route.query.id && Object.keys(single).length > 0">
      <Post v-bind="single" />
    </template>
    <v-layout v-else-if="!$route.query.id && posts.length > 0" row wrap class="py-2 px-5">
      <v-flex column xs12 md4 v-for="post in posts" :key="post.id">
        <v-hover>
          <nuxt-link 
            class="px-3 py-2 ma-2" 
            :to="{path: '/blog', query: { id: post.id }}" 
            tag="div" style="cursor: pointer;" 
            slot-scope="{ hover }" 
            :class="`elevation-${hover ? 2 : 0}`"
          >

            <h1 
                class="mb-3" 
                :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'"
            >
              {{post.title}}
            </h1>
            <div 
                v-html="post.description" 
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
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  data() {
    return {
      single: {},
      posts: []
    }
  },
  async asyncData({ route, app }) {
    const id = route.query.id
    return id
      ? app.getSingleByType('posts', route.query.id)
      : app.getAllByType('posts')
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
        data = await app.getSingleByType('posts', newId)
      } else {
        this.surgeries = []
        data = await app.getAllByType('posts')
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
        data = await app.getSingleByType('posts', newId)
      } else {
        this.posts = []
        data = await app.getAllByType('posts')
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
