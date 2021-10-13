import api from 'zmp-sdk'
import config from '../config'

export const getAccessToken = () => new Promise(resolve => {
  api.login({
    success: () => {
      api.getAccessToken({
        success: (token) => {
          if (token === 'DEFAULT ACCESS TOKEN' && config.ACCESS_TOKEN) {
            // eslint-disable-next-line no-param-reassign
            token = config.ACCESS_TOKEN // For testing purpose only
          }
          resolve(token)
        },
        fail: (error) => {
          console.error(error)
        }
      })
    },
    fail: (error) => {
      console.error(error)
    }
  })
})