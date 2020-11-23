// import { queryTaskId, queryExportTaskId } from './api/originalDataList'
// import { closeLoading } from './utils/loading'
// import { Message } from 'element-ui'

// export function pollingfn(taskId) {
//   return new Promise((resolve, reject) => {
//     let timer
//     fn(taskId)
//     function fn(taskId) {
//       queryTaskId(taskId).then((res) => {
//         const status = res.data.status
//         if (status === 0) {
//           timer = setTimeout(fn, 1000, taskId)
//         } else if (status === 1) {
//           clearTimeout(timer)
//           resolve(res.data.result)
//           Message.success(res.msg)
//         } else {
//           closeLoading()
//           Message.warning(res.msg)
//         }
//       })
//     }
//   })
// }
// export function pollingExportfn(taskId) {
//   return new Promise((resolve, reject) => {
//     let timer
//     fn(taskId)
//     function fn(taskId) {
//       queryExportTaskId(taskId).then((res) => {
//         const status = res.data.status
//         if (status === 0) {
//           timer = setTimeout(fn, 1000, taskId)
//         } else if (status === 1) {
//           clearTimeout(timer)
//           resolve(res.data.result)
//           Message.success(res.msg)
//         } else {
//           closeLoading()
//           Message.warning(res.msg)
//         }
//       })
//     }
//   })
// }
