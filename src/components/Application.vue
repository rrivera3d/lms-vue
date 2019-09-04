<template>
  <page>
    <v-layout>
      <v-flex v-show="!fullscreen" xs4 sm4 style="padding-right: 16px">

        <v-expansion-panel class="expansion">
          <v-expansion-panel-content>
            <div slot="header"><i class="fas fa-filter" />Application: {{ application.status }}</div>
            <v-card>
              <v-divider></v-divider>
              <v-card-text>Application History</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="expansion" v-for="client in application.clients" :key="client.id">
          <v-expansion-panel-content>
            <div slot="header"><i class="fas fa-user" />{{ [client.firstName, client.lastName].join(' ') }}</div>
            <v-card>
              <v-divider></v-divider>
              <v-card-text>Applicant Details. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-flex>
      <v-flex>

        <v-expansion-panel v-show="!fullscreen" class="expansion">
          <v-expansion-panel-content>
            <div slot="header"><i class="fas fa-file-alt" />Add a quick note</div>
            <v-card>
              <v-divider></v-divider>
              <v-card-text>
                <v-text-field
                  name="addNote"
                  multi-line
                  autofocus
                  counter="50"
                ></v-text-field>
                <v-btn color="primary">Add note</v-btn>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <div class="main">
          <v-tabs slider-color="secondary" color="light-grey">

            <v-tab key="loans" class="normal-case" ripple>Loans</v-tab>
            <v-tab key="documents" class="normal-case" ripple :class="hasDocuments ? '' : 'disabled'">Documents
              <v-avatar v-if="hasDocuments" class="secondary" :size="24">
                <span class="white--text caption">{{ application.documents.length }}</span>
              </v-avatar>
            </v-tab>
            <v-tab key="notes" class="normal-case" ripple :class="hasNotes ? '' : 'disabled'">Notes
              <v-avatar v-if="hasNotes" class="secondary" :size="24">
                <span class="white--text caption">{{ application.notes.length }}</span>
              </v-avatar>
            </v-tab>
            <v-tab key="emails" class="normal-case" ripple :class="hasEmails ? '' : 'disabled'">Emails
              <v-avatar v-if="hasEmails" class="secondary" :size="24">
                <span class="white--text caption">{{ application.emails.length }}</span>
              </v-avatar>
            </v-tab>

            <v-tab-item key="loans">
              <v-card class="sub-card">
                <v-toolbar flat color="white">
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn flat fab class="toolbar-btn fullscreen" v-show="!fullscreen" @click="toggleFullscreen">
                      <v-icon>fas fa-external-link-square-alt</v-icon>
                    </v-btn>
                    <v-btn flat fab class="toolbar-btn fullscreen" v-show="fullscreen" @click="toggleFullscreen">
                      <v-icon>fas fa-compress</v-icon>
                    </v-btn>
                    <v-btn flat fab class="toolbar-btn" color="primary"><v-icon>fas fa-align-justify</v-icon></v-btn>
                    <v-btn flat fab class="toolbar-btn"><v-icon>fas fa-th-list</v-icon></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-expansion-panel expand>
                  <v-expansion-panel-content>
                    <div slot="header">Credit scores</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">Cash flow</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">Risk assessment</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">Loan request</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">Loan assessment</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <div slot="header">Funding</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card>
            </v-tab-item>

            <v-tab-item key="documents">
              <v-card class="sub-card">
                <v-toolbar flat color="white">
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn flat class="normal-case toolbar-btn" @click.stop="docDialog = true"><v-icon>fas fa-plus-circle</v-icon>&nbsp;Add new</v-btn>
                    <v-btn flat fab class="toolbar-btn fullscreen" v-show="!fullscreen" @click="toggleFullscreen">
                      <v-icon>fas fa-external-link-square-alt</v-icon>
                    </v-btn>
                    <v-btn flat fab class="toolbar-btn fullscreen" v-show="fullscreen" @click="toggleFullscreen">
                      <v-icon>fas fa-compress</v-icon>
                    </v-btn>
                    <v-btn flat fab class="toolbar-btn" color="primary"><v-icon>fas fa-align-justify</v-icon></v-btn>
                    <v-btn flat fab class="toolbar-btn"><v-icon>fas fa-th-list</v-icon></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-dialog v-model="docDialog" max-width="500px">
                  <v-card>
                    <v-card-title>
                      Add new document
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" flat @click.stop="docDialog=false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-card-text>Documents</v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="notes">
              <v-card class="sub-card"><v-card-text>Notes</v-card-text></v-card>
            </v-tab-item>

            <v-tab-item key="emails">
              <v-card class="sub-card"><v-card-text>Emails</v-card-text></v-card>
            </v-tab-item>

          </v-tabs>
        </div>

      </v-flex>
    </v-layout>

  </page>
</template>

<script>
export default {
  name: 'application',
  data () {
    return {
      fullscreen: false,
      docDialog: false
    }
  },
  errorCaptured (err, vm, info) {
    console.log('>>> error', err, vm, info)
  },
  mounted: function () {
    const { params } = this.$router.currentRoute
    this.$store.dispatch('requestApplication', params.id)
  },
  methods: {
    toggleFullscreen () {
      this.$set(this, 'fullscreen', !this.fullscreen)
    }
  },
  computed: {
    application () {
      return this.$store.getters.getApplication
    },
    hasDocuments () {
      return this.application.documents && this.application.documents.length > 0
    },
    hasNotes () {
      return this.application.notes && this.application.notes.length > 0
    },
    hasEmails () {
      return this.application.emails && this.application.emails.length > 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .disabled {
    pointer-events: none;
  }
  .expansion {
    margin: 0 16px 16px 0;
    display: inline-block;
    width: 100%;
  }
  .sub-card {
    padding: 16px;
    width: calc(100% - 6px);
    margin: 3px;
  }
  .main {
    min-height: 400px;
    width: 100%;
    background-color: transparent;
    display: block;
  }
  .secondary {
    margin: 0 5px;
  }
  .normal-case {
    text-transform: none;
  }
  .toolbar-btn {
    height: 36px;
    width: 36px;
  }
  .toolbar-btn svg {
    font-size: 16px;
    height: 16px;
    width: 16px;
  }
  .light-grey--text {
    color: #EEE;
  }
  .hidden {
    display: none;
    height: 0;
  }
</style>
