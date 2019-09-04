<template>
  <page class="dashboard">
    <v-layout>
      <v-flex xs12 sm12>
        <v-card class="card" height="300">
          <v-card-title primary-title>
            <i class="fas fa-list" />&nbsp;
            Application Repository
          </v-card-title>
          <v-card-text class="primary--text display-4 center">
            <router-link :to="{ path: 'applications' }">{{ totalApplications }}</router-link>
          </v-card-text>
        </v-card>
        <v-card class="card" height="300">
          <v-card-title primary-title>
            <i class="fas fa-bookmark" />&nbsp;
            Bookmarked Applications
          </v-card-title>
          <app-bookmarks />
        </v-card>
        <v-card class="card" height="300">
          <v-card-title primary-title>
            <i class="fas fa-certificate" />&nbsp;
            Scorecard Repository
          </v-card-title>
          <v-card-text class="primary--text display-4 center">
            8
          </v-card-text>
        </v-card>
        <v-card class="card" height="300">
          <v-card-title primary-title>
            <i class="fas fa-money-bill-alt" />&nbsp;
            Loan Management System
          </v-card-title>
          <v-card-text class="primary--text display-4 center">
            2
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </page>
</template>

<script>
export default {
  name: 'dashboard',
  mounted: function () {
    this.$store.dispatch('requestApplications')
  },
  computed: {
    // a computed getter
    totalApplications () {
      return this.$store.getters.getTotalApplications
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: 0 16px 16px 0;
    display: inline-block;
    width: 300px;
    height: 300px;
    overflow-y: auto;
  }
  .center {
    text-align: center;
    padding: 30px 0;
  }
  .card a {
    text-decoration: none;
  }
</style>
