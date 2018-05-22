<template>
  <div class="home">
    <BackTop></BackTop>
  <div id="header">
      <el-row :gutter="20">
     <el-col :span="4">
         <img src="../../login/logo.png" alt="logo" class="header_logo" @click="backhome">
     </el-col>
    <el-col :span="16">

    <div class="header_buttonBar">
        <div @click="backhome">首页</div>
        <div>全部院校</div>
        <div>加入我们</div>
        <div>加入企业</div>
      </div>

     <div  id="search">
  
     </div>

    </el-col>
    <el-col :span="4">
        <div class= 'photo'  @click="logdown">
            <img :src="imgsrc" alt="portrait" style="width:100%; cursor：pointer;"> 
        </div>
    </el-col>
    </el-row>
  </div>
   

   <div class="movie_show">
      <div class="movie_basic">
      <div class="movie_play">
 <video id="videoElement" style="width:100%;height:100%" controls="controls"></video>
      </div>
      <div class="movie_say">
        <p>更多直播</p>
        <div> <img src="./1.jpg"> </div>
        <div><img src="./4.jpg"></div>
        <div><img src="./3.jpg"></div>
      
      </div>
      <div class="movie_butten">
        <Row>
          <Col span="8" class="movie_shera"> <p>分享:</p>  <i class="icon iconfont icon-weibo"></i>  <i class="icon iconfont icon-qunfengqqkongjian"></i>       <i class="icon iconfont icon-qq"></i> <i style="font-size:44px; position: absolute;" class="icon iconfont icon-baidu1"></i></Col>
          <Col span="5" class="movie_star"><Icon type="thumbsup"></Icon> <p>点赞 6032</p> </Col>
          <Col span="5" class="movie_star"><Icon type="ios-star"></Icon> <p>收藏 3190</p> </Col>
          <Col span="6" class="movie_phone"><Icon type="android-phone-portrait"></Icon> 手机查看</Col>
        </Row>
       </div>
      </div>

    </div>
   
    <div class="wire"></div>
  
  <div class="home_mainBar">
 <Row>
        <Col span="19">
          <div class="vidoe">
      <p>
        <Icon type="speakerphone"></Icon>&nbsp<span style="color:#000;">录播回看</span></p>
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
            <p>人气排行</p>
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
  
    <thefooter></thefooter>
  </div>
</template>

