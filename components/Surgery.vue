<template>
    <v-card>
        <v-container>
            <v-layout wrap>
                <v-card-title :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">
                    {{title}}
                </v-card-title>
                <v-flex xs12>
                    <v-card-title :class="$vuetify.breakpoint.smAndDown ?  'subheading' : 'title'">
                        {{$t('surgeries.description')}}
                    </v-card-title>
                    <v-card-text v-html="description" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">
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
    translations: Object
  }
}
</script>

<style>
</style>
