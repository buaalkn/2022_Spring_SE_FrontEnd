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
            />
          </li>
          
        </ul>
      </form>
      <div class="tab">
        <span class="actTap">修改密码</span>
      </div>
      <form>
        <ul class="change-pwd">
          <li>
            <span>输入旧密码：</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="请输入密码"
            />
          </li>
          <li>
            <span>设置新密码：</span>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="请输入新密码"
            />
          </li>
          <li>
            <span>确认新密码：</span>
            <input
              type="password"
              name="newPassword1"
              id="newPassword1"
              placeholder="确认新密码"
            />
          </li>
          <li>
            <span></span>
            <a class="submit-btn">保存修改</a>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TenantMessage",
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
.submit-btn {
  width: 240px;
  height: 40px;
  padding: 0 5px;
  background-color: #545c64;
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