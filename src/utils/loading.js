import { Toast } from 'vant'
let loadingInstance = null
export const openLoading = function(text = '拼命加载中') {
  loadingInstance = Toast.loading({
    message: text,
    forbidClick: true
  })
}
export const closeLoading = function() {
  if (loadingInstance) {
    const timer = setTimeout(() => {
      loadingInstance.clear()
      clearTimeout(timer)
    }, 1000)
  }
}
