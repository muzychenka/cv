export default {
  methods: {
    getCachedImage (name) {
      const element = this.$store.state.preload.images.find(image => image.name === name).image
      return element ?? {}
    }
  }
}
