<template>
<div>
    <div class="student_head">
        <img src="../school/user.jpg" alt="user">
        <p>你好,EVA-Sun 
            <br> 这个人很懒什么的都没留下</p>
    </div>
  <el-container style="height: 800px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>我的课程</template>
          <el-menu-item index="1-1" @click="routerlink(1)">直播课程</el-menu-item>
          <el-menu-item index="1-2" @click="routerlink(2)">录播课程</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title"><i class="el-icon-news"></i>我的实训</template>   
          <el-menu-item index="2-1"  @click="routerlink(3)">实训列表</el-menu-item>
          <el-menu-item index="2-2"  @click="routerlink(4)">实训讨论</el-menu-item>
      </el-submenu>
    
      <el-menu-item index="3"  @click="routerlink(5)">我的作业</el-menu-item>
          <el-menu-item index="4"  @click="routerlink(6)">我的成绩</el-menu-item>
            <el-menu-item index="5"  @click="routerlink(7)">我的收藏</el-menu-item>
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
export default {
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
         }
      },
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

</style>
