<template>
  <div>
    <div class="add_main">
      <!-- 顶部 -->
      <div class="main_top">
        <div class="top_title">发布出租房源</div>
        <div class="top_sub_title">线下门店·服务青年·全城推广</div>
      </div>
      <!-- 填写租房信息 -->
      <div class="main_form">
        <div class="form_box">
          <!-- 表格内容 -->
          <div class="box_content">
            <!-- 位置 -->
            <dl>
              <dt>地区</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入租房地区"
                  v-model="rentalParams.address"
                />
              </dd>
            </dl>
            <!-- 价格 -->
            <dl>
              <dt>预期租金</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入您预期租出的价格"
                  v-model="rentalParams.rent"
                />
                <div class="unit">元/月</div>
              </dd>
            </dl>
            <!-- 出租方式 -->
            <dl>
              <dt>出租方式</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="短租/长租"
                  v-model="rentalParams.long_or_short"
                />
              </dd>
            </dl>
            <!-- 规格 -->
            <dl>
              <dt>房间规格</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入房间规格"
                  v-model="rentalParams.room_type"
                />
              </dd>
            </dl>
            <!-- 面积 -->
            <dl>
              <dt>房间面积</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入房间面积"
                  v-model="rentalParams.area"
                />
                <div class="unit">㎡</div>
              </dd>
            </dl>
            <!-- 名字 -->
            <dl>
              <dt>小区名称</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入租房所在小区名称"
                  v-model="rentalParams.room_name"
                />
              </dd>
            </dl>
            <!-- 图片 -->
            <dl>
              <dt>房间图片</dt>
              <dd class="wrap_input">
                <input
                  class="form_input"
                  type="file"
                  accept="image/*"
                  @change="getImg"
                  id="rentalImg"
                />
              </dd>
              <img :src="iconBase64" class="img_show" />
            </dl>
          </div>
        </div>
        <div class="form_submit">
          <div class="submit_button" @click="confirmAdd">确认添加</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // 图片base64编码
      iconBase64: "",
      rentalParams: {
        room_name: "", //租房所在小区/地区名
        address: "", //地区
        rent: "", //租金
        area: "", //面积
        room_type: "", //几人间
        long_or_short: "", //短租/长租
        img: "", //图片base64编码
      },
    };
  },
  computed: {
    ...mapGetters(["isAdd"]),
  },
  methods: {
    //图片文件转base64编码
    getImg() {
      let file = document.getElementById("rentalImg").files[0];
      console.log(file);
      let r = new FileReader();
      r.readAsDataURL(file);
      r.onload = () => {
        console.log("file 转 base64结果:" + r.result);
        this.iconBase64 = r.result;
        this.rentalParams.img = this.iconBase64;
      };
      console.log(r);
    },
    //确认添加
    confirmAdd() {
      if (
        this.rentalParams.room_name &&
        this.rentalParams.address &&
        this.rentalParams.rent &&
        this.rentalParams.room_type &&
        this.rentalParams.long_or_short &&
        this.rentalParams.img
      ) {
        this.$store.dispatch("addRental", this.rentalParams);
        alert("添加成功！");
        this.$router.push({
          name: "rental",
          params: { keyword: "" },
        });
      } else {
        alert("请完整填写信息！");
      }
    },
  },
};
</script>

<style>
.main_top {
  padding-top: 20px;
  padding-bottom: 50px;
  padding-top: 50px;
  line-height: 1;
  text-align: center;
  background-color: #f5f5f6;
}
.top_title {
  font-weight: 700;
  color: #101d37;
  font-size: 33px;
}
.top_sub_title {
  margin-top: 15px;
  color: #878787;
  font-size: 16px;
}
.box_content {
  color: #9399a5;
  margin: 0 auto;
  width: 590px;
  padding-top: 50px;
}
dl {
  padding: 12px 0;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: table;
}
dt {
  color: #101d37;
  font-weight: 700;
  width: 120px;
  margin-right: 0;
  float: left;
  text-align: left;
}
.wrap_input {
  position: relative;
  float: left;
  width: 470px;
  height: 40px;
}
.form_input {
  border: none;
  width: 210px;
  height: 40px;
  line-height: 20px;
  /* padding: 10px 0; */
  vertical-align: middle;
  outline: medium;
  float: left;
}
.unit {
  font-weight: 700;
  color: #101d37;
  float: left;
}
.form_submit {
  margin-top: 60px;
}
.submit_button {
  /* float: left; */
  margin: auto;
  margin-bottom: 50px;
  width: 170px;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background-color: #3072f6;
  cursor: pointer;
}
.img_show {
  height: 200px;
}
#rentalImg {
  padding-top: 8px;
}
</style>