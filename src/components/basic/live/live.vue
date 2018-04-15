<template>
  <div class="live_basic">
      <el-dialog width="50%" title="hbase 测试题" :visible.sync="innerVisible" append-to-body>
						<div>
		<el-container>
			<el-main>
				<div v-for="question in questions">
					<p>{{question.title}}</p>
					<div v-for="(select, index) in question.selects">
						<el-radio :v-model=select.modelname :label=index >{{select.answer}}</el-radio>
					</div>
				</div>
                <button>提交</button>
			</el-main>
		</el-container>
	</div>
	</el-dialog>
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
                               <Col span="18">                                    
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
                                        <Row class="live_header_morinfo">
                                            <Col span="4">
                                                <div>{{live.teacher}}</div>
                                            </Col>
                                            <Col span="3">
                                                <div class="live_ranking">
                                                    <Icon type="connection-bars"></Icon>
                                                    {{live.ranking}}
                                                </div>
                                            </Col>
                                            <Col span="16">
                                                    <Icon type="eye"></Icon>
                                                    {{live.number}}
                                            </Col>
                                           
                                        </Row>
                                 
                               </Col>
                               <Col span="3">
                                 <Button type="primary" class="movie_butten"><Icon style="font-size:14px" type="ios-heart"></Icon> 关注</Button>
                                </Col>
                            </Row>
                        </div>
                        <div class="left_main">
                            <video id="videoElement" style="width: 878px"></video>
                        </div>   
                        <div class="left_bottem">
                             <Row>
                                 <Col span="4">
                                    dsa
                                 </Col>
                                 <Col span="5">
dasdas
                                 </Col>
                                 <Col span="11">
ddd
                                 </Col>
                                 <Col span="4">
                                 <Button type="primary" :disabled="textshow" @click="innershow">课堂作业</Button>
                                 </Col>
                             </Row>

                        </div>
                    </div>
                    </Col>
                <Col span="6" style="padding:10px 5px">
                <div class="live_info">
                    <div class="right_header">
                        <h1>教师助理</h1>
                        <img src="./hedda2.png" alt="">
                        <img src="./hdsad3.png" alt="">
                        <img src="./hedda2.png" alt="">
                    </div>
                    <div class="right_main">
                        <div class="live_massge">
                            <ul class="live_comments">
                                <li v-for="comm in comments">
                                    <p><span>{{comm.uname}}: &nbsp</span> {{comm.utext}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="live_comm">
                            <Row class="comm_buttonBar">
                                <Col span="4">&nbsp </Col>
                                <Col span="11">&nbsp</Col>
                                <Col span="5"> 彩色评论</Col>
                            </Row>
                                <Input class= "comm_input" v-model="user_comment" type="textarea" :rows="3" placeholder="在此输入....."></Input>
                               
                        </div>
                          <Button type="primary" class="comm_sent" @click="sendMessage()"> 发送</Button>
                    </div>
                </div>

                </Col>
            </Row>
     </div>
  </div>
</template>
<script>
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import Vue from 'vue';
import flvjs from 'flv';



export default {
  data() {
    return {
        client:'',
        user_comment:'',
        textshow: false,
        innerVisible: false,
    
        live:{
            title: "未命名直播",
            classification: "未知分类",
            teacher: "张老师",
            ranking: "1000",
            user: require('./userhead1.png'),
            number: 1233,
        },
        comments: [
         
        ],
        radio: '1',
		questions: [{
			title: 'Hbase 如何安装',
			selects: [{
				modelname: 'radio1',
				answer: 'linux'
			},{
				modelname: 'radio1',
				answer: 'windows'
			}]
		},
		{
			title: 'Hbase 如何卸载',
			selects: [{
				modelname: 'radio2',
				answer: 'linux'
			},{
				modelname: 'radio2',
				answer: 'windows'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		}]
        
    }
  },
  computed: {
    newTitle:function(){
        // console.log(this.live.title);
        // return this.live.title
        return (this.live.title.length>8) ? this.live.title.substring(0,7)+'...'  : this.live.title;
    }  
  },
  methods: {
      sendMessage: function(){
           this.comments.push({uname: '你自己' ,utext: this.user_comment});
         this.client.emit('msg',this.user_comment);
         this.user_comment = '';
         
      },
      innershow: function(){
          this.innerVisible=true;
      }
  },
  created() {
    // Vue.use(VueSocketio, '172.20.171.122:3000');
     let _this = this; 
    this.client =  socketio('ws://172.19.210.149:7001',{query:{room:this.$route.params.id,userID:'甘霖娘'}});
   this.client.on('connect',function(){
    console.log("sucess");
    // this.$socket.emit('join','甘霖娘')
    });
   
   this.client.on( 'msg', function(uname,utext){
    //    console.log(this.comments);
    // console.log({uname,utext})
        _this.comments.push({uname,utext});
    },);
    this.client.on('online', function(val){
        console.log(val);
        _this.$Message.warning('这是一条警告的提示');

    })
  },
  components: {},
//    sockets:{
//     connect: function(){
//     console.log("sucess");
//     // this.$socket.emit('join','甘霖娘')
//     },
//     msg: function(val){
//         console.log(val)
//         this.comments.push(JSON.parse(val));
//     },
//     online: function(val){
            
//     this.$Message.warning('这是一条警告的提示');
//     console.log("online",val);
//         this.comments.push(JSON.parse(val));
//     }

//   },
  mounted(){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: `http://172.19.210.149:9090/live/${this.$route.params.id}.flv`
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
  }
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
    border: #e1e1e1 1px solid;
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
.left_header p{
    line-height: 34px;
}
.left_main{
    height: 494px;
   
}
.left_bottem{
    height: 100px;
      padding: 17px 24px 17px 17px;
}
.live_header_morinfo{
    margin-top: 8px;
    font-size: 16px;
}
.live_header_morinfo i{
    font-size: 18px;
    color: deeppink;
    
}
.right_header{
    height: 120px;
    background-color: #fff;
    border-radius: inherit;
    

}
.right_main{
    background-color: #eee;
   height: 575px;
   border-radius: 0px 0px 10px 10px;
    border-bottom: #e1e1e1 1px solid;
}
.right_header h1{
    font-size: 14px;
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #888;
    border-bottom: 1px #eee solid;
    margin: 4px 0px;
}
.right_header img{
    width: 80px;
    margin-left: 10px;
    margin-top:5px;
}
.live_massge{
    padding: 5px;
    height: 440px;
    overflow:scroll;
}
.live_comments li{
    list-style: none;
    padding: 5px 5px; 

}
.live_comments span{

    color: #23ade5;
    font-size: 14px;
    height: 20px;
    font-weight: 500;
}
.live_comments p{
    
    position: relative;
    color: #646c7a;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    white-space: normal;
     word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;
   
   
}
.comm_input{
    padding: 5px 18px;
  
    line-height: 18px !important;
}
.comm_sent{
    float: right;
    margin-right: 20px;
    padding: 3px 25px;
}
.comm_buttonBar div{
    color: #646c7a;
    font-size: 14px;
    text-align: right;
    font-weight: 500;
    cursor: pointer;
}
</style>
