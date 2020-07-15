import menu from '@/util/constant'

export default {
  name: 'SideBar',
  data() {
    return {
      menus: menu.menus,
      openList: [],
      defaultActive: ''
    }
  },
  created() {
    console.log(this.menus)
    console.log(this.$route)
    this.defaultActive = this.$route.name
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    },
    jump(item, menu) {
      this.$router.push({ name: menu.url }).then(() => {
      })
    }
  }
}
