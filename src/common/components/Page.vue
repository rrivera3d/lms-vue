<template>
  <div class="page">
    <global-header />
    <local-header />
    <main>
      <div class="main-container">
        <slot></slot>
      </div>
    </main>
    <v-snackbar
      :timeout="5000"
      :bottom="true"
      :left="true"
      v-model="showMessage"
    >
      {{ message }}
      <v-btn flat color="pink" @click.native="hideMessage">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import $store from '../../store'
export default {
  name: 'page',
  // data: function () {
  //   throw Error('test')
  // },
  methods: {
    hideMessage () {
      $store.dispatch('hideMessage')
    }
  },
  computed: {
    message () {
      return $store.getters.getMessage
    },
    showMessage () {
      return $store.getters.showMessage
    }
  }
}
</script>

<style scoped>

</style>