<script>
import store from "../../../vuex/index";
import thefooter from "../footer/footer";
import movie from "../../moiv/moiv.vue";
import training from "../../training/training.vue";
import live from "../../live/livecomp.vue";
import flvjs from 'flv';
export default {
  data() {
    return {
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
      clas: "下载课件"
    }
  },
  created() {
    this.userrole = store.state.userdata.role;
    console.log(store.state.userdata)
    if (store.state.userdata.role === 0) {
      this.imgsrc = require("./user.jpg")
    }else{
      this.imgsrc = store.state.userdata.img;
    }
    this.$axios.get('http://172.20.171.122:7001/live').then((rooms)=>{
      console.log(rooms);
      this.liveroom = rooms.data;
    })
  },
    mounted(){
   
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: `http://hdl1201.plures.net/onlive/c4bfcc1d712845e486cc19fd4c20135d.flv?txSecret=0c5e5b796f323a84a32667b52cfeb9d4&txTime=5b039a49`
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
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
     backhome: function(){
          this.$router.push('/');
      },
      searchmov: function(){
          console.log("scsc",this.searchData)
           this.$router.push({name: 'score', params: { scorename: this.searchData}})
      },
     
        gojoin: function(){
      this.$router.push("/basic/join");
    },
    logdown: function() {
      console.log(store.state.userdata.role);
          switch(store.state.userdata.role){
            case -1:
               this.$router.push('/login');
               break;
             case 0: 
            case 1:
            this.$router.push({ name: "student", params: { id: store.state.userdata.id } });
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
 background-color: #f4f7f9; 
  height: 20px;
 
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
#header{
    height: 100px;
    text-align: center;
    min-width: 1200px;
    background: #3c3c3c;
 
}
#search{
    width: 380px;
    left: 0;
    right: 0;
    height: 60;
    float: left;
    margin-top: 30px;
    background-color: transparent;

}
.header_logo{
    height: 70px;
    margin-top: 15px;
    margin-left: 0px;
}
.photo{
        display: block;
    border: 1px solid #fff;
    border-radius: 300px;
    width: 80px;
    height: 80px;
    margin: 8px auto;
    position: relative;
    overflow: hidden;
    background: #88acdb;
    -webkit-transition: all .2s ease-in;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    cursor:pointer;

}
.el-input-group{
    border-radius: 20px;
}
.header_buttonBar{
    height: 40px;
    color:#fff;
    font-size: 22px;
    font-weight: 550;
    line-height: 40px;
    cursor: pointer;
    width: 400px;
    float: left;
    margin-top: 30px;
}
.header_buttonBar::after{
    content: '';
    float: none;
    display: block;
    clear: both;
}
.header_buttonBar div{
    float: left;
    padding: 0px 10px;

}
@import "../../../assets/font/iconfont.css";
.movie_title {
  margin-bottom: 30px;
}
.movie_show {
  width: 100%;
  background-color: #f4f7f9;
  padding-bottom: 30px;
}

.movie_basic {
  width: 1200px;
  margin: auto;
  padding-top: 20px;
}
.movie_user {
  font-size: 14px;
}
.movie_user img {
  width: 80px;
  height: 80px;
}
.movie_info p {
  font-size: 15px;
  padding: 5px 0px 15px 0px;
}
.movie_info i {
  font-size: 15px;
  padding-right: 5px;
  color: #888;
}
.movie_info {
  font-size: 14px;
  cursor: pointer;
}
.movie_user div {
  top: 0px;
  display: inline-block;
  position: absolute;
  padding-top: 10px;
  padding-left: 5px;
  
}
.movie_user div p {
  font-size: 18px;
  font-weight: 700;
  vertical-align: top;
}
.movie_play {
  background-color: #000;
  width: 880px;
  height: 550px;
  float: left;
}
.movie_say{
 background-color: #fff;
width: 320px;
display: inline-block;
height: 550px;
box-shadow: 1px 1px 10px #eee;
overflow: scroll;
margin-bottom: 20px;

}
.movie_say p{
  width: 100%;
  height: 50px;
  border-bottom: 1px #eee solid;
  font-size: 20px;
  line-height: 50px;
  border-left: #1e88e5 solid 5px;
  padding-left: 20px;
  color: #2e7d32;
  font-weight: 700; 
  margin-bottom: 10px;
}
.movie_say div{
  width: 95%;
  height: 155px;
  margin: 8px auto 5px auto ;
  background-color: #f6f6f6;

  font-size: 14px;
  line-height: 40px;
  color: #666;
  cursor: pointer;
  font-weight: 600;
}

.movie_say img{
  width: 100%;
  height: 155px;
}
.movie_butten{
  border-radius: 5px;
  width: 100%;
  margin: auto;
 
  display: block;
  
  height: 80px;
  background: #fff;
  padding: 6px 20px
}
.movie_shera{
 
  font-size: 28px;
  font-weight: 500;
  border-right: #eee 1px solid;
}
.movie_shera i{
  font-size: 38px;
  margin-left: 25px;
  font-weight: 400;
line-height: 60px;
  cursor: pointer;
  vertical-align: top;

}
.movie_shera p{
  width: 65px;
  display: inline-block;
  line-height: 64px;
  height: 64px;

}
.movie_star{
  padding-left:  30px;
  cursor: pointer;
  
}
.movie_star i{
  font-size: 38px;
  line-height: 60px;
  width: 40px;
  display: inline-block;
}
.movie_star p{
  line-height: 60px;
  font-size: 24px;
  width: 150px;
  display: inline-block;
  padding-left: 10px;
  font-weight: 500;
}
.movie_phone{
  border-left:  #eee 1px solid;
  height: 66px;
  padding-left: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 66px;
  cursor: pointer;
}
.movie_phone i{
  font-size: 36px;
  line-height: 60px;
  width: 40px;
  display: inline-block;
}
.movie_page{
  width: 100%;
  text-align: right;
  padding: 2px 30px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px #eee solid;
}
.comment_head img{
  margin: 10px 0px;
  height: 80px;
  border-radius: 40px;
}
.comment_main {
  margin: 20px 0px 40px 0px;
  line-height: 24px;
}
.comment_enter {
  margin: 20px 0px 20px 30px;
  height: 70px;
}
.comment_say{
  border-top:2px #eee solid;
}
.comment_head_min img{
  width: 50px;

}
.comment_say{
  padding: 10px 0px;
}
.comment_say h1{
  font-size: 16px;
  margin-bottom: 5px;
  
}
.comment_say p{
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}
.comm_info{
  color: #666;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 6px;
}
.comm_info i{
  font-size: 18px;
  margin-right: 3px;
}
.comment_say_min{
  padding: 10px 0px 5px 0px;
}
.comment_say_min h1{
display: inline-block;
width: 110px;
font-size: 13px;
}
.comment_say_min p{
  display: inline-block;

}
.dadsad{
  height: 200px;
  background-color: #fff;
  
}
.movie_fenye{
  width: 100%;
  text-align: center;
  margin: 20px 0px 30px 0px;
}
.movie_showss{
  width: 100%;
 margin: 63px 0px 0px 20px;
 padding: 0px;
border-top: #eee 1px solid;
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
