<template>
  <v-tabs slider-color="secondary" height="36">
    <v-tab key="lastVisited" class="normal-case" ripple >
      Last 10
    </v-tab>
    <v-tab key="mostVisited" class="normal-case" ripple >
      Most Viewed
    </v-tab>

    <v-tab-item key="lastVisited" class="content-max-height">
      <v-card flat>
        <v-list two-line>
          <template v-for="(item, index) in latestBookmarks">
            <v-divider :key="index"></v-divider>
            <v-list-tile avatar :key="item.id" @click="navigate(item.appId)">
              <v-list-tile-content>
                <v-list-tile-title v-html="item.primaryApplicant"></v-list-tile-title>
                <v-list-tile-sub-title>{{ item.created | date }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-tab-item>

    <v-tab-item key="mostVisited" class="content-max-height">
      <v-card flat>
        <v-list>
          <template v-for="(item, index) in getMostVisited">
            <v-divider :key="index"></v-divider>
            <v-list-tile avatar :key="item.id" @click="navigate(item.appId)">
              <v-avatar class="secondary" :size="36">
                <span class="white--text subtitle">{{ item.count }}</span>
              </v-avatar>
              <v-list-tile-content>
                <v-list-tile-title><span class="space">{{ item.primaryApplicant }}</span></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-tab-item>

  </v-tabs>
</template>

<script>
import moment from 'moment'
export default {
  name: 'app-bookmarks',
  filters: {
    date: function (date) {
      return moment(date).format('MMM Do YYYY, h:mm:ss a')
    }
  },
  methods: {
    navigate: function (id) {
      this.$router.push({ path: `/applications/${id}` })
    }
  },
  computed: {
    bookmarks: function () {
      return this.$store.getters.getAppBookmarks
    },
    getMostVisited: function () {
      return this.$store.getters.getMostVisited
    },
    latestBookmarks: function () {
      return this.$store.getters.getLatestAppBookmarks
    }
  }
}
</script>

<style scoped>
  .space {
    margin: 0 15px;
  }
  .normal-case {
    text-transform: none;
  }
  .content-max-height {
    height: 180px;
    overflow-y: auto;
  }
</style>
