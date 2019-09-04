<template>
  <v-app id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import Vue from 'vue'
import $store from './store/'
import config from './config'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

export default {
  name: 'App',
  created: function () {
    Vue.use(Vuetify, {
      theme: this.theme
    })
  },
  computed: {
    theme: function () {
      let company = $store.state.session.company || 'progressa'
      let themePalette = config.theme[company].palette
      return {
        primary: themePalette.primary.main,
        secondary: themePalette.secondary.main,
        accent: themePalette.secondary.main,
        error: themePalette.error.main,
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50'
      }
    }
  },
  watch: {
    theme: function (newTheme) {
      this.$vuetify.theme.primary = newTheme.primary
      this.$vuetify.theme.secondary = newTheme.secondary
      this.$vuetify.theme.accent = newTheme.accent
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded">
  html, body, #app, .application--wrap, main {
    height: 100%;
    display: block;
    overflow: hidden;
    font-size: 14px;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  #app,
  .theme--light .tabs__bar.light-grey {
    background-color: #FAFAFA;
  }

  #app {
    font-family: 'Lato', sans-serif;
    font-size: 16px;

    .global-header {
      color: #FFF;
      padding: 4px 0;
    }

    .expansion-panel__header {
      padding: 8px 16px;

      svg {
        margin: 0 8px 0 0;
      }
    }

    .page {
      display: flex;
      height: 100%;
      overflow: hidden;
      position: relative;
      flex-direction: column;

      > main {
        flex: 1;
        position: relative;
        display: block;
        overflow: hidden;
        align-items: stretch;

        .main-container {
          flex: 1 auto;
          overflow-y: auto;
          height: 100%;
          padding: 16px;
        }
      }
    }
  }
</style>
