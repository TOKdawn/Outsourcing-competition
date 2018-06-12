<template>
  <div class="home">
    <BackTop></BackTop>
  
    <div id="header">
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="../../login/logo.png" alt="logo" class="header_logo" @click="backhome">
  
        </el-col>
        <el-col :span="16" class="home_search">
            <Tooltip content=" " placement="bottom" style="display:inline-block;">
            <div class="home_client">客户端</div>
        </Tooltip>
          <div id="search">
            <el-input placeholder="请输入内容" v-model="searchData" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="searchmov"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div  :class="[userrole ? 'canshow' : 'z_none']">
            <p class="logout" @click = "logout">注销</p>
              <div  class ="photo" @click="logdown">
            <img :src="imgsrc" alt="portrait" style="width:100%; cursor：pointer;">
          </div>
          </div>
         
        </el-col>
      </el-row>
    </div>
    <div class="block">
  
      <div class="home_buttonBar">
        <div></div>
        <div>首页</div>
        <div>全部院校</div>
        <div @click="gojoin()">加入我们</div>
        <div @click="gojoin()">加入企业</div>
        <div></div>
      </div>
  
      <el-carousel height="400px">
        <el-carousel-item v-for="item in hour" :key="item.class">
          <div :class="[item.class,BGbasic]"></div>
        </el-carousel-item>
      </el-carousel>
  
      <div class="home_schoolBar">
        <p @click="gopath('basic/allschool')">全部合作高校</p>
        <img src="./school1.png" alt="" @click="gopathToken('123')">
        <img src="./school2.png" alt="" @click="gopathToken('123')">
        <img src="./school3.png" alt="" @click="gopathToken('123')">
        <img src="./school4.png" alt="" @click="gopathToken('123')">
        <img src="./school5.png" alt="" @click="gopathToken('123')">
      </div>
  
      </el-col>
      </el-row>
  
    </div>
    <div class="wire"></div>
  
  <div class="home_mainBar">
 <Row>
        <Col span="19">
          <div class="vidoe">
      <p>
        <Icon type="speakerphone"></Icon>&nbsp<span style="color:#000;">为您推荐</span></p>
      <div class="vidoe_bar">
        <movie :apidate="require('./1.jpg')"></movie>

        <el-card :body-style="{ padding: '0px' }" class="vidoe_cord">
          <img src="./2.jpg" class="image">
          <div style="padding: 3px 10px;">
            <span>Html网页实战开发</span>
            <div class="home_teacher">
              <p style="">
                <Icon type="person" style="font-size:16px; margin-left:10px;"></Icon>&nbsp 某某市理工学院李老师</p>
            </div>
            <div class="home_infoBar">
              <div>
                <Icon style="font-size:14px" type="chatbubble-working"></Icon>&nbsp99+</div>
              <div>
                <Icon style="font-size:14px" type="eye"></Icon>&nbsp23</div>
  
              <div>
                <Icon style="font-size:14px" type="ios-heart"></Icon>&nbsp87</div>
            </div>
          </div>
        </el-card>
  
  
        <el-card :body-style="{ padding: '0px' }" class="vidoe_cord">
          <img src="./4.jpg" class="image">
          <div style="padding: 3px 10px;">
            <span>产品经理的UI实战</span>
            <div class="home_teacher">
              <p style="">
                <Icon type="person" style="font-size:16px; margin-left:10px;"></Icon>&nbsp 某某市理工学院李老师</p>
            </div>
            <div class="home_infoBar">
              <div>
                <Icon style="font-size:14px" type="chatbubble-working"></Icon>&nbsp99+</div>
              <div>
                <Icon style="font-size:14px" type="eye"></Icon>&nbsp23</div>
  
              <div>
                <Icon style="font-size:14px" type="ios-heart"></Icon>&nbsp87</div>
            </div>
          </div>
        </el-card>
  
        <el-card :body-style="{ padding: '0px' }" class="vidoe_cord">
          <img src="./5.jpg" class="image">
          <div style="padding: 3px 10px;">
            <span>JavaScript实战</span>
            <div class="home_teacher">
              <p style="">
                <Icon type="person" style="font-size:16px; margin-left:10px;"></Icon>&nbsp 某某市理工学院李老师</p>
            </div>
            <div class="home_infoBar">
              <div>
                <Icon style="font-size:14px" type="chatbubble-working"></Icon>&nbsp 99+</div>
              <div>
                <Icon style="font-size:14px" type="eye"></Icon>&nbsp 23</div>
  
              <div>
                <Icon style="font-size:14px" type="ios-heart"></Icon>&nbsp87</div>
            </div>
          </div>
        </el-card>
  
  
      </div>
    </div>


      <div class="vidoe">
      <p>
        <Icon type="speakerphone"></Icon>&nbsp<span style="color:#000;">正在直播</span></p>

      <div class="vidoe_bar">
    
          <div v-for=" tiem in liveroom" key="tiem.roomID">
            <live :apidate="require('../../live/n4.jpg')" :lenth="'李老师'" :title="tiem.title" :roomID="tiem.roomID"></live>
      
          </div>
           <live :apidate="require('../../live/n2.jpg')" :lenth="'李老师'" :title="'不吹不黑聊聊前端框架'" ></live>
            <live :apidate="require('../../live/n3.jpg')" :lenth="'朱老师'" :title="'自动化测试工具使用'" ></live>
      </div>
    </div>
        
        </Col>
        <Col span="5">
          <div class="hot_list">
            <p>视频排行</p>
            <ul>
              <li><span>1</span> C语言快速提高</li>
              <li><span>2</span>C++快速提高</li>
              <li><span>3</span>算法导论</li>
              <li><span>4</span>PHP程序设计</li>
              <li><span>5</span>JavaScript实战</li>
              <li><span>6</span>深入浅出设计模式</li>
              <li><span>7</span>软件工程导论</li>
              <li><span>8</span>微信小程序开发</li>
               <li><span>9</span>深入浅出设计模式</li>
              
            </ul>
              <div>查看更多>>></div>
          </div>
        
        </Col>
    </Row>
  </div>
  <div class="training_bg">
  <div class="home_training">
      <Row>
        <Col span="8">
          <h1>精彩实训</h1>
          <p>已有233万老师和同学在此发言</p>
        </Col>
        <Col span="16">
          <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'400px'"></training>
            <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'400px'"></training>
        </Col>
    </Row>
  </div>
  </div>
    <thefooter></thefooter>
  </div>
