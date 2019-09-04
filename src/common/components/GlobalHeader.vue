<template>
  <v-toolbar height="36" class="primary global-header" :flat="true">
    <div class="logo" :style="logo" alt="logo" />
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <span class="action-btn">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <span>Modules</span>
      </span>
      <notifications />
      <span class="action-btn">
        <v-avatar
          size="36px"
          slot="activator"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt=""
            v-if="message.avatar"
          >
          <v-icon :color="message.color" v-else>{{ message.icon }}</v-icon>
        </v-avatar>
        <span class="title-case">{{ userFullName }}</span>
      </span>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'global-header',
  data: function () {
    return {
      message: {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        color: '#333'
      }
    }
  },
  computed: {
    logo: function () {
      return this.$store.getters.getLogo
    },
    userFullName: function () {
      return this.$store.getters.getUserFullName
    }
  }
}
</script>

<style scoped>
  .action-btn {
    margin: 0 0 0 20px;
    white-space: nowrap;
    height: inherit;
  }
  .title-case {
    text-transform: none;
  }
  .logo {
    height: 36px;
    width: 100%;
  }
  .btn {
    color: #FFF;
  }
</style>
