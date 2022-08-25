export default {
  methods: {
    getCachedImage (name) {
      return this.$store.state.preload.images.find(image => image.name === name).image ?? {}
    }
  }
}
