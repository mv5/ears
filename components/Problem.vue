<template>
    <v-card>
        <v-container>
            <v-layout wrap>
                <v-card-title :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">
                    {{title}}
                </v-card-title>
                <v-flex xs12>
                    <v-card-title :class="$vuetify.breakpoint.smAndDown ?  'subheading' : 'title'">
                        {{$t('problems.description')}}
                    </v-card-title>
                    <v-card-text v-html="description" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-title :class="$vuetify.breakpoint.smAndDown ?  'subheading' : 'title'">
                        {{$t('problems.treatment')}}
                    </v-card-title>

                    <v-card-text v-html="treatment" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-title :class="$vuetify.breakpoint.smAndDown ?  'subheading' : 'title'">
                        {{$t('problems.surgery')}}
                    </v-card-title>
                    <v-card-text>
                        <nuxt-link :to="{path: '/surgeries', query: { id: surgery.id }}" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
                            {{surgery.post_name | decodeUri}}
                        </nuxt-link>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    treatment: String,
    surgery: Object,
    translations: Object
  },
  filters: {
    decodeUri(value) {
      if (!value) return ''
      return decodeURIComponent(value)
    }
  }
}
</script>

<style>
</style>
