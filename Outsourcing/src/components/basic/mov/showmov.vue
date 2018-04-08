<template>
<div>
  <div class="movie_basic">
    <div class="movie_title">
      <Row>
        <Col span= "18" class="movie_info">
        <h1>
          Vue基础入门第一课-----从MVC到MVVM
        </h1>
          <p>大连东软信息学院 > 精品课程 > 前端技术 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  2018-04-01&nbsp 12:03</p>
        
        <Row style="width:80%">
                  <Col span= "3"><Icon type="play"></Icon>1.3W</Col>
                  <Col span= "3"><Icon type="chatboxes"></Icon>885</Col>
                  <Col span= "7"><Icon type="stats-bars"></Icon>全站最高日榜第14名</Col>
                  <Col span= "4"><Icon type="thumbsup"></Icon>点赞 6032</Col>
                  <Col span= "7"><Icon type="ios-star"></Icon>收藏 3190</Col>
        </Row>
        </Col>

        <Col span= "6" class="movie_user">
        <img src="./userhead1.png">
        <div >
          <p>张某某</p>
          软件工程系指导教师
        </div>
        </Col>
      </Row>
      
    </div>
    </div>
   
    <div class="movie_show">
      <div class="movie_basic">
      <div class="movie_play">

      </div>
      <div class="movie_say">
        <p>选集</p>
        <div style="color:#00838f;">第一节 从MVC到MVVM</div>
        <div>第二节 声明与渲染</div>
        <div>第三节 模板语法</div>
        <div>第四节 计算属性与监听器</div>
        <div>第五节 条件渲染</div>
        <div>第六节 事件处理</div>
        <div>第七节 表单输入绑定</div>
         <div>第八节 webpack使用</div>
        <div>第九节 路由与Vuex</div>
          <div>第十节 路由拦截</div>
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

    
    <div class="movie_basic">
    <div class="movie_comment">
      <Row >
        <Col span="18">      <h1>507 评论</h1>
            <p class="movie_page"> 共34页 &nbsp <span style="color:#128dca"> 1</span>   &nbsp 2 &nbsp  3 &nbsp 4 &nbsp ... &nbsp 34 &nbsp下一页</p>

            <Row>
              <Col span="4" class="comment_head"> <img src="./userhead1.png" alt=""></Col>
              <Col span="16" >    
                           <Input  class="comment_main" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"></Input>
                          
                 </Col>
              <Col span="4" >
                <Button type="info" class="comment_enter">发送评论</Button> </Col>  
            </Row>   
            <Row>
              <Col span="4"> </Col>
              <Col  span="20"> </Col>  
            </Row>   
      
        </Col>
        
        
        <Col span="6">ddd</Col>
      </Row>

    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      movData: "",
      commentData: "",
      comment: ""
    };
  },
  methods: {},
  created() {
    console.log(this.$route.params.id);
  },
  components: {}
};
</script>
<style scoped>
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
  height: 40px;
  margin: 8px auto 5px auto ;
  background-color: #f6f6f6;
  border-radius: 5px;
  font-size: 14px;
  line-height: 40px;
  color: #666;
  padding: 0px 10px; 
  cursor: pointer;
  font-weight: 600;

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
  margin: 20px 0px;
  line-height: 24px;
}
.comment_enter {
  margin: 20px 0px 20px 30px;
  height: 70px;
}
</style>
