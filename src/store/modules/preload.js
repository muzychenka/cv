export default {
  state: {
    images: [
      {
        name: 'background',
        path: './img/background.png'
      },
      {
        name: 'defaultPhoto',
        path: './img/me.jpg'
      },
      {
        name: 'glitchedPhoto',
        path: './img/me.gif'
      }
    ]
  },
  mutations: {
    setLoadedImage (state, data) {
      const { index, image } = data
      state.images[index].image = image
    }
  },
  actions: {
    setLoadedImage ({ commit }, data) {
      commit('setLoadedImage', data)
    }
  }
}
