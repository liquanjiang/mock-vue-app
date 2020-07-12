export default {
  name: 'header',
  data() {
    return {}
  },
  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('/login')
    }
  }
}
