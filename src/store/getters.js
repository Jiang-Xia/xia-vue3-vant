// import { getInfo } from './utils/cookie'
function getInfo(){
  
}
const getters = {
  /* 用户 */
  userInfo: state => state.user.userInfo || getInfo(),
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  globalConfigs: state => state.user.globalConfigs,
  hospCode: state => state.user.globalConfigs.hosp_config.global_hospital_code,

  /* 新版本系统 */
  search_condition: state => state.home.search_condition,
  disease_list: state => state.home.disease_list,
  taskData: state => state.home.taskData,
  research_name: state => state.research.research_name, // 科研名称

  /* 新版本患者 详情页 */
  isEditing: state => state.DataDetail.isEditing,
  modifyObj: state => state.DataDetail.modifyObj,
  nodeInfo: state => state.DataDetail.nodeInfo,
  time_line_list: state => state.DataDetail.time_line_list,
  loadingTimeline: state => state.DataDetail.loadingTimeline, // 加载时间轴,
  metaTemplateList: state => state.DataDetail.meta_template_list,
  analyticalData: state => state.DataDetail.analyticalData, // 解析数据
  pageParams: state => state.DataDetail.pageParams

}
export default getters
