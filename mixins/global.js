export default {
  data () {
    return {

    }
  },
  computed: {},
  methods: {
    getImgUrl (name, pic, ext) {
      return require('../assets/cases/' + name + '/' + pic + '.' + ext)
    }
  }
}
