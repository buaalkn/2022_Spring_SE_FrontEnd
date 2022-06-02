<template>
  <div class="main">
    <div class="main-right">
      <div class="title">我的账户信息</div>
      <p>如需要注销账户，请拨打110联系客服李康宁</p>
      <div class="tab">
        <span class="actTap">修改用户名</span>
      </div>
      <form>
        <ul class="change-pwd">
          <li>
            <span>输入新昵称：</span>
            <input
              type="text"
              name="newName"
              id="newName"
              placeholder="请输入昵称"
              v-model="newUsername"
            />
          </li>
        </ul>
        <li>
          <span></span>
          <a class="submit-btn" @click="updateName" style="margin-left:100px">保存修改</a>
        </li>
      </form>
      <div class="tab">
        <span class="actTap">修改密码</span>
      </div>
      <form>
        <ul class="change-pwd">
          <li>
            <span>设置新密码：</span>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="请输入新密码"
              v-model="newPassword"
            />
          </li>
          <li>
            <span>确认新密码：</span>
            <input
              type="password"
              name="newPassword1"
              id="newPassword1"
              placeholder="确认新密码"
              v-model="newPassword1"
            />
          </li>
          <li>
            <span></span>
            <a @click="updatePwd" class="submit-btn">保存修改</a>
          </li>
        </ul>
      </form>
    </div>
    <li style="margin-top: 30px">
      <a class="logout-btn" @click="logout" style="background-color:#545c64;">退出登录</a>
    </li>
  </div>
</template>

<script>
export default {
  name: "TenantMessage",

  data() {
    return {
      //用户名
      username: user_name(),
      //新昵称
      newUsername: "",
      //新密码
      newPassword: "",
      //确认新密码
      newPassword1: "",
    };
  },

  methods: {
    //退出登录
    async logout() {
      //发请求通知服务器【清除数据】
      //清除项目中的本地存储的数据
      try {
        //如果退出成功
        await this.$store.dispatch("userLogout");
        alert("您已成功退出登录");
        //回到首页
        this.$router.push({ name: "home" });
        //自动刷新
        this.$router.go(0);
      } catch (error) {}
    },

    //修改用户名
    async updateName() {
      try {
        const { username, newUsername } = this;
        if(!newUsername)  alert("请输入昵称");
        else{
          await this.$store.dispatch("updateName", { username, newUsername });
          alert("修改用户名成功,请您重新登录");
          //退出登录
          this.$store.dispatch("userLogout");
          //跳转到Home首页
          this.$router.push({name:"home"});
          //自动刷新
          this.$router.go(0);
        }
      } catch (error) {}
    },

    //修改密码
    async updatePwd() {
      try {
        const { username, newPassword, newPassword1 } = this;
        if(!newPassword)  alert("请输入新密码");
        else if(!newPassword1)  alert("请确认新密码");
        else{
          await this.$store.dispatch("updatePwd", { username, newPassword, newPassword1 });
          alert("修改密码成功,请您重新登录");
          //退出登录
          this.$store.dispatch("userLogout");
          //跳转到Home首页
          this.$router.push({name:"home"});
          //自动刷新
          this.$router.go(0);
        }
      } catch (error) {}
    },
  },
  computed: {
    //用户名信息
    user_name() {
      return this.$store.state.user.username;
    },
  },
};
</script>

<style scoped>
body {
  font-size: 14px;
  color: #101d37;
  font-family: "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "微软雅黑", "Segoe UI", Tahoma, "宋体b8b\4f53", SimSun, sans-serif;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,
div,
p {
  margin: 0;
  padding: 0;
}
div {
  display: block;
}
p {
  text-align: left;
}
form {
  display: block;
  margin-top: 0em;
}
input,
textarea,
button {
  margin: 0;
  padding: 0;
  outline: none;
  resize: none;
  font-family: "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei";
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.main .main-right p {
  font-size: 12px;
  line-height: 30px;
  color: #9399a5;
}
.main {
  width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}

.main-right {
  -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%);
  padding: 35px;
  background-color: #fff;
  border: 1px solid #e6e5e5;
  width: 755px;
  margin-left: 90px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}
.tab {
  margin-top: 20px;
  background-color: #f8f8f9;
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
}
.tab span {
  float: left;
  padding: 0 25px;
  font-size: 14px;
  color: #888;
  cursor: pointer;
}
.main .main-right .change-pwd span {
  width: 95px;
  display: inline-block;
  font-size: 14px;
}
.main .main-right .change-pwd li {
  padding-top: 15px;
}
.main .main-right .change-pwd input {
  width: 237px;
  height: 38px;
  border: 1px solid #c8c8c8;
  padding: 0 5px;
}
.main .main-right li {
  clear: both;
  padding-top: 30px;
}
.submit-btn,
.logout-btn {
  width: 240px;
  height: 40px;
  padding: 0 5px;
  background-color:#888;
  cursor: pointer;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  display: inline-block;
  font-size: 14px;
  *display: inline;
  *zoom: 1;
}
</style>