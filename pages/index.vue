<template>
  <v-content>
    <section>
      <div class="parallax" :style="{ backgroundImage: `url(${image.sizes.large})`}">
        <v-layout column align-start class="white--text">
          <h1 class="white--text mb-2" :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-4'">
            {{title }}
          </h1>
          <div class="mb-3" :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2'">
            {{subtitle}}
          </div>
          <v-btn class="blue lighten-2 mt-5" :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'" dark large @click="openDialog">
            {{button_text}}
          </v-btn>
        </v-layout>
      </div>
    </section>

    <section>
      <v-layout>
        <v-flex>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center" :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'">
              {{about}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 class="my-3">
          <div class="text-xs-center">
            <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
              {{ $t('titles.problems') }}
            </h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="problem in commonProblems" :key="problem.id" xs12 md4>
                <nuxt-link :to="{ path: 'problems', query: {id: problem.id}}">

                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{problem.title}}</div>
                    </v-card-title>
                    <v-card-text v-html="problem.description">
                    </v-card-text>
                  </v-card>
                </nuxt-link>

              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <div class="parallax" :style="{ backgroundImage: `url(${image.sizes.large})`}" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Get Started
          </v-btn>
        </v-layout>
      </div>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ $t('titles.details') }}</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      numItems: 3,
      commonProblems: [],
      surgeries: [],
      posts: []
    }
  },
  computed: mapState(['currLang']),
  async asyncData(context) {
    return context.app.getPageData()
  },
  async mounted() {
    const url = this.$root.$options.context.isDev
      ? process.env.localApiHost
      : process.env.prodApiHost
    const { data } = await axios.get(
      `${url}/problems?per_page=${this.numItems}&lang=${this.currLang}`
    )
    this.commonProblems = data.map(item => ({
      id: item.id,
      title: item.title.rendered,
      ...item.acf
    }))
  },
  watch: {
    async currLang(newLang) {
      let data = await this.$root.$options.context.app.getPageData()
      for (let prop in data) {
        this[prop] = data[prop]
      }
    }
  },
  methods: {
    openDialog() {
      this.$store.commit('toggleDialog', true)
    }
  }
}
</script>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  align-items: center;
}
.layout {
  padding: 20px 50px;
}
</style>