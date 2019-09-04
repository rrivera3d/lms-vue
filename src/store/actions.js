import axios from 'axios'

export const requestApplications = (store) => {
  // sets `state.loading` to true. Show a spinner or something.
  store.commit('GET_APPLICATIONS_PENDING')

  return axios.get('/api/applications')
    .then(response => {
      // sets `state.loading` to false
      // also sets `state.apiData to response`
      store.commit('GET_APPLICATIONS_SUCCESS', response.data)
    })
    .catch(error => {
      // set `state.loading` to false and do something with error

      store.commit('GET_APPLICATIONS_FAILURE', error)
    })
}

export const requestApplication = (store, id) => {
  // sets `state.loading` to true. Show a spinner or something.
  store.commit('GET_APPLICATION_PENDING')

  return axios.get('/api/applications/' + id)
    .then(response => {
      // sets `state.loading` to false
      // also sets `state.apiData to response`
      store.commit('GET_APPLICATION_SUCCESS', response.data)
    })
    .catch(error => {
      // set `state.loading` to false and do something with error

      store.commit('GET_APPLICATION_FAILURE', error)
    })
}

export const approveApplication = (store, id) => {
  // sets `state.loading` to true. Show a spinner or something.
  store.commit('APPROVE_APPLICATION_PENDING')

  return axios.post('/api/applications/' + id + '/approve')
    .then(response => {
      // sets `state.loading` to false
      // also sets `state.apiData to response`
      store.commit('APPROVE_APPLICATION_SUCCESS', response.data)
    })
    .catch(error => {
      // set `state.loading` to false and do something with error
      store.commit('APPROVE_APPLICATION_FAILURE', error)
    })
}

export const hideMessage = store => store.commit('HIDE_MESSAGE')

export const addNotification = (store, payload) => store.commit('ADD_NOTIFICATION', payload)

export const removeNotification = (store, id) => store.commit('REMOVE_NOTIFICATION', id)

export const switchUser = (store, id) => store.commit('SWITCH_USER', id)
