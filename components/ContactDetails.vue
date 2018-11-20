<template>
            <v-list class="transparent">
              <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="midDark--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title 
                      :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'"
                    >
                      {{ $t('contactDetails.address.name') }}
                    </v-list-tile-title>
                  </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="midDark--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title 
                      style="unicode-bidi: plaintext;"
                      :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'"
                    >
                      +972 (0) 5-5555555
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
            
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="midDark--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title 
                      :class="$vuetify.breakpoint.smAndDown ? 'subheading' : 'title'"
                    >
                      email@email.com
                    </v-list-tile-title>
                  </v-list-tile-content>
      </v-list-tile>        
    </v-list>
</template>

<script>
export default {}
</script>

<style scoped>
.v-list__tile__content {
  flex: 0 1 auto;
}
</style>
