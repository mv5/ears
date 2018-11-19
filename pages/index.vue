<template>
  <div class="homepage">
    <section
      class="parallax midDark lighten-1"  
    >
      <v-container fluid>
        <v-layout column align-start class="white--text">
          <h1 
            :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-4'" 
            class="mb-2"
          >
            {{ title }}
          </h1>
          <div 
            :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2'" 
            class="mb-3"
          >
            {{ subtitle }}
          </div>
            <v-hover>
              <v-card 
                slot-scope="{ hover }"
                :width="$vuetify.breakpoint.smAndDown ? '100%' : '30%'"
                :color="`rgba(255, 255, 255, ${hover ? '1' : '0.75'} )`"
                class="dark--text"
              >
                <v-card-title
                  :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1'"
                  class="justify-center"
                >
                  {{ $t('contactDetails.title') }}
                </v-card-title>
                  <v-layout align-center :column="$vuetify.breakpoint.smAndDown ? true : false">
                    <v-layout justify-center :column="$vuetify.breakpoint.smAndDown ? false : true">
                      <v-flex xs3 md12 class="mb-2">
                        <v-tooltip top>
                          <v-btn
                            :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'" 
                            class="blue lighten-2" 
                            href="tel:1234567"
                            :large="$vuetify.breakpoint.smAndDown ? false : true"
                            :medium="$vuetify.breakpoint.smAndDown ? true : false"
                            fab
                            slot="activator"
                          >
                            <v-icon>phone_in_talk</v-icon>
                          </v-btn>
                          <span>{{ $t('contactDetails.phone') }}</span>
                        </v-tooltip>
                      </v-flex>
                      <v-flex xs3 md12>
                        <v-tooltip top>
                          <v-btn 
                            :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'" 
                            class="blue lighten-2"  
                            :large="$vuetify.breakpoint.smAndDown ? false : true"
                            :medium="$vuetify.breakpoint.smAndDown ? true : false"
                            @click="openDialog"
                            fab
                            slot="activator"
                          >
                            <v-icon class="">email</v-icon>
                          </v-btn>
                          <span>{{ $t('contactDetails.email') }}</span>
                        </v-tooltip>
                      </v-flex>
                    </v-layout>
                
                    <v-flex>
                    <ContactDetails />
                    </v-flex>
                  </v-layout>
              </v-card>
            </v-hover>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-layout>
        <v-flex>
          <v-card class="elevation-0 transparent">
            <v-card-text 
              :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'" 
              class="text-xs-center"
            >
              {{ about }}
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
          <v-container d-flex grid-list-xl style="flex-direction: column;">
            <v-layout row wrap align-center>
              <v-flex v-for="problem in commonProblems" :key="problem.id" xs12 md4>
                <nuxt-link 
                  :to="{ path: 'problems', query: {id: problem.id}}" 
                  tag="div" 
                  style="cursor: pointer;"
                >
                  <v-hover>
                    <v-card 
                      slot-scope="{ hover }" 
                      :class="`elevation-${hover ? 4 : 1}`" 
                    >
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{ problem.title }}</div>
                      </v-card-title>
                      <v-card-text v-html="problem.description" />
                    </v-card>
                  </v-hover>
                </nuxt-link>
              </v-flex>
            </v-layout>
            <v-btn class="btn-link" color="info">
              <nuxt-link to="/problems" tag="span">
                {{ $t('buttons.problemsPage') }}
              </nuxt-link>
            </v-btn>
          </v-container>
      </v-layout>
    </section>

    <section
       :style="{ backgroundImage: `url(${image.sizes.large})`}" 
        class="parallax"
    >
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
                {{ $t('titles.surgeries') }}
              </h2>
            </div>
          </v-flex>
            <v-container d-flex grid-list-xl style="flex-direction: column;">
              <v-layout row wrap align-center>
                <v-flex v-for="surgery in surgeries" :key="surgery.id" xs12 md4>
                  <nuxt-link 
                    :to="{ path: 'surgeries', query: {id: surgery.id}}" 
                    tag="div" 
                    style="cursor: pointer;"
                  >
                    <v-hover>
                      <v-card 
                        slot-scope="{ hover }" 
                        :class="`elevation-${hover ? 2 : 0}`" 
                        class="surgery-card"
                      >
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">{{ surgery.title }}</div>
                        </v-card-title>
                        <v-card-text v-html="surgery.description" />
                      </v-card>
                    </v-hover>
                  </nuxt-link>
                </v-flex>
              </v-layout>
              <v-btn class="btn-link" color="info">
                <nuxt-link to="/surgeries" tag="span">
                  {{ $t('buttons.surgeriesPage') }}
                </nuxt-link>
              </v-btn>
            </v-container>
        </v-layout>
    </section>

