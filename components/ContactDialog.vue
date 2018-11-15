<template>
  <v-dialog v-model="dialogOpen" @input="e => toggleDialog()">
    <v-card>
      <v-card-title class="">
        <v-layout column align-center>
          <span class="headline info--text mb-4 text-xs-center">
            {{ $t('contactDialog.call') }}
          </span>
          <a class="success--text phone" href="tel:1234567" :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'">
            <v-icon>phone_in_talk</v-icon>
            <span>1234567</span>
          </a>

        </v-layout>
      </v-card-title>

      <v-card-text>
        <v-flex xs12 text-xs-center>
          <p class="accent--text mt-3 mb-0" :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subheading'">{{ $t('contactDialog.details') }}</p>
        </v-flex>

        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field :label="$t('contactDialog.firstName') + '*'" required></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field :label="$t('contactDialog.lastName') + '*'" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field :label="$t('contactDialog.email') + '*'" required></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-select :items="['0-17', '18-29', '30-54', '54+']" :label="$t('contactDialog.age') + '*'" required></v-select>
            </v-flex>

          </v-layout>
        </v-container>
        <small>{{ $t('contactDialog.required') }}</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="dialogOpen = false">
          {{ $t('contactDialog.send') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['dialogOpen']),
  methods: {
    toggleDialog() {
      this.$store.commit('toggleDialog', false)
    }
  }
}
</script>

<style>
@keyframes pump{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
.phone {
  text-decoration: none;
  padding: 5px 10px;
  animation: pump 2s infinite;
}
.phone:hover {
  background-color: rgb(235, 235, 235);
}
.v-dialog {
  width: 500px;
}
@media (max-width: 980px) {
  .v-dialog {
    width: 300px;
  }
}
</style>
