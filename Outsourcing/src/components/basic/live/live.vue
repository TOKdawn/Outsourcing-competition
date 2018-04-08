<template>
  <div class="live_basic">
     <div class="live_bg"></div>
     <div class="live_show">
            <Row>
                <Col span="18" style="padding:10px"> 
                    <div class="live_play">
                        <div class="left_header">
                            <Row>
                               <Col span="3"> 
                                   <img :src="live.user" alt="" >
                                </Col>
                               <Col span="17"> 
                                    <div>
                                        <Row>
                                            <Col span="2">
                                                  <Tag type="border" color="blue" style="margin-top:5px;">直播</Tag>
                                            </Col>
                                            <Col span="8" style="overflow:hidden;">
                                                    <h1>{{newTitle}}</h1>
                                            </Col>
                                            <Col span="10">
                                                    <p>{{live.classification}}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col span="4">
                                                <div>{{live.teacher}}</div>
                                            </Col>
                                            <Col span="16">
                                                <div class="live_ranking">
                                                    <Icon type="connection-bars"></Icon>
                                                    {{live.ranking}}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                               </Col>
                               <Col span="4"> </Col>
                            </Row>
                        </div>
                        <div class="left_main">
                        </div>   
                        <div class="left_bottem">

                        </div>
                    </div>
                    </Col>
                <Col span="6" style="padding:10px 5px">
                <div class="live_info">
                    <div class="right_header">

                    </div>
                    <div class="right_main"></div>
                </div>

                </Col>
            </Row>
     </div>
  </div>
</template>
<script>
    export default {
  data() {
    return {
        live:{
            title: "未命名直播",
            classification: "未知分类",
            teacher: "张老师",
            ranking: "1",
            user: require('./userhead1.png'),
        }
    }
  },
  computed: {
    newTitle:function(){
        // console.log(this.live.title);
        // return this.live.title
        return (this.live.title.length>8) ? this.live.title.substring(0,7)+'...'  : this.live.title;
    }  
  },
  methods: {},
  created() {
   
  },
  components: {}
};
</script>
<style scoped>
.live_basic{
    background-color: #f2f3f5;
}
.live_bg{
   
    background:url('./bg.webp')  0 0 /100% 100% no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 800px;
    
}
.live_show{
    width: 1200px;
    height: 800px;
    margin:  auto;
    padding-top: 15px 0px;
}
.live_play, .live_info{
    height: 700px;
    background: #fff;
    border-radius: 10px;
}
.left_header img{
    height: 66px;
    border-radius: 40px;
 
}
.left_header{
        padding: 17px 24px 17px 17px;
            height: 100px;
}
.left_header h1{
    font-weight: 500;
    font-size: 23px;
    
}

.left_main{
    height: 500px;
    background-color: black;
}
.left_bottem{
    height: 100px;
      padding: 17px 24px 17px 17px;
}
</style>
