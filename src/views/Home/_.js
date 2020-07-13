import SideBar from './../../components/SideBar/index'

export default {
  name: 'Home',
  components: {
    SideBar,
  },
  data() {
    return {
      value: true,
      breadName: '',
    }
  },
  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('/login').then(r => {
      })
    }
  }
}
