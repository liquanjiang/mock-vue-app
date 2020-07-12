import mock from './mock'
import * as R from 'ramda'

export default {
  name: 'login',
  components: {},
  data() {
    return {
      userName: '', // 用户名
      password: '', // 密码
    }
  },
  methods: {
    // 登录事件
    login() {
      const { userName, password } = this

      if (!userName) {
        this.$message.warning('请输入用户名')
        return false
      }

      if (!userName) {
        this.$message.warning('请输入密码')
        return false
      }

      const { userNames, passwords } = mock
      console.log(mock)
      console.log(userNames)
      console.log(passwords)
      if (userNames.includes(userName) && passwords.includes(password)) {
        this.$router.push('/home').then(r => {
        })
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)
      } else {
        this.$message.warning('请输入正确的用户名和密码')
        localStorage.removeItem('userName')
        localStorage.removeItem('password')
      }
    }
  }
}
