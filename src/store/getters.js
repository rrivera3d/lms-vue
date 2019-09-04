import _ from 'lodash'
import config from '../config'

export const getApplications = state => {
  return state.data.applications.results
}

export const getTotalApplications = state => {
  return state.data.applications.results.length
}

export const getApplication = state => {
  return state.data.application
}

export const getMostVisited = state => {
  const { bookmarks } = state
  const groups = _.groupBy(bookmarks, 'appId')
  const mostVisited = Object.keys(groups).map(function (id) {
    let application = groups[id]
    return {
      count: application.length,
      ...application[0]
    }
  })

  return _.sortBy(mostVisited, 'count')
    .reverse()
    .slice(0, 10)
}

export const getLatestAppBookmarks = state => {
  const max = 3
  const end = state.bookmarks.length
  const start = end - max
  return (start < 1) ? state.bookmarks.reverse() : state.bookmarks.slice(start, end).reverse()
}

export const getMessage = state => {
  return state.uiControls.message
}

export const showMessage = state => {
  return state.uiControls.showMessage
}

export const getNotifications = state => {
  return state.notification.messages.reverse()
}

export const getTotalNotifications = state => {
  const total = state.notification.messages.length
  return total > 0 ? total : ''
}

export const getUserFullName = state => {
  const { firstName, lastName } = state.session
  return [firstName, lastName].join(' ')
}

export const getLogo = state => {
  const { theme } = config
  const { company } = state.session
  return theme[company].logo
}
