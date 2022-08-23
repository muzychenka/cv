export default {
  methods: {
    slideLeft () {
      let index = this.getViewIndex()
      if (!isNaN(index)) {
        if (index === 0) this.$router.push(this.links[this.links.length - 1].path)
        else this.$router.push(this.links[--index].path)
      }
    },
    slideRight () {
      let index = this.getViewIndex()
      if (!isNaN(index)) {
        if (index === this.links.length - 1) this.$router.push(this.links[0].path)
        else this.$router.push(this.links[++index].path)
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
