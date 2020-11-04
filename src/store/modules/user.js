import { handleLogin, handleUserInfo, handleLoginout } from '@/api/login.js'
import { globalConfigs } from '@/api/common'
import storage from '@/utils/storage'
import { setToken, getToken, setInfo, removeToken, setExpires } from '@/utils/cookie'
import { resetRouter } from '@/router'

export default {
  namespaced: true,
  state: {
    userInfo: '',
    token: '',
    roles: [],
    globalConfigs: {}
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_GLOBAL_CONFIGS: (state, globalConfigs) => {
      state.globalConfigs = globalConfigs
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        handleLogin(userInfo).then(response => {
          // const { credentials } = response
          const { access_token, expires_in, token_type } = response
          const expires_in_time = expires_in * 1000
          // console.log(response)
          // expires_in 后台实际到期时间比前端晚5分钟
          setToken(token_type, access_token, expires_in_time)
          setExpires(expires_in_time)
          commit('SET_TOKEN', getToken())
          resolve(true)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        Promise.all([handleUserInfo(), globalConfigs()]).then(res => {
          const { user_type } = res[0]
          commit('SET_USER_INFO', res[0])
          commit('SET_ROLES', [user_type])
          setInfo(res[0])
          commit('SET_GLOBAL_CONFIGS', res[1].data)
          storage.local.set('global_config', res[1].data)
          resolve(res)
        }).catch(err=>reject(err))
      })
    },
    getGlobalConfigs({ commit }) {
      return new Promise((resolve, reject) => {
        globalConfigs().then(res => {
          commit('SET_GLOBAL_CONFIGS', res.data)
          storage.local.set('global_config', res.data)
          resolve(res.data)
        }).catch((err) => { reject(err) })
      })
    },
    // 用户退出
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        handleLoginout({ access_token: state.token }).then((res) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resetRouter()
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 清除token
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    }
  }
}
