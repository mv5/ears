<template>
    <div class="menu">
        <ul class="desktop hidden-sm-and-down">
            <nuxt-link 
                v-for="(link, index) in links"
                :key="index"
                class="link" 
                :to="`/${link}`"
                tag="li">
                    {{ $t(`links.${link}`)}}
            </nuxt-link>
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
                <v-list-tile class="tile" v-for="(link, index) in links" :key="index">
                    <nuxt-link class="link" :to="`/${link}`">{{ $t(`links.${link}`)}}</nuxt-link>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>

</template>

<script>
export default {
    data(){
        return {
            links: [
                'about', 'surgeries', 'problems', 'blog'
            ]
        }
    }
}
</script>

<style scoped>
.desktop {
  display: flex;
  list-style-type: none;
}
.link {
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 20px;
}
.link:hover{
    background-color: #EFE7AC;
}
.menu{
    display: flex;
    align-items: center;
}
@media (max-width: 980px) {
  .v-menu__content {
    top: 56px !important;
  }
  .link{
    margin: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
