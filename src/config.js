import themeProgressa from './themes/progressa'
import themeRogers from './themes/rogers'
import themeTelus from './themes/telus'

export default {

  rootDOM: 'root',

  /**
   * Storage Persistence Config
   */
  persistKey: 'workflowStore',
  persistWhitelist: ['session', 'bookmarks', 'notification'],

  /**
   * WebSockets
   */
  wsUrl: 'ws://localhost:5000',

  /**
   * Theme Config
   * Material Color Tool: https://material.io/color
   * given a base color, other shades can be generated
   */
  theme: {
    progressa: themeProgressa,
    rogers: themeRogers,
    telus: themeTelus
  }
}
