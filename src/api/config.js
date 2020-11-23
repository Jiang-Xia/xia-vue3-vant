
const getConfig = () => {
  const config = {}
  for (const k in window.BASECONFIG) {
    config[k] = ''
  }
  return config
}
export default getConfig()
