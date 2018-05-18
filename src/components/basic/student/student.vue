<template>
<div>
    <div class="student_head">
        <img src="../school/user.jpg" alt="user">
        <p>你好,EVA-Sun 
            <br> 这个人很懒什么的都没留下</p>
    </div>
  <el-container style="min-height: 800px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]">
          <el-menu-item index="1" @click="routerlink(1)" :class="{'student_nushow' : flag[0]}">我的信息</el-menu-item>
          <el-menu-item index="2" @click="routerlink(2) " :class="{'student_nushow' : flag[1]}">观看记录</el-menu-item>
          <el-menu-item index="3"  @click="routerlink(3)" :class="{'student_nushow' : flag[2]}">我的直播间</el-menu-item>
            <el-menu-item index="7"  @click="routerlink(4)" :class="{'student_nushow': flag[3]}">我的收藏</el-menu-item>    
    </el-menu>
  </el-aside>
  <el-container>
    <el-main>
      
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>
<script>
import store from "../../../vuex/index";
export default {
    data(){
        return{
            flag:[0,0,0,0]
        }
    },
  component: {},
  methods: {
     routerlink: function(puth){
         switch(puth){
             case 1: 
                this.$router.push("classonline");
                break;
             case 2: 
                this.$router.push("classdown");
                break;
             case 3: 
                this.$router.push("shixun");
                break;
             case 4: 
                this.$router.push("shixuntalk");
                break;
             case 5: 
                 this.$router.push("homework");
                break;
             case 6: 
                this.$router.push("chengji");
                break;
             case 7: 
                this.$router.push("shoucang");
             break;
                case 8: 
            this.$router.push("wenda");
                break;
         }
      },
  },
  created(){
       console.log( store.state.userdata.role);
            switch(store.state.userdata.role){
                case 1:
                    this.flag = [0,0,1,0]
                    console.log(this.flag)
                    break;
                case 2:
                    this.flag = [0,0,0,0];
                    break;
            }
  }
};
</script>
<style>
@import "../../../assets/basic.css";
.z_basic{
  min-height: 80vh;
}
 .student_head{
     width: 100%;
     height: 200px;
     background: url("./bg.png") 0 0 /100% 100% no-repeat;
 }
 .student_head img{
     width:120px;
     height: 120px;
     border-radius: 50%;
     margin: 43px 0px 0px 75px;
     border: #fff 5px solid;
 }
 .student_head p{
     display: inline-block;
     vertical-align: top;
    height: 30px;
    font-size: 24px;
     margin: 70px 0px 0px 55px;
     font-weight: 800;
     color: #fff;
 }
 .student_nushow{
     display: none;
 }

</style>
