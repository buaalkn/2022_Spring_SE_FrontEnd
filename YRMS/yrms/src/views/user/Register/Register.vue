<template>
  <body>
    <div id="registerModel" class="register_layer" style="display: block">
      <div class="register_bg"></div>
      <div class="register_panel">
        <div class="register_panel_close">x</div>
        <div class="register_box">
          <div class="register_panel_lable">
            <h2 class="register_panel_title">新用户注册</h2>
            <div class="register_panel_hint">
              <div style="float: right; position: relative; top: 22px">
                已有账号？
                <router-link to="/login">去登录</router-link>
              </div>
            </div>
          </div>
          <form class="form">
            <ul class="input_box">
              <li class="form_input_item" style>
                <input
                  class="phonenum_input"
                  placeholder="请输入用户名"
                  type="text"
                  style="font-size: 15px"
                  v-model="username"
                />
              </li>
              <li class="form_input_item" style>
                <input
                  class="code_input"
                  maxlength="11"
                  placeholder="请输入手机号"
                  type="text"
                  autocomplete="off"
                  style="font-size: 15px"
                  v-model="phone"
                />
              </li>
              <li class="form_input_item" style>
                <input
                  class="code_input"
                  maxlength="6"
                  placeholder="请输入验证码"
                  type="text"
                  autocomplete="off"
                  style="font-size: 15px"
                  v-model="code"
                />
              </li>
              <li class="form_input_item" style>
                <input
                  class="password_type"
                  placeholder="请输入密码"
                  type="password"
                  autocomplete="current-password"
                  style="font-size: 25px"
                  v-model="password"
                />
                <em class="password-view"></em>
              </li>
              <li class="form_input_item" style>
                <input
                  class="password_type"
                  placeholder="请再次输入密码"
                  type="password"
                  autocomplete="current-password"
                  style="font-size: 25px"
                  v-model="password1"
                />
                <em class="password-view"></em>
              </li>
            </ul>
            <div class="login_panel_forget_password">
              <a class="forget_password" href="#" @click="getCode">
                获取验证码
              </a>
            </div>
            <div class="checkbox_protocol">
              <div class="checkbox-btn">
                <input
                  type="checkbox"
                  name="protocol"
                  data-defval="0"
                  data-require="1"
                  unchecked
                  value="0"
                  style="cursor: pointer"
                  :checked="agree"
                />
                <span class="checkbox"></span> 我已阅读并同意
                <a class="link-btn" href="#">《YRMS隐私政策》</a> 及
                <a class="link-btn" href="#">《YRMS用户服务协议》</a>
              </div>
            </div>
            <div class="register_btn" @click="userRegister">注册</div>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      //收集表单数据 
      //用户名
      username:"",
      //手机号
      phone: "",
      //验证码
      code: "",
      //密码
      password: "",
      //确认密码
      password1: "",
      //是否同意协议
      agree: true,
    };
  },
  methods: {
    //获取验证码
    async getCode() {
      //验证有手机号存在的情况下
      try {
        //如果获取到验证码
        const { phone } = this;
        phone && (await this.$store.dispatch("getCode", phone));
        //将组件的code属性值变为仓库的验证码[自动填写]
        console.log(this.$store);
        this.code = this.$store.state.user.code.code;
      } catch (error) {}
    },

    //用户注册
    async userRegister() {
      try {
        //如果成功 路由跳转到登录
        const { username, phone, code, password, password1 } = this;
        // (username && phone && code && password == password1) &&
        //   (await this.$store.dispatch("userRegister", 
        //             {username, phone, code, password,}));
        // this.$router.push('login');
        // alert("注册成功");
        if(!username)   alert("请输入用户名");
        else if(!phone)  alert("请输入手机号");
        else if(!code)  alert("请输入验证码");
        else if(!password)  alert("请输入密码");
        else if(!password1)  alert("请确认密码");
        else{
          await this.$store.dispatch("userRegister", 
                    {username, phone, code, password});
          alert("注册成功");          
          this.$router.push('login');
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
/* ***************************** 标签样式 ***************************** */
input::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 15px;
}

body {
  font-size: 14px;
  color: #101d37;
  font-family: Microsoft Yahei;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1150px;
  overflow-x: auto;
}

h2 {
  display: block;
  font-size: 1.6em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  float: left;
}

a {
  color: #3072f6;
  text-decoration: none;
}

ul,
li {
  margin: 0;
  padding: 0;
}

li {
  text-align: -webkit-match-parent;
}

ul {
  list-style-type: disc;
}
/* ***************************** 类样式 ***************************** */
/* 整体窗口 */

.register_panel {
  opacity: 1;
  filter: alpha(opacity=100);
  width: 300px;
  padding: 40px;
  height: auto;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 3px 14px rgb(0 0 0 / 30%);
  border-radius: 2px;
}
/* 关闭按钮 */

.register_panel_close {
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 4px;
  font-size: 18px;
}
/* 表单元素 */

.form_input_item {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  color: #555;
  clear: both;
  height: 50px;
  line-height: 50px;
  position: relative;
  margin-top: -1px;
}

/* 输入框 */

input {
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  margin: 0em;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}

.form_input_item input {
  border: 0;
  padding: 0 0 0 16px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #101d37;
  font-size: 14px;
  outline: none;
}
/* 登录按钮 */

.register_btn {
  display: block;
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  background: noset;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  margin-top: 24px;
  background-color: #3072f6;
}

/* 获取验证码 */
.login_panel_forget_password {
  /* display: block; */
  margin: 24px 0;
  float: right;
  color: #101d37;
}

/* 勾选同意服务协议 */

.checkbox_protocol {
  color: #555;
  clear: both;
  position: relative;
  line-height: 23px;
  margin: 24px 0;
  overflow: hidden;
}
/* 勾选按钮 */

.checkbox-btn {
  cursor: pointer;
  float: left;
}
</style>