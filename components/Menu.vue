<template>
    <div class="menu">
        <ul class="desktop hidden-sm-and-down">
            <nuxt-link class="link" to="/problems" tag="li">{{ $t('links.problems')}}</nuxt-link>
            <nuxt-link class="link" to="/surgeries" tag="li">{{ $t('links.surgeries')}}</nuxt-link>
            <nuxt-link class="link" to="/blog" tag="li">{{ $t('links.blog')}}</nuxt-link>
            <nuxt-link class="link" to="/about" tag="li">{{ $t('links.about')}}</nuxt-link>
        </ul>

        <v-menu 
            class="mobile hidden-md-and-up"
        >
            <v-btn
                slot="activator"
                icon
            >
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile>
                    <nuxt-link class="link" to="/problems" tag="li">{{ $t('links.problems')}}</nuxt-link>
                </v-list-tile>
                <v-list-tile>
                    <nuxt-link class="link" to="/surgeries" tag="li">{{ $t('links.surgeries')}}</nuxt-link>
                </v-list-tile>
                <v-list-tile>
                    <nuxt-link class="link" to="/blog" tag="li">{{ $t('links.blog')}}</nuxt-link>
                </v-list-tile>
                <v-list-tile>
                    <nuxt-link class="link" to="/about" tag="li">{{ $t('links.about')}}</nuxt-link>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>

</template>

<script>
export default {}
</script>

<style scoped>
.desktop {
  display: flex;
  list-style-type: none;
}
.link {
  margin: 0 20px;
  cursor: pointer;
}
.menu{
    display: flex;
    align-items: center;
}
@media (max-width: 980px) {
  .v-menu__content {
      top: 56px !important;
      left: 0 !important;
  }
}
</style>
