export default ({ isDev, env, route, app, error }) => {
  app.getPageData = async () => {
    const baseUrl = isDev ? env.localApiHost : env.prodApiHost
    const pageName = route.name === 'index' ? 'homepage' : route.name

    let { data } = await app.$axios.get(
      `${baseUrl}/pages?slug=${pageName}-${app.i18n.locale}`
    )

    return {
      ...data[0].acf
    }
  }
}
