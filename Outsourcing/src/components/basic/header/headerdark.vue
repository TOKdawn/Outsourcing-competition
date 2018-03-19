<template>
  <div id="header">
      <el-row :gutter="20">
     <el-col :span="4">
         <img src="../../login/logo.png" alt="logo" class="header_logo" @click="backhome">
     </el-col>
    <el-col :span="16">

    <div class="header_buttonBar">
        <div>首页</div>
        <div>加盟院校</div>
        <div>加入我们</div>
        <div>加入企业</div>
      </div>

     <div  id="search">
  <el-input placeholder="请输入内容" v-model="searchData" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="searchmov"></el-button>
  </el-input>
     </div>

    </el-col>
    <el-col :span="4">
        <div :class="[userrole ? 'photo' : 'z_none']"  @click="logdown">
            <img :src="imgsrc" alt="portrait" style="width:100%; cursor：pointer;"> 
        </div>
    </el-col>
    </el-row>
  </div>

</template>
<script>
 import store from "../../../vuex/index";
export default {
  data () {
      return {
          searchData: '',
          imgsrc: require('./user.jpg')
      }
  },
  methods: {
      backhome: function(){
          this.$router.push('/');
      },
      searchmov: function(){
          console.log("scsc",this.searchData)
           this.$router.push({name: 'score', params: { scorename: this.searchData}})
      },
      logdown: function(){
           this.$router.push('/');
      }
  }
}
</script>
<style scoped>
@import '../../../assets/basic.css';
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
</style>
