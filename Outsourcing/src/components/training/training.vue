<template>
    <Card :style="{'width':width}" class="training">
                <p slot="title">
                 
                    <div>   <img src="./userhead1.png" alt="user"> {{teacher}}</div>
                    <div>来自: {{from}}</div>
                </p>
                    <div>
                        {{title}}
                        <span>{{num}}人参与</span>
                    </div>               
            </Card>
</template>
<script>
export default {
  data(){
   
  },
     props:{
         teacher: {
             type:String,
             default: '张老师'
         },
         from: {
             type: String,
             default: '软件工程'
         },
         num: {
             type:Number,
             default: 233
         },
         title:{
             type :String,
             default: '学生管理系统开发'
         },
         width: {
             type:String,
             default: '200px'
         }
     }
}
</script>
<style scoped>
.training{
    
}
</style>
