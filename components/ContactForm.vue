<template>
     <v-card 
      :flat="inHomepage ? true : false" 
      :class="inHomepage ? 'transparent' : ''"
     >
      <v-card-title
        :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'" 
        class="justify-center"
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

            <v-flex
              xs12
            >
              <v-textarea
                name="input-7-1"
                :label="$t('contactDialog.message')"
                value=""
                hint=""
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
        <small>{{ $t('contactDialog.required') }}</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn 
          color="primary lighten-1" 
          @click="handleSendClick"
          :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'"
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
