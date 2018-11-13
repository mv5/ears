<template>
      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text text-xs-center">
        
              <a class="white--text" href="#" target="_blank">{{ $t('company') }}</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['currLang']),
}
</script>

<style>

</style>
