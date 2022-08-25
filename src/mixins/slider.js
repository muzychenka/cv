export default {
  methods: {
    slideLeft () {
      const index = this.getViewIndex()
      if (!isNaN(index)) {
        const isFirstIndex = !index
        this.$router.push(this.links[isFirstIndex ? this.links.length - 1 : index - 1].path)
      }
    },
    slideRight () {
      const index = this.getViewIndex()
      if (!isNaN(index)) {
        const isLastIndex = index === this.links.length - 1
        this.$router.push(this.links[isLastIndex ? 0 : index + 1].path)
      }
    },
    getViewIndex () {
      let index
      this.$store.state.navigation.links.some((element, elementIndex) => {
        if ('/' + element.path === this.$route.path) {
          index = elementIndex
          return true
        }
      })
      return index
    }
  },
  computed: {
    links () {
      return this.$store.state.navigation.links
    }
  }
}
