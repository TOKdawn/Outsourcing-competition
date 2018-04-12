<template>
    <Card :style="{'width':width}" class="training">
       
                    <div slot="title" class="training-title">   <img src="./userhead1.png" alt="user"> <p>{{teacher}}</p>  <div>来自: {{from}}</div></div>
                   <div>
                        <p class="train_main">{{title}}</p>
                        <span>{{num}}人参与</span>
                    </div>               
            </Card>

</template>
<script>
export default {
  data(){
   return{
       
   }
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
    height: 220px;
    margin-top: 40px;
    display: inline-block;
    margin-right: 20px;
   
}
.training img{
    width: 50px;
   float: left;
   cursor: pointer;
}
.train_main{
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: #000;
    margin-top: 30px;

cursor: pointer;
}
.training span{
 position: absolute;
 left: 0;
 right: 0;
 bottom: 5px;
    display: block;
margin: auto;
width: 100px;    
text-align: center;
cursor: pointer;
}

.training-title p{ 
   width: 100px;
   height: 50px;
   display: inline-block;
   line-height: 50px;
   padding-left: 10px;
   font-size: 18px;
   cursor: pointer;
}
.training-title div{
    line-height: 50px;
    float: right;
    cursor: pointer;
    
}
</style>
<style>
 .training .ivu-card-head{
    padding: 2px 15px 2px 5px;
}
</style>
