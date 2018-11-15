<template>
  <div class="lang-container">
    <v-btn class="lang-btn" depressed flat ripple @click="toggleShowSelection">
      <v-img class="lang-img" aspect-ratio="1.33" :src="`/flags/${currLang}.svg`" />
    </v-btn>
    <div class="lang-options" v-if="showSelection" v-click-outside="hide">
      <div class="lang-item" v-for="item in items" :key="item.value" @click="handleLang(item.value)">
        <span class="item-part">{{ item.name }}</span>
        <span class="item-part">
          <v-img class="lang-img" :src="`/flags/${item.value}.svg`" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      showSelection: false,
      items: [
        {
          name: 'English',
          value: 'en'
        },
        {
          name: 'עברית',
          value: 'he'
        }
      ]
    }
  },
  computed: mapState(['currLang']),

  methods: {
    isRtl(lang) {
      switch (lang) {
        case 'en':
        case 'ru':
          return false

        case 'he':
        case 'ar':
          return true
      }
    },
    handleLang(newLang) {
      this.showSelection = false
      this.$store.commit('changeLang', newLang)
      this.$i18n.locale = newLang
      this.$vuetify.rtl = this.isRtl(newLang)
    },
    toggleShowSelection() {
      this.showSelection = !this.showSelection
    },
    hide() {
      this.showSelection = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>
.lang-img {
  height: 24px;
  width: 32px;
  flex: 0 0 auto;
}
.lang-btn {
  padding: 0;
  min-width: 40px;
}
.lang-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.lang-options {
  position: absolute;
  bottom: 0;
  list-style: none;
  background-color: white;
  transform: translateY(100%);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
}
.lang-item {
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  width: 8vw;
  cursor: pointer;
}
.lang-item:hover {
  background-color: rgb(235, 235, 235);
}
.item-part {
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
}
</style>
