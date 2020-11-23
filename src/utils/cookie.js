import Cookies from 'js-cookie'
const TokenKey = 'july_token'
const InfoKey = 'july_info'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(type, token, time) {
  time = new Date(new Date().getTime() + time)
  return Cookies.set(TokenKey, type + ' ' + token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getInfo() {
  const userInfo = Cookies.get(InfoKey)
  if (userInfo) {
    return JSON.parse(unescape(userInfo))
  }
}

export function setInfo(userData) {
  // console.log(userData);
  return Cookies.set(InfoKey, userData)
}

export function removeInfo() {
  return Cookies.remove(InfoKey)
}
