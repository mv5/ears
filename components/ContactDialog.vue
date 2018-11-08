<template>
     <v-dialog
      v-model="dialogOpen"
      @input="e => toggleDialog()"
    >
        <v-card>
        <v-card-title>
          <span class="headline">Contact Us</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
            
              <v-flex xs12 sm6>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
          
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
            
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
            <v-flex xs12>
                <p> or call 1233457</p>
            </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogOpen = false"
          >
            SEND
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
.v-dialog {
  width: 500px;
}
@media (max-width: 980px) {
  .v-dialog {
    width: 300px;
  }
}
</style>
