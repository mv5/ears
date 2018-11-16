export default ({ isDev, env, app, error }) => {
    const baseUrl = isDev ? env.localApiHost : env.prodApiHost

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

    app.getAllByType = async (postType) => {
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
  }