<template>
  <v-toolbar height="36" class="local-header elevation-1">
    <v-menu offset-y>
      <v-toolbar-side-icon class="icon" slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in navItems" :key="item.id" @click="navigate(item.id)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="switchUser('rogers')">
          <v-list-tile-title>Log in as Rogers CSR</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="switchUser('telus')">
          <v-list-tile-title>Log in as Telus Guy</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="switchUser('progressa')">
          <v-list-tile-title>Log in as Progressa</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logOut">
          <v-list-tile-title>Log out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <!--<v-toolbar-items>-->
      <!--<v-btn flat>Link One</v-btn>-->
      <!--<v-btn flat>Link Two</v-btn>-->
      <!--<v-btn flat>Link Three</v-btn>-->
    <!--</v-toolbar-items>-->
  </v-toolbar>
</template>

<script>
import $store from '../../store'
import config from '../../config'
export default {
  name: 'local-header',
  data: function () {
    return {
      logo: config.theme.progressa.logo,
      navItems: [
        {
          id: 'dashboard',
          title: 'Dashboard'
        },
        {
          id: 'applications',
          title: 'Applications'
        }
      ]
    }
  },
  methods: {
    logOut: function () {
      console.log('>>> log out')
    },
    navigate: function (id) {
      this.$router.push({ name: id })
    },
    switchUser: function (id) {
      $store.dispatch('switchUser', id)
    }
  }
}
</script>

<style scoped>
  .local-header {
    padding: 4px 0;
    background-color: white;
    z-index: 1;
  }
</style>
