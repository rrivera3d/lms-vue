<template>
  <page>
    <v-layout>
      <v-flex xs12 sm12>
        <v-data-table
          :headers='headers'
          :items='getApplications'
          class='elevation-1'
        >
          <template slot='items' slot-scope='props'>
            <td><a @click="navigate(props.item.id)">{{ props.item.firstName + ' ' + props.item.lastName}}</a></td>
            <td>{{ props.item.region }}</td>
            <td>{{ props.item.loanAmount | currency }}</td>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.referralAgent }}</td>
            <td>{{ props.item.updatedAt | date }}</td>
            <td><v-btn color="info" @click="approve(props.item.id)">Approve</v-btn></td>
          </template>
          <template slot="pageText" slot-scope="props">
            From {{ props.pageStart }} to {{ props.pageStop }}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </page>
</template>

<script>
import moment from 'moment'
import accounting from 'accounting'
export default {
  filters: {
    date: function (date) {
      return moment(date).format('MMM Do YYYY, h:mm:ss a')
    },
    currency: function (amount) {
      return accounting.formatMoney(amount)
    }
  },
  data () {
    return {
      name: 'applications',
      itemsLength: 25,
      headers: [
        {
          text: 'Primary Applicant',
          align: 'left',
          sortable: true,
          value: 'firstName'
        },
        { text: 'Region', value: 'region', align: 'left' },
        { text: 'Loan Amount', value: 'loanAmount', align: 'left' },
        { text: 'Status', value: 'status', align: 'left' },
        { text: 'Referrer', value: 'referralAgent', align: 'left' },
        { text: 'Updated on', value: 'updatedAt', align: 'left' },
        { text: '', value: null, sortable: false }
      ]
    }
  },
  methods: {
    approve: function (id) {
      this.$store.dispatch('approveApplication', id)
    },
    navigate: function (id) {
      this.$router.push({ path: `/applications/${id}` })
    }
  },
  mounted: function () {
    this.$store.dispatch('requestApplications')
  },
  computed: {
    getApplications () {
      return this.$store.getters.getApplications
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
