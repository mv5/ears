<template>
  <div class="homepage">
    <section
      class="parallax dark lighten-2"
      :style="{ backgroundImage: `url(${image.sizes.large})`}"   
    >
      <v-container fluid>
        <v-layout column align-start class="light--text text--lighten-2">
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
                :color="`rgba(255, 255, 255, ${hover ? '1' : '0.75'} )`"
                class="details-card dark--text pb-3"
              >
                <v-card-title
                  :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'"
                  class="justify-center dark--text"
                >
                  {{ $t('contactDetails.title') }}
                </v-card-title>
                  <v-layout 
                    align-center 
                    :column="$vuetify.breakpoint.smAndDown ? true : false"
                  >
                    <v-layout 
                      align-center 
                      justify-center 
                      :column="$vuetify.breakpoint.smAndDown ? false : true"
                      style="width: 100%;"
                    >
                      <v-flex 
                        xs3
                        md12 
                        :class="$vuetify.breakpoint.smAndDown ? '' : 'mb-2'"
                        class="text-xs-center"
                      >
                        <v-tooltip top>
                          <v-btn
                            :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'" 
                            class="primary lighten-2" 
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
                      <v-flex xs3 md12 class="text-xs-center">
                        <v-tooltip top>
                          <v-btn 
                            :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'" 
                            class="primary lighten-2"  
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

    <section class="">
      <v-layout>
        <v-flex>
          <v-card class="elevation-0 transparent dark--text">
            <v-card-title
              :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'"
              class="justify-center"
            >
              {{ $t('titles.about') }}
            </v-card-title>
            <v-card-text 
              :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'" 
            >
              <v-layout justify-space-between wrap>
                <v-flex xs12 md5 class="mb-2">
                  {{ about }}       
                </v-flex>
                <v-flex xs12 md6>
                  <v-img src="/homepage/the-hospital-of-the-future.jpg"/>
                </v-flex>
              </v-layout>
              
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column wrap class="my-2" align-center>
        <v-flex xs12 class="my-3">
          <div class="text-xs-center">
            <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
              {{ $t('titles.problems') }}
            </h2>
          </div>
        </v-flex>
          <v-container d-flex grid-list-xl style="flex-direction: column; align-items: center;">
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
                      <v-card-title primary-title class="justify-center">
                        <div class="headline text-xs-center">{{ problem.title }}</div>
                      </v-card-title>
                      <v-card-text v-html="problem.description" />
                    </v-card>
                  </v-hover>
                </nuxt-link>
              </v-flex>
            </v-layout>
            <v-btn class="btn-link white--text lighten-1" color="primary" large>
              <nuxt-link 
                to="/problems" 
                tag="span"
                :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'"
              >

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
        <v-layout column wrap class="my-2" align-center>
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
                {{ $t('titles.surgeries') }}
              </h2>
            </div>
          </v-flex>
            <v-container d-flex grid-list-xl style="flex-direction: column; align-items: center;">
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
                        <v-card-title primary-title class="justify-center">
                          <div class="headline text-xs-center">{{ surgery.title }}</div>
                        </v-card-title>
                        <v-card-text v-html="surgery.description" />
                      </v-card>
                    </v-hover>
                  </nuxt-link>
                </v-flex>
              </v-layout>
              <v-btn class="btn-link white--text lighten-1" color="primary" large>
                <nuxt-link 
                  to="/surgeries" 
                  tag="span"
                  :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'"
                >
                  {{ $t('buttons.surgeriesPage') }}
                </nuxt-link>
              </v-btn>
            </v-container>
        </v-layout>
    </section>

<section>
      <v-layout column wrap class="my-2" align-center>
        <v-flex xs12 class="my-3">
          <div class="text-xs-center">
            <h2 :class="$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'">
              {{ $t('titles.blog') }}
            </h2>
          </div>
        </v-flex>
          <v-container d-flex grid-list-xl style="flex-direction: column; align-items: center;">
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
                      <v-card-title primary-title class="justify-center">
                        <div class="headline text-xs-center">{{ post.title }}</div>
                      </v-card-title>
                      <v-card-text v-html="post.description" />
                    </v-card>
                  </v-hover>
                </nuxt-link>
              </v-flex>
            </v-layout>
            <v-btn class="btn-link white--text lighten-1" color="primary" large>
              <nuxt-link 
                to="/blog" 
                tag="span"
                :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'"
              >
                {{ $t('buttons.blogPage') }}
              </nuxt-link>
            </v-btn>
          </v-container>
      </v-layout>
    </section>

    <section class="light lighten-2">
      <v-container grid-list-xl>
        <v-layout 
        :column="$vuetify.breakpoint.smAndDown ? true : false" 
        :align-center="$vuetify.breakpoint.smAndDown ? true : false" 
        justify-space-around class="my-2">
          <v-flex xs12 sm5>
           <ContactForm :inHomepage="true"/>
          </v-flex>
          <v-flex xs12 sm3>
            <v-card class="elevation-0 transparent">
              <v-card-title 
                :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'" 
                class="justify-center"
              >
                {{ $t('titles.details') }}
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
  transition: 'page',
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
      this.surgeries = await app.getSomeByType('surgeries', this.numItems)
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
.surgery-card {
  background-color: rgba(255, 255, 255, 0.7);
}
.surgery-card:hover {
  background-color: rgba(255, 255, 255);
}
.details-card{
  width: 30%;
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
  .details-card{
    width: 100%;
  }
}
</style>
