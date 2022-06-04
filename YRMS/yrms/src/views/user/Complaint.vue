<template>
  <div>
    <div class="main_top">
      <div class="top_title">租房不满意?</div>
      <div class="top_title">家具有问题?</div>
      <div class="top_sub_title">我们竭诚为您服务</div>
      <button id="complaint_button" @click="endComplaint">
        <div>我要报修/投诉</div>
      </button>
    </div>
    <div class="complaint">
      <!-- 文字描述 -->
      <div>
        <div class="before_text">报修/投诉描述：</div>
        <div class="wrap_text">
          <textarea
            id="complaint_text"
            cols="30"
            rows="10"
            maxlength="200"
            v-model="complaintParams.problem"
            placeholder="请您详细描述您遇到的困难，以便工作人员更好的判断，字数请控制在200字以内"
          ></textarea>
        </div>
      </div>
      <!-- 图片 -->
      <div class="complaint_img_area">
        <div class="before_img">
          <div class="before_text">上传图片凭证：</div>
          <input type="file" id="complaintImg" class="fl" @change="getImg" />
        </div>
        <img :src="iconBase64" class="showImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //post请求参数
      complaintParams: {
        user_id: 0,
        img: "",
        problem: "",
        
      },
      iconBase64: "",
    };
  },
  methods: {
    getImg() {
      let file = document.getElementById("complaintImg").files[0];
      // console.log(file);
      let r = new FileReader();
      r.readAsDataURL(file);
      r.onload = () => {
        // console.log("file 转 base64结果:" + r.result);
        this.iconBase64 = r.result;
        this.complaintParams.img = this.iconBase64;
      };
      // console.log(r);
    },
    endComplaint() {
      if (this.complaintParams.problem && this.complaintParams.img) {
        this.$store.dispatch("complaint", this.complaintParams);
        //报修成功
        if (this.$store.getters.isComplaint.isComplaint) {
          alert("反馈成功!");
          this.$router.push({
            name: "home",
          });
        }
        //报修失败
        else{
          alert("反馈失败！")
        }
      } else {
        alert("请完整填写信息！");
      }
    },
  },
  computed: {
    ...mapGetters(["isComplaint"]),
  },
};
</script>

<style>
.main_top {
  padding-top: 20px;
  padding-bottom: 50px;
  padding-top: 60px;
  line-height: 1;
  text-align: center;
  background-color: #f5f5f6;
  height: 250px;
}
.top_title {
  font-weight: 700;
  color: #101d37;
  font-size: 50px;
  padding-bottom: 35px;
  padding-left: 140px;
  text-align: left;
}
.top_sub_title {
  color: #878787;
  font-size: 16px;
  padding-left: 140px;
  text-align: left;
}
#complaint_button {
  width: 500px;
  height: 60px;
  float: left;
  font-size: 15px;
  font-weight: 600;
  /* background-color: #f18832; */
  width: 130px;
  height: 45px;
  border: 0;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #caccd3;
  background-color: #e8f0fe;
  color: #3072f6;
  margin-top: 30px;
  margin-left: 140px;
}
.complaint {
  margin-left: 140px;
  margin-top: 30px;
}
.before_text {
  float: left;
  font-size: 16px;
  font-weight: 600;
}
.wrap_text {
  width: 260px;
  height: 220px;
  border-radius: 2px;
  /* border: 1px solid #777777; */
  float: left;
  background-color: #f5f5f6;
}
#complaint_text {
  width: 240px;
  height: 200px;
  float: left;
  font-size: 14px;
  font-family: 微软雅黑;
  resize: none;
  outline: none;
  border: none;
  padding: 10px;
  /* font-weight: 600; */
  background-color: #f5f5f6;
}
.complaint_img_area {
  float: left;
  margin-left: 60px;
}
.fl {
  float: left;
}
.showImg {
  margin-top: 10px;
  height: 180px;
}
</style>