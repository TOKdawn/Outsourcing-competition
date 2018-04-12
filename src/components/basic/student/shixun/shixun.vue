<template>
<div>
     <el-button type="primary" class="shixun_button">上传 <i class="el-icon-upload2"></i> </el-button>
 
       <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'550px'"></training>
        <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'550px'"></training>
         <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'550px'"></training>
          <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'550px'"></training>
     </div>
</template>
<script>
 import training from "../../../training/training.vue";
export default {
 
   components:{
      training
  }
}
</script>
<style >
.shixun_button{
    margin-left: 88%;
}
.shixun_tit {
    font-size: 22px !important;
    padding-left: 20px;
    font-weight: 700 !important;
}
.shixun_tit span{
    float: right;
    color: #3e3e3e;
    font-weight: 500;
    font-size: 16px;
}
.shixun_progress{
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 0px;
}
.el-progress-bar__outer{
     border-radius: 0px 0px 0px 4px !important;
}


.el-progress-bar__inner{
     border-radius: 0px 0px 0px 4px !important;
}
.shixun_teacher{
    margin-top: 50px;
    font-size: 16px;
    margin-left: 10px;
    
}
</style>