</template>

<script>
import store from "../../../vuex/index";
import thefooter from "../footer/footer";
import movie from "../../moiv/moiv.vue";
import training from "../../training/training.vue";
import live from "../../live/livecomp.vue";
import $store from "../../../vuex/index.js";
export default {
  data() {
    return {
      canshow: 'canshow',
      userrole: 0,
      searchData: "",
      liveroom: [],
      imgsrc: require("./user.jpg"),
      userrole: 10,
      BGbasic: "bgbasic",
      hour: [
        {
          class: "bg1"
        },
        {
          class: "bg2"
        },
        {
          class: "bg3"
        },
        {
          class: "bg4"
        }
      ],
      work: "提交作业",
      clas: "下载课件",
   
    }
  },
  created() {
    this.userrole = store.state.userdata.role;
    if (store.state.userdata.role === 20) {
      (this.work = "批改作业"), (this.clas = "发布课件"), (this.userrole = 20);
    }
    this.$axios.get('http://118.25.45.164:7001/live').then((rooms)=>{
      console.log(rooms);
      this.liveroom = rooms.data;
    })
    
  },
  methods: {
    gojoin: function(){
      this.$router.push("/basic/join");
    },
    gopath: function(thepath) {
      console.log(thepath);
      this.$router.push(thepath);
    },
    gopathToken: function(thepath) {
      console.log("dddd", thepath);
      this.$router.push({ name: "login", params: { schoolId: thepath } });
    },
    backhome: function() {
      this.$router.push("/");
    },
    searchmov: function() {
      console.log("scsc", this.searchData);
      this.$router.push({
        name: "score",
        params: {
          scorename: this.searchData
        }
      });
    },
    logdown: function() {
      console.log(store.state.userdata.id);
      switch (store.state.userdata.role) {
        case 10:
          this.$router.push({
            name: "student",
            params: { id: store.state.userdata.id }
          });
      }
    },
    logout: function(){

      this.$axios.get('http://118.25.45.164:7001/api/user/logout').then(()=>{
           let userdata = {
          role: 0,
          name: '',
          accountnum: 100000000
        }
        store.commit("updata",userdata);
        this.$Message.info('注销成功', 3);
       this.userrole = 0;
      }).catch(()=>{
          this.$Message.info('注销失败', 3);
      })
        
    },
    fnwork: function() {
      switch (this.userrole) {
        case 20:
          this.$router.push("/basic/upwork");
          break;
        case 10:
          this.$router.push("/basic/downwork");
          break;
      }
    },
    fnclas: function() {
      switch (this.userrole) {
        case 20:
          this.$router.push("/basic/upclass");
          break;
        case 10:
          this.$router.push("/basic/downclass");
          break;
      }
    },
    watchmov: function() {
      this.$router.push({
        name: "score",
        params: {
          scorename: "$allmov"
        }
      });
    }
  },
  components: {
    thefooter,
    movie,
    training,
    live
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/basic.css";
.canshow{
  display: block;
}
#header {
  height: 100px;
  text-align: center;
  min-width: 800px;
}

#search {
  width: 330px;
  left: 0;
  right: 0;
  padding: 30px 0px 30px 30px;
  height: 30px;
  display: inline-block;
}
.home_search {
  text-align: right;
}

