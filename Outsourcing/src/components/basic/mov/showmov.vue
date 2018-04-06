<template>
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
    <div class="movie_show">

    </div>
    <div class="movie_butten">

    </div>
    <div class="movie_comment">

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
.movie_title{
  margin-bottom: 30px;
}
.movie_basic {
  width: 1200px;
  margin: auto;
  padding-top:20px;

}
.movie_user{
  font-size: 14px;
}
.movie_user img{
  width: 80px;
  height: 80px;
}
.movie_info p{
  font-size: 15px;
  padding: 5px 0px 15px 0px;
} 
.movie_info i{
  font-size: 15px;
  padding-right: 5px;
  color: #888;
}
.movie_info {
  font-size: 14px;
  cursor: pointer;
}
.movie_user div{
  top:0px;
  display: inline-block;
  position: absolute;
  padding-top:10px;
  padding-left: 5px;
  
}
.movie_user div p {
  font-size: 18px;
  font-weight: 700;
  vertical-align: top;
}
</style>
