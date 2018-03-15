<template>
    <el-card :body-style="{ padding: '0px' }" class="vidoe_cord">
          <img src="./2.jpg" class="image">
          <div style="padding: 3px 10px;">
            <span>{{moiveDate.status}}</span>
            <div class="home_teacher">
              <p style=""><Icon type="person" style="font-size:16px; margin-left:10px;"></Icon>  {{moiveData.lenth}} </p>
            </div>
            <div class="home_infoBar">
              <div><Icon style="font-size:14px" type="chatbubble-working"></Icon>99+</div>
              <div><Icon style="font-size:14px" type="eye"></Icon>23</div>  
          <div><Icon style="font-size:14px" type="ios-heart"></Icon>87</div>
            </div>
          </div>
        </el-card>
</template>

<script>
export default {
  
  data(){

      return{
          moiveDate: {
              status: 'dasdas',
              lenth: 23
          }
          
      }
  },
  created(){
      console.log(this.$API)
     this.moiveDate = this.$http.getText(this);
   
  },
  props: {
        apidate:{
            type: String,
            default: ""
        }

    }
}
</script>
<style>
 .vidoe_cord {
    width: 250px;
    float: left;
    margin: 0px 15px;
  }
  
  .vidoe_cord span{
    font-size: 19px;
    font-weight: 700;
    text-align: left;
    color: #333;
    cursor: pointer;



  }
  .vidoe_cord img{
    cursor: pointer;
  }
    .vidoe_cord span:hover{
   
    font-weight: 700;
    text-align: left;
    color: #000;

  }
  .vidoe_cord{
    color: #888;
    text-align: left;
    width: 248px;
   height: 294px;
  }
.home_teacher{
  margin: 8px 0px 0px 0px;
  font-size: 13px;
}
.home_infoBar div{
  cursor: pointer;
}
.home_infoBar div:nth-child(3){
 float: right;
}
.home_infoBar div:nth-child(2){
 float: left;
}
.home_infoBar div:nth-child(1){
display: inline-block;
margin-left: 60px;
}

.home_infoBar{
  margin-top:30px;
 
}
</style>
