<template>
  <body>
    <div id="loginModel" class="login_layer" style="display: block">
      <div class="login_bg"></div>
      <div class="login_panel">
        <div class="login_panel_close">x</div>
        <div class="login_box">
          <div class="login_panel_lable">
            <h2 class="login_panel_title">账号密码登录</h2>
            <div class="login_panel_hint"></div>
          </div>
          <form class="form">
            <ul class="input_box">
              <li class="form_input_item" style>
                <input
                  class="phonenum_input"
                  maxlength="11"
                  placeholder="请输入手机号或邮箱"
                  type="text"
                  autocomplete="username"
                />
              </li>
              <li class="form_input_item" style>
                <input
                  class="password_type"
                  placeholder="请输入密码"
                  type="password"
                  autocomplete="current-password"
                />
                <em class="password-view"></em>
              </li>
            </ul>
            <div class="login_remember">
              <lable class="checkbox-btn">
                <input
                  type="checkbox"
                  name="remember"
                  data-defval="1"
                  class="mind-login remeber-input"
                  checked
                  value="1"
                  style="cursor: pointer"
                />
                <span class="checkbox"></span> 7天内免登录
              </lable>
              <div class="login_panel_forget_password">
                <a class="forget_password" href="#">忘记密码</a>
              </div>
            </div>
            <div class="login_btn">登录</div>
            <div>
              <a class="login_change_type" href="#">邮箱快捷登录</a>
              <p
                style="
                  color: #aaa;
                  margin-top: 10px;
                  font-size: 12px;
                  line-height: 14px;
                "
              >
                登录即代表同意
                <a class="link-btn" href="#">《YRMS隐私政策》</a> 及
                <a class="link-btn" href="#">《YRMS用户服务协议》</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* ***************************** 标签样式 ***************************** */
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
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
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
/* 7天免登录 */

.login_remember {
  color: #555;
  clear: both;
  position: relative;
  line-height: 23px;
  margin: 24px 0;
  overflow: hidden;
}
/* 忘记密码 */

.login_panel_forget_password {
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
  margin-top: 24px;
  background-color: #3072f6;
}
/* 更换登录方式 */

.login_change_type {
  padding: 24px 0 0;
  height: 14px;
  line-height: 14px;
  color: noset;
  display: inline-block;
}
</style>