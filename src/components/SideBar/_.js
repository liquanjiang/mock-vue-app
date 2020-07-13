import menu from '@/util/constant'

export default {
  name: 'SideBar',
  data() {
    return {
      menus: menu.menus,
    }
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    },
    jump(item, menu) {
      this.$router.push({ name: menu.url }).then(r => {})
    }
  }
}
