<template>
    <div>
         
              <div id="convo" class="chat-thread">
                  <div style="width:60px;height:50px;float:left">
                  <img src='../../../moiv/n3.jpg' height="50px" width="50px" class="img" >
             </div>
            <div style="width:90%;float:left;">
            <span class="li">请问有什么需要帮助</span>
            </div>


            <div v-show="fuckkkk">


                <div style="width:60px;height:50px;float:left">
                  <img src='../../../moiv/n3.jpg' height="50px" width="50px" class="img" style="display:none">
             </div>
            <div style="width:90%;float:left; text-align: right;">
            <span class="li">
               学完CSS后进阶学习什么好
            </span>
            </div>


                <div style="width:60px;height:50px;float:left">
                  <img src='../../../moiv/n3.jpg' height="50px" width="50px" class="img" >
             </div>
            <div style="width:90%;float:left;">
            <span class="li">
                可以继续学习Sass或者less
            </span>
            </div>



            </div>


            
            <div class="fucksend">
 <el-input placeholder="请输入内容" v-model="fucctext" class="input-with-select">
                 <el-button slot="append"  @click="xxxsend"> 发送</el-button>
            </el-input>
            </div>
           
            </div> 
          
    </div> 
     
</template>
<script>
  

export default {
    data(){
        return{
            fuckkkk: false,
            fucctext: ''

        }
    },
  components:{
   
  },methods:{
      xxxsend: function(){
          this.fuckkkk = true;
          this.fucctext = '';
      }
  }
}
</script>
<style scoped>
body { 
 padding: 0; 
 margin: 0; 
 background: -moz-linear-gradient(-45deg, #183850 0, #183850 25%, #192c46 50%, #22254c 75%, #22254c 100%); 
 background: -webkit-linear-gradient(-45deg, #183850 0, #183850 25%, #192c46 50%, #22254c 75%, #22254c 100%); 
 background-repeat: no-repeat; 
 background-attachment: fixed; 
} 
  
::-webkit-scrollbar { 
 width: 10px; 
} 
  
::-webkit-scrollbar-track { 
 border-radius: 10px; 
 background-color: rgba(25, 147, 147, 0.1); 
} 
  
::-webkit-scrollbar-thumb { 
 border-radius: 10px; 
 background-color: rgba(25, 147, 147, 0.2); 
} 
  
.chat-thread { 
 margin: 24px auto 0 auto; 
 padding: 0 20px 0 0; 
 list-style: none; 
 overflow-y: scroll; 
 overflow-x: hidden; 
} 
  
.chat-thread .li { 
 position: relative; 
 clear: both; 
 display: inline-block; 
 padding: 16px 40px 16px 20px; 
 margin: 0 0 20px 0; 
 font: 16px/20px 'Noto Sans', sans-serif; 
 border-radius: 10px; 
 background-color: rgba(25, 147, 147, 0.2); 
} 
  
/* Chat - Avatar */
.chat-thread .img { 
 width: 50px; 
 height: 50px; 
 border-radius: 50px; 
 content: ''; 
 float:left; 
  
} 
  
/* Chat - Speech Bubble Arrow */
.chat-thread li:after { 
 position: absolute; 
 top: 15px; 
 content: ''; 
 width: 0; 
 height: 0; 
 border-top: 15px solid rgba(25, 147, 147, 0.2);
  
} 
  
.chat-thread li:nth-child(odd) { 
 animation: show-chat-odd 0.15s 1 ease-in; 
 -moz-animation: show-chat-odd 0.15s 1 ease-in; 
 -webkit-animation: show-chat-odd 0.15s 1 ease-in; 
 float: right; 
 margin-right: 80px; 
 color: #0AD5C1; 
} 
  
.chat-thread li:nth-child(odd):before { 
 right: -80px; 
} 
  
.chat-thread li:nth-child(odd):after { 
 border-right: 15px solid transparent; 
 right: -15px; 
} 
  
.chat-thread li:nth-child(even) { 
 animation: show-chat-even 0.15s 1 ease-in; 
 -moz-animation: show-chat-even 0.15s 1 ease-in; 
 -webkit-animation: show-chat-even 0.15s 1 ease-in; 
 float: left; 
 margin-left: 80px; 
 color: #0EC879; 
} 
  
.chat-thread li:nth-child(even):before { 
 left: -80px; 
} 
  
.chat-thread li:nth-child(even):after { 
 border-left: 15px solid transparent; 
 left: -15px; 
} 
  
.chat-window { 
 position: fixed; 
 bottom: 18px; 
} 
  
.chat-window-message { 
 width: 100%; 
 height: 48px; 
 font: 32px/48px 'Noto Sans', sans-serif; 
 background: none; 
 color: #0AD5C1; 
 border: 0; 
 border-bottom: 1px solid rgba(25, 147, 147, 0.2); 
 outline: none; 
} 
  
/* Small screens */
@media all and (max-width: 767px) { 
 .chat-thread { 
 width: 90%; 
 height: 500px; 
 } 
  
 .chat-window { 
 left: 5%; 
 width: 90%; 
 } 
} 
/* Medium and large screens */
@media all and (min-width: 768px) { 
 .chat-thread { 
 width: 70%; 
 height: 500px; 
 } 
  
 .chat-window { 
 left: 25%; 
 width: 50%; 
 } 
} 
@keyframes show-chat-even { 
 0% { 
 margin-left: -480px; 
 } 
  
 100% { 
 margin-left: 0; 
 } 
} 
@-moz-keyframes show-chat-even { 
 0% { 
 margin-left: -480px; 
 } 
  
 100% { 
 margin-left: 0; 
 } 
} 
@-webkit-keyframes show-chat-even { 
 0% { 
 margin-left: -480px; 
 } 
  
 100% { 
 margin-left: 0; 
 } 
} 
@keyframes show-chat-odd { 
 0% { 
 margin-right: -480px; 
 } 
  
 100% { 
 margin-right: 0; 
 } 
} 
@-moz-keyframes show-chat-odd { 
 0% { 
 margin-right: -480px; 
 } 
  
 100% { 
 margin-right: 0; 
 } 
} 
@-webkit-keyframes show-chat-odd { 
 0% { 
 margin-right: -480px; 
 } 
  
 100% { 
 margin-right: 0; 
 } 
} 
.credits{ 
 text-align:center; 
 margin-top:35px; 
 color: rgba(255, 255, 255, 0.35); 
 font-family: 'Noto Sans', sans-serif; 
} 
.credits a{ 
 text-decoration:none; 
 color: rgba(255, 255, 255, 0.35); 
} 
.fucksend{
 margin-top: 455px;
   bottom: 0px;
}
</style>