<section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 class="my-3">
          <div class="text-xs-center">
            <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
              {{ $t('titles.blog') }}
            </h2>
          </div>
        </v-flex>
          <v-container d-flex grid-list-xl style="flex-direction: column;">
            <v-layout row wrap align-center>
              <v-flex v-for="post in posts" :key="post.id" xs12 md4>
                <nuxt-link 
                  :to="{ path: 'blog', query: {id: post.id}}" 
                  tag="div" 
                  style="cursor: pointer;"
                >
                  <v-hover>
                    <v-card 
                      slot-scope="{ hover }" 
                      :class="`elevation-${hover ? 4 : 1}`" 
                    >
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{ post.title }}</div>
                      </v-card-title>
                      <v-card-text v-html="post.description" />
                    </v-card>
                  </v-hover>
                </nuxt-link>
              </v-flex>
            </v-layout>
            <v-btn class="btn-link" color="info">
              <nuxt-link to="/blog" tag="span">
                {{ $t('buttons.blogPage') }}
              </nuxt-link>
            </v-btn>
          </v-container>
      </v-layout>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row justify-center class="my-5">
          <v-flex xs12 sm5>
           <ContactForm :inHomepage="true"/>
          </v-flex>
          <v-flex xs12 sm5>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div 
                  :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'headline'" 
                >
                  {{ $t('titles.details') }}
                </div>
              </v-card-title>
              <ContactDetails/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import ContactDetails from '~/components/ContactDetails.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactDetails,
    ContactForm
  },
  data() {
    return {
      about: '',
      button_text: '',
      image: {},
      phone: '',
      title: '',
      subtitle: '',
      numItems: 3,
      commonProblems: [],
      surgeries: [],
      posts: []
    }
  },
  computed: mapState(['currLang']),
  asyncData(context) {
    return context.app.getPageData()
  },
  mounted() {
    this.getSomeOfEachType()
  },
  watch: {
    async currLang(newLang) {
      // this.clearPageData()
      this.getPageData()
      this.getSomeOfEachType()
    }
  },
  methods: {
    openDialog() {
      this.$store.commit('toggleDialog', { isOpen: true })
    },
    async getSomeOfEachType() {
      const app = this.$root.$options.context.app
      this.commonProblems = await app.getSomeByType('problems', this.numItems)
      this.surgeries = await app.getSomeByType('surgery', this.numItems)
      this.posts = await app.getSomeByType('posts', this.numItems)
    },
    async getPageData() {
      let data = await this.$root.$options.context.app.getPageData()
      for (let prop in data) {
        this[prop] = data[prop]
      }
    },
    clearPageData() {
      this.about = ''
      this.button_text = ''
      this.image = {}
      this.phone = ''
      this.title = ''
      this.subtitle = ''
      this.commonProblems = []
      this.surgeries = []
      this.posts = []
    }
  }
}
</script>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  align-items: center;
}
.layout {
  padding: 20px 40px;
}
.surgery-card {
  background-color: rgba(255, 255, 255, 0.7);
}
.surgery-card:hover {
  background-color: rgba(255, 255, 255);
}
.btn-link {
  width: fit-content;
  align-self: flex-end;
}
.v-btn {
  margin: 0;
}
@media (max-width: 980px) {
  .parallax {
    min-height: 75vh;
  }
  .layout {
    padding: 10px 0;
    width: 100%;
  }
}
</style>