.header_logo {
  height: 70px;
  margin-top: 15px;
  margin-left: 0px;
  cursor: pointer;
}

.photo {
  display: block;
  border: 1px solid #fff;
  border-radius: 300px;
  width: 80px;
  height: 80px;
  margin: 8px auto;
  position: relative;
  overflow: hidden;
  background: #88acdb;
  -webkit-transition: all 0.2s ease-in;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center;
  cursor: pointer;
}
.logout{
  float: right;
  margin: 50px 50px 0px 0px;
  color: #00b0ff;
  font-size: 16px;
    cursor: pointer;
}
.el-input-group {
  border-radius: 20px;
}

$--center-width: 1300px;
.bgbasic {
  width: 100%;
  height: 100%;
}

.bg1 {
  background: url("./ada.jpg") 0 0 /100% auto;
}

.bg2 {
  background: url("./ada.jpg") 0 0/100% auto;
}

.bg3 {
  background: url("./ada.jpg") 0 0 /100% auto;
}

.bg4 {
  background: url("./ada.jpg") 0 0/100% auto;
}

#home {
  text-align: center;
  min-width: 800px;
}

.block {
  width: $--center-width;
  left: 0px;
  right: 0px;
  margin: 20px auto 20px auto;
}

.button_bar {
  width: $--center-width;
  left: 0;
  right: 0;
  margin: auto;
}

.button1 {
  cursor: pointer;
  background-color: #fed05d;
  text-align: center;
  color: #fff;
  font-size: 88px;
  height: 180px;
  width: 100%;
}

.button2 {
  cursor: pointer;
  background-color: #8aff7d;
  text-align: center;
  color: #fff;
  font-size: 88px;
  height: 180px;
  width: 100%;
}

.button3 {
  cursor: pointer;
  background-color: #83c0ff;
  text-align: center;
  color: #fff;
  font-size: 88px;
  height: 180px;
  width: 100%;
}

.button4 {
  cursor: pointer;
  background-color: #fd6266;
  text-align: center;
  color: #fff;
  font-size: 88px;
  height: 180px;
  width: 100%;
}

.button_p {
  font-size: 25px;
}

.wire {
  width: 100%;
  /* background-color: #8aff7d; */
  height: 20px;
  margin-top: 20px;
  box-shadow: 0px 3px 5px #bfbfbf;
  margin-bottom: 20px;
}

