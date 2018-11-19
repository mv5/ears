export default ({ isDev, env, route, app, error }) => {
  const baseUrl = isDev ? env.localApiHost : env.prodApiHost

  app.getPageData = async () => {
    const pageName = route.name === 'index' ? 'homepage' : route.name

    let { data } = await app.$axios.get(
      `${baseUrl}/pages?slug=${pageName}-${app.i18n.locale}`
    )

    return {
      ...data[0].acf
    }
  }

  app.getSingleByType = async (postType, id) => {
    const { data } = await app.$axios.get(
      `${baseUrl}/${postType}?include=${id}`
    )
    return data.reduce(
      (obj, item) => ({
        single: {
          title: item.title.rendered,
          translations: item.translations,
          ...item.acf
        }
      }),
      {}
    )
  }

  app.getAllByType = async postType => {
    const { data } = await app.$axios.get(
      `${baseUrl}/${postType}?lang=${app.i18n.locale}`
    )

    return {
      [postType]: data.map(item => ({
        id: item.id,
        title: item.title.rendered,
        translations: item.translations,
        ...item.acf
      }))
    }
  }

  app.getSomeByType = async (postType, num) => {
    const { data } = await app.$axios.get(
      `${baseUrl}/${postType}?lang=${app.i18n.locale}&per_page=${num}`
    )

    return data.map(item => ({
      id: item.id,
      title: item.title.rendered,
      translations: item.translations,
      ...item.acf
    }))
  }
}
