<template>
     <v-card :flat="inHomepage ? true : false" :class="inHomepage ? 'transparent' : ''">
      <v-card-title
        :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'headline'" 
      >
        {{ $t('contactDialog.details') }}
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex 
              xs12 
              sm6>
              <v-text-field 
                :label="$t('contactDialog.firstName') + '*'" 
                required />
            </v-flex>

            <v-flex 
              xs12 
              sm6>
              <v-text-field 
                :label="$t('contactDialog.lastName') + '*'" 
                required />
            </v-flex>
            <v-flex 
              xs12 
              sm6>
              <v-text-field 
                :label="$t('contactDialog.email') + '*'" 
                required />
            </v-flex>

            <v-flex 
              xs12 
              sm6>
              <v-select 
                :items="['0-17', '18-29', '30-54', '54+']" 
                :label="$t('contactDialog.age') + '*'" 
                required />
            </v-flex>

          </v-layout>
        </v-container>
        <small>{{ $t('contactDialog.required') }}</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn 
          :color="inHomepage ? 'info' : 'green darken-1'" 
          :flat="inHomepage ? false : true"  
          @click="handleSendClick"
        >
          {{ $t('contactDialog.send') }}
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
    inHomepage: Boolean
  },
  methods: {
    handleSendClick() {
      this.$emit('form-sent')
    }
  }
}
</script>

<style>
</style>
