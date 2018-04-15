<template>
    <el-card :body-style="{ padding: '0px' }" class="live_cord">
          <img :src="apidate" class="image"@click="seeMovie">
          <div style="padding: 3px 10px;">
            <span @click="seeMovie">{{this.title}}</span>
            <div class="live_infoBar">
              <div><Icon style="font-size:16px" type="eye"></Icon> &nbsp23</div>
             <p ><Icon type="person" style="font-size:16px; margin-left:10px;"></Icon>  {{this.lenth}} </p>
            </div>
          </div>
        </el-card>
</template>

<script>
export default {
  
  data(){

      return{
          moiveDate: {
              status: 'java零基础快速提升',
            
          },
          _id: '123333'
      }
  },
  created(){
    
    console.log(this.apidate);
   
  },
  props: {
        apidate:{
            type: String,
            default: ""
        },
        lenth:{
            type: String,
            default: "张老师"
        },
        title:{
            type: String,
            default: "张老师"
        },
        roomID:{
          type: Number,
          default: 123456
        }

    },
    methods:{
      seeMovie: function(){
         this.$router.push({ name: "live", params: { id: this.roomID } });
      }
    }
}
</script>
<style>
 .live_cord {
    width: 250px;
    float: left;
    margin: 20px 15px;
  }
  .live_cord i{
      font-size: 18px;
  }
  
  .live_cord span{
    font-size: 19px;
    font-weight: 700;
    text-align: left;
    color: #333;
    cursor: pointer;



  }
  .live_cord img{
    cursor: pointer;
    width: 100%;
  }
    .live_cord span:hover{
   
    font-weight: 700;
    text-align: left;
    color: #000;

  }
  .live_cord{
    color: #888;
    text-align: left;
   width: 220px;
    height: 220px;
  }
.live_teacher{
  margin: 8px 0px 0px 0px;
  font-size: 13px;
}
.live_infoBar div{
  cursor: pointer;
}
.live_infoBar div:nth-child(1){
 float: left;
 margin-right: 30px;
}
.live_infoBar p{
    vertical-align: top;
    line-height: 19px;
    cursor: pointer;
}


.live_infoBar{
  margin-top:30px;
  
 
}
</style>