.vidoe {
  width: 100%;
  overflow: hidden;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

.vidoe > p {
  font-size: 35px;
  color: deeppink;
  width: 100%;
}

.vidoe_bar {
  height: 320px;
  // background-color: #bfbfbf;
  width: 100%;
  left: 0;
  right: 0;
  margin: 20px auto 0 auto;
}

.image {
  width: 100%;
}

.vidoe_cord {
  width: 230px;
  float: left;
  margin: 0px 15px;
}

.vidoe_cord span {
  font-size: 20px;
}

.button {
  font-size: 20px;
}

.home_buttonBar {
  margin: 0px 0px 30px 0px;
}

.home_buttonBar div {
  float: left;
  color: #fff;
  font-size: 23px;
  line-height: 40px;
  font-weight: 650;
  text-align: center;
  cursor: pointer;
}

.home_buttonBar div:hover {
  color: #eee;
}

.home_buttonBar:after {
  clear: both;
  float: none;
  content: "";
  display: block;
}

.home_buttonBar div:nth-child(1) {
  height: 0px;
  width: 0px;
  width: 0px;
  height: 0px;
  border-top: 20px solid #63fbfc;
  border-right: 20px solid #63fbfc;
  border-bottom: 20px solid #63fbfc;
  border-left: 20px solid transparent;
}

.home_buttonBar div:nth-child(2) {
  height: 40px;
  width: 70px;
  background-color: #63fbfc;
}

.home_buttonBar div:nth-child(3) {
  height: 40px;
  width: 120px;
  background-color: #3faaf7;
}

.home_buttonBar div:nth-child(4) {
  height: 40px;
  width: 120px;
  background-color: #138ee0;
}
.home_client {
  font-size: 16px;

  cursor: pointer;
}
.home_buttonBar div:nth-child(5) {
  height: 40px;
  width: 110px;
  background-color: #0e77bb;
}

.home_buttonBar div:nth-child(6) {
  height: 0px;
  width: 0px;
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 30px solid #0e77bb;
}

.home_schoolBar {
  // margin-top: 30px;
  width: 1200px;
  margin: 30px auto 0px auto;
}

.home_schoolBar p {
  font-size: 23px;
  font-weight: 600;
  display: inline-block;
  line-height: 56px;
  height: 56px;
  position: relative;
  vertical-align: top;
  margin-right: 30px;
  color: #1e8def;
}

.home_schoolBar p:hover {
  cursor: pointer;
  color: #1e72ef;
}

.home_schoolBar img {
  width: 200px;
  cursor: pointer;
}

.vidoe_cord span {
  font-size: 19px;
  font-weight: 700;
  text-align: left;
  color: #333;
  cursor: pointer;
}

.vidoe_cord img {
  cursor: pointer;
}

.vidoe_cord span:hover {
  font-weight: 700;
  text-align: left;
  color: #000;
}

.vidoe_cord {
  color: #888;
  text-align: left;
  width: 220px;
  height: 280px;
}

.home_teacher {
  margin: 8px 0px 0px 0px;
  font-size: 13px;
}

.home_infoBar div {
  cursor: pointer;
}

.home_infoBar div:nth-child(3) {
  float: right;
}

.home_infoBar div:nth-child(2) {
  float: left;
}

.home_infoBar div:nth-child(1) {
  display: inline-block;
  margin-left: 60px;
}

.home_infoBar {
  margin-top: 30px;
}
.home_mainBar {
  width: 1300px;
  margin: auto;
  display: block;
}
.hot_list {
  width: 90%;
  margin: 0px auto 0px auto;
}
.hot_list p {
  font-size: 24px;
  margin-top: 20px;
  margin-left: -25px;
  padding-left: 15px;
  margin-bottom: 20px;
  border-left: #0e77bb 2px solid;
  font-weight: 700px;
}
.hot_list li {
  list-style: none;
  line-height: 38px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px #ddd solid;
  cursor: pointer;
}
.hot_list span {
  font-size: 16px;
  color: #fff;
  background-color: #fd6266;
  margin-right: 10px;
  width: 20px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border-radius: 6px;
  padding: 0px 6px;
  position: relative;
}
.hot_list div {
  text-align: right;
  font-size: 14px;
  margin: 10px;
  color: #0e77bb;
  cursor: pointer;
}
.home_training {
  width: 1300px;
  margin: auto;
}
.training_bg {
  width: 100%;
  min-height: 300px;
  background-color: #4f6b94;
  display: block;
}
.home_training h1{
  color: #fff;
  font-size: 52px;
  width: 100%;
  text-align: center;
  margin-top: 60px;
}
.home_training p{
    color: #fff;
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-weight: 600;
}
</style>
<style>
.home_search .ivu-tooltip-inner {
  background-color: #fff;
  background: url("./1524.png") 0 0/100% 100% no-repeat;
  width: 160px;
  height: 160px;
}
</style>
