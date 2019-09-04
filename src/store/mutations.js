import _ from 'lodash'
import moment from 'moment'

const updateApplication = (state, data) => {
  const i = _.findIndex(state.data.applications.results, {id: data.id})
  state.data.applications.results.splice(i, 1, data)
}

// GET APPLICATIONS

export const GET_APPLICATIONS_PENDING = (state) => {
  state.data.applications = { results: [] }
}

export const GET_APPLICATIONS_SUCCESS = (state, data) => {
  state.data.applications = data
}

export const GET_APPLICATIONS_FAILURE = (state, error) => {
  const { response } = error
  const { status, statusText } = response
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    showMessage: true,
    message: response.data.message || [status, statusText].join(' '),
    severity: 'error'
  })
}

// GET APPLICATION

export const GET_APPLICATION_PENDING = (state) => {
  state.data.application = {}
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    isLoading: true
  })
}

export const GET_APPLICATION_SUCCESS = (state, data) => {
  state.data.application = {...data}
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    isLoading: false
  })

  const maxCount = 50
  if (state.bookmarks.length >= maxCount) {
    state.bookmarks.shift()
  }

  state.bookmarks.push({
    id: moment().unix(),
    appId: data.id,
    created: moment().toISOString(),
    path: `/applications/${data.id}`,
    primaryApplicant: `${data.firstName} ${data.lastName}`
  })
}

export const GET_APPLICATION_FAILURE = (state, error) => {
  const { response } = error
  const { status, statusText } = response
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    showMessage: true,
    message: response.data.message || [status, statusText].join(' '),
    severity: 'error'
  })
}

// APPROVE APPLICATION

export const APPROVE_APPLICATION_PENDING = (state) => state

export const APPROVE_APPLICATION_SUCCESS = (state, data) => {
  updateApplication(state, data)
}

export const APPROVE_APPLICATION_FAILURE = (state, error) => {
  const { response } = error
  const { status, statusText } = response
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    showMessage: true,
    message: response.data.message || [status, statusText].join(' '),
    severity: 'error'
  })
}

// NOTIFICATIONS

export const ADD_NOTIFICATION = (state, payload) => {
  state.notification.messages.push(payload)
}

export const REMOVE_NOTIFICATION = (state, id) => {
  const index = _.findIndex(state.notification.messages, {id: id})
  state.notification.messages.splice(index, 1)
}

// COMMON

export const HIDE_MESSAGE = (state) => {
  state.uiControls = Object.assign({}, {...state.uiControls}, {
    showMessage: false,
    message: '',
    severity: null
  })
}

export const SWITCH_USER = (state, company) => {
  let firstName, lastName
  switch (company) {
    case 'rogers':
      firstName = 'CSR'
      lastName = 'User'
      break
    case 'telus':
      firstName = 'Telus'
      lastName = 'Guy'
      break
    default:
      firstName = 'Ryan'
      lastName = 'Rivera'
      break
  }
  state.session = {...state.session, company, firstName, lastName}
}
