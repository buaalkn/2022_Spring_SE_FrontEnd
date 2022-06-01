<template>
  <body>
    <div id="loginModel" class="login_layer" style="display: block">
      <div class="login_bg"></div>
      <div class="login_panel">
        <div class="login_panel_close">x</div>
        <div class="login_box">
          <div class="login_panel_lable">
            <h2 class="login_panel_title">验证码登录</h2>
          </div>
          <div class="form">
            <div class="input_box">
              <div class="form_input_item">
                <input
                  class="phonenum_input"
                  maxlength="11"
                  placeholder="请输入手机号"
                  type="text"
                  autocomplete="username"
                  style="font-size: 15px"
                  v-model="phone"
                />
              </div>
              <div class="form_input_item">
                <input
                  class="verifycode_type"
                  placeholder="请输入短信验证码"
                  type="text"
                  autocomplete="off"
                  style="float:left"
                  v-model="code"
                />
              </div>
            </div>

            <div class="login_remember">
              <input
                type="checkbox"
                name="remember"
                data-defval="1"
                class="mind-login remeber-input"
                checked
                value="1"
                style="cursor: pointer"
              />
              <span class="checkbox"> 7天内免登录</span>
            </div>
            <div class="login_panel_forget_password">
              <a class="forget_password" href="#" @click="getCode">
                获取验证码
              </a>
            </div>
             
            <div class="login_btn" @click="userLoginWithVfCode">登录</div>
            <div class="login_change_type">
              <router-link to="/login">账号密码登录</router-link>
            </div>
            <div>
              <p
                style="
                  color: #aaa;
                  margin-top: 60px;
                  font-size: 12px;
                  line-height: 14px;
                "
              >
                登录即代表同意
                <a class="link-btn" href="#">《YRMS隐私政策》</a> 及
                <a class="link-btn" href="#">《YRMS用户服务协议》</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "LoginWithVfCode",
  data() {
    return {
      //收集表单数据 手机号
      phone: "",
      //验证码
      code: "",
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
        console.log(this.$store.state.user.code.code);
        this.code = this.$store.state.user.code.code;
      } catch (error) {}
    },

    //登录回调函数
    async userLoginWithVfCode() {
      try {
        const { phone, code } = this;
        if(!phone)  alert("请输入手机号");
        else if(!code)  alert("请输入验证码");
        else{
          await this.$store.dispatch("userLoginWithVfCode", { phone, code });
          alert("登录成功");
          //获取用户信息
          this.$store.dispatch("getUserInfo");
          //跳转到Home首页
          this.$router.push({name:"home"});
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

em {
    padding: 0 16px;
    border-left: 1px solid #DBDBDB;
    font-style: normal;
    font-weight: 400;
    float:right;
    color:#555;
    cursor: pointer;
}
em:hover {
  color:#3072f6;
}
/* ***************************** 类样式 ***************************** */
/* 整体窗口 */

.login_panel {
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

.login_panel_close {
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

/* 获取验证码 */
.send_login_message_verify {
    line-height: 50px;
    color: #101D37;
    /* float: right; */
}
/* 7天免登录 */

.login_remember {
  color: #555;
  clear: both;
  position: relative;
  height: 20px;
  line-height: 20px;
  margin: 24px 0;
  overflow: hidden;
  float: left;
}
/* 忘记密码 */

.login_panel_forget_password {
  /* display: block; */
  margin: 24px 0;
  float: right;
  color: #101d37;
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

.login_btn {
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
  margin-top: 68px;
  background-color: #3072f6;
}
/* 更换登录方式 */

.login_change_type {
  display: block;
  padding: 24px 0 0;
  height: 14px;
  line-height: 14px;
  color: noset;
  display: block;
  float: left;
}
</style>