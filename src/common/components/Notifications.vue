<template>
  <span class="action-btn">
    <v-menu offset-y max-height="400" :close-on-content-click="false">
      <v-btn icon slot="activator" color="white--text">
         <v-badge :color="totalNotifications > 0 ? 'red' : ''" :overlap="true">
          <span slot="badge" class="caption">{{ totalNotifications }}</span>
          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>
      <v-data-table
        :items="notifications"
        :headers="headers"
        class="elevation-1"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.message }}</td>
          <td>{{ props.item.created | date }}</td>
          <td class="text-xs-right">
            <v-btn flat fab class="normal-case" @click="remove(props.item.id)">
              <v-icon>fas fa-times-circle</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-menu>
    <span>Notifications</span>
  </span>
</template>

<script>
import moment from 'moment'
export default {
  name: 'notifications',
  filters: {
    date: function (date) {
      return moment(date).format('MMM Do YYYY, h:mm:ss a')
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Messages',
          sortable: false,
          value: 'message'
        },
        {
          text: 'Time',
          sortable: false,
          value: 'created'
        },
        {
          text: '',
          sortable: false
        }
      ]
    }
  },
  methods: {
    remove: function (id) {
      this.$store.dispatch('removeNotification', id)
    }
  },
  computed: {
    notifications: function () {
      return this.$store.getters.getNotifications
    },
    totalNotifications: function () {
      return this.$store.getters.getTotalNotifications
    }
  }
}
</script>

<style scoped>
  .normal-case {
    text-transform: none;
    height: 36px;
    width: 36px;
  }
  .normal-case svg {
    font-size: 16px;
    height: 16px;
    width: 16px;
  }
</style>
