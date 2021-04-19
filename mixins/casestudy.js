export default {
  data () {
    return {

    }
  },
  computed: {},
  methods: {
    changeImg (up, count, totalSlides) {
      if (up) {
        count++
        if (count > totalSlides) { count = 1 }
      } else {
        count--
        if (count < 1) { count = totalSlides }
      }
      this.$bus.$emit('countchange', count)
    },
    getImgUrl (name, pic, ext) {
      return require('../assets/cases/' + name + '/' + pic + '.' + ext)
    }
  }
}
