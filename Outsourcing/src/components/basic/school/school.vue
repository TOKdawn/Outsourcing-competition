<template>
    <div class="school">
        <div class="heade_img">
    
        </div>
        <div class="z_basic">
            <Row>
                <Col span="3">
                <img src="./user.jpg" alt="" class="school_img">
                </Col>
                <Col span="13" class="school_infor">
                <span>大连东软信息学院</span> 大连东软信息学院（Dalian Neusoft University of Information）是经国家教育部批准设立，由东软控股投资举办的一所民办普通高等院校。 2000年经辽宁省教育厅批准，成立大连东方信息技术研修学院并成为东北大学网络教育学院大连分院，2001年转制为大连东软信息技术职业学院，2004年成为东北大学东软信息学院，
                </Col>
                <Col span="8">

                <div class="school_top" v-if="userrole">
                      公&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp告
                </div>
                <div class="school_top" v-else>
                 
                     登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录
                </div>
                 <div class="school_down" v-if="userrole">
                     <div class="school_notice">      <p>我校获大萨达撒大神批教育部首批“新工...</p>
                     <p>2018年从自行车我校师生在“‘点赞十九大...</p>
                     <p>关于20从自行车在18年4月某日清明节放假调课...</p>
                      <p>2018年从自行车我校师生在“‘点赞十九大...</p>
                     <p>关于2018从自行车在从现在年清明节放假调课...</p></div>
                
                 </div>

                <div class="school_down" v-else>
    
    
                    <div class="logBar">
                        <a @click="changeicoflag()">你是?</a>
                        <div id="logicon" :class="{icomove:icoflag}">
                            <div class="icobar" @click="student()">
                                <Icon type="person"> </Icon>学生</div>
                            <div class="icobar" @click="teacher()">
                                <Icon type="university"> </Icon>教师</div>
                            <div class="icobar" @click="manage()">
                                <Icon type="person-stalker"> </Icon>管理员</div>
                        </div>
    
                    </div>
    
    
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="logform">
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="用户名">
                            </Input>
                        </FormItem>
                        <FormItem prop="password" id="loginform">
                            <Input type="password" v-model="formInline.password" placeholder="密码">
                            </Input>
                        </FormItem>
    
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')" id="loginbutton">登录</Button>
                        </FormItem>
                    </Form>
                </div>



                </Col>
            </Row>
           
        </div>
         <div class="school_movBar">


            <Row>
                <Col span="1">  <h1>课程</h1></Col>
                <Col span="21"> <div class="line"></div></Col>
                 <Col span="2">  <h2>更多 >>></h2></Col>
                
            </Row>
                    <div style="width:1280px; margin:auto;">
            <moive :apidate=" require('./1.jpg')">
            </moive>
            <moive :apidate="require('./2.jpg')">
            </moive>
            <moive :apidate="require('./3.jpg')">
            </moive>
            <moive :apidate="require('./4.jpg')">
            </moive>
            <moive :apidate="require('./5.jpg')">
            </moive>
                    </div>
        </div>
        <div class="school_movBar">


            <Row >
                <Col span="1">  <h1>直播</h1></Col>
                <Col span="21"> <div class="line"></div></Col>
                 <Col span="2">  <h2>更多 >>></h2></Col>
                
            </Row>
            <div style="width:1280px; margin:auto;">
            <moive :apidate=" require('./1.jpg')">
            </moive>
            <moive :apidate="require('./2.jpg')">
            </moive>
            <moive :apidate="require('./3.jpg')">
            </moive>
            <moive :apidate="require('./4.jpg')">
            </moive>
            <moive :apidate="require('./5.jpg')">
            </moive>
            </div>
        </div>

      <div class="school_movBar">


            <Row>
                <Col span="1">  <h1>实训</h1></Col>
                <Col span="21"> <div class="line"></div></Col>
                 <Col span="2">  <h2>更多 >>></h2></Col>
                
            </Row>
                    <div style="width:1280px; margin:auto;">
           <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'400px'"></training>
            <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'400px'"></training>
             <training :teacher="'朱老师'" :from="'计算机科学与技术'" :num="23" :title="'混合开发实现在线书城'" :width="'400px'"></training>
                    </div>
        </div>

        <div class="school_teacher">
               <Row class="school_teacherbox2">
                <Col span="1">  <h1>教师</h1></Col>
                <Col span="21"> <div class="line"></div></Col>
                 <Col span="2">  <h2>更多 >>></h2></Col>
            </Row>
            <Row class="school_teacherbox">
                <Col span="8">
                <img src="./user.jpg">
                <p>
                    张小三
                    
                </p>
                </Col>
                <Col span="8">
                <img src="./user.jpg">
                <p>
                    张小三
                </p>
                </Col>
                <Col span="8">
                <img src="./user.jpg">
                <p>
                    张小三
               
                </p>
                
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import store from "@/vuex/index.js";
    import moive from "../../moiv/moiv.vue";
    import training from "../../training/training.vue";
    export default {
        data() {
            return {
                icoflag: false,
                userrole: false,
                formInline: {
                    user: "",
                    password: "",
                
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    }],
                    password: [{
                            required: true,
                            message: "请输入密码",
                            trigger: "blur"
                        },
                        {
                            type: "string",
                            min: 2,
                            message: "密码最小六位",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods: {
            handleSubmit(name) {
                let _this = this;
    
                this.$axios
                    .post("/user/login", {
                        loginNum: this.formInline.user,
                        loginPsd: this.formInline.password
                    })
                    .then(function(response) {
                        console.log(response.data.role);
                        if (response.data.role !== 30) {
                            var userData = {
                                role: parseInt(response.data.role),
                                name: response.data.name
                            };
                            store.commit("updata", userData);
                            console.log("rouke");
                            _this.$router.push("/basic/home");
                        }
                    })
                    .catch(function(error) {
                        console.log("请求失败");
                    });
            },
            changeicoflag() {
                this.icoflag = !this.icoflag;
                console.log(this.icoflag);
            },
            student() {
                let userdata = {
                    role: 10,
                    name: "dawn",
                    accountnum: 15180600303
                };
                store.commit("updata", userdata);
                this.$router.push("/")
            },
            teacher() {
                let userdata = {
                    role: 20,
                    name: "shaow",
                    accountnum: 122222222321
                };
                store.commit("updata", userdata);
            }
        },
        components: {
            moive,
            training
        },
        created(){
            this.userrole = store.state.userdata.role;
        }
    };
</script>

<style scoped lang="scss">
    @import "../../../assets/basic.css";
    .school {
        background: #eee;
    }
     .school_movBar  h1{
      color: #333;
      font-size: 25px;
      font-weight: 400;
      margin-bottom: 20px;
  }
    .school_movBar h2{
        color: #888;
        font-size: 18px;
        margin-top: 4px;
    }
   .line{
       width: 100%;
       height: 19px;
       border-bottom: #999 solid 1px;
   }
   .school_teacher{
       width: 100%;
       height: 300px;
       background-color: #fff;
       margin-top: 80px;
   }
    .school_img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        cursor: pointer;
        margin-top: -60px;
    }
    .school_movBar{
    height: 350px;
    width: 1400px;
    left: 0;
    right: 0;
    margin: 20px auto 0 auto;
    }
    
    .z_basic {
        min-width: 1300px;
        height: auto;
        margin: 0 auto;
        background-color: #eee;
    }
    
    .heade_img {
        background: url("./shcoll.jpg") 0 0 /100% 100% no-repeat;
        height: 180px;
    }
    
    .school_infor {
        color: #333;
        font-size: 16px;
        padding: 0px 60px 0px 0px;
    }
    
    .school_infor span {
        font-size: 22px;
        font-weight: 600;
        display: block;
    }
    .school_teacherbox2{
        width: 1400px;
       margin: 20px auto 0px auto;
        padding-top: 20px;
    }
    .school_teacherbox{
        width: 1200px;
        margin: 30px auto 0px auto;
        cursor: pointer;
       
    }
    .school_teacherbox img{
        width: 80px;
        height: 80px;
        border-radius: 40px;

    }
    .school_teacherbox p{
        color: #222;
        font-size: 24px;
      display: inline;
      vertical-align: top;
      padding: 15px 0px 0px 20px;
        
    }
    .school_down {
        background-color: #fff;
    }
    
    .school_top {
        background: rgba(255, 255, 255, 0.5);
        color: #222;
        font-size: 26px;
        padding: 10px 0px;
        text-align: center;
        margin-top: -59px;
    }
    .school_movBar{
        margin-top: 60px;
    }
    $--login-width: 300px;
    .ivu-form-inline .ivu-form-item {
        display: block;
    }
    
    @keyframes icomove {
        0% {
            -webkit-transform: translate(-5px, 0);
            transform: translate(-5px, 0px);
            color: rgba(188, 188, 188, 0);
        }
        100% {
            -webkit-transform: translate(0px, 0px);
            transform: translate(0px, 0px);
            clear: rgba(188, 188, 188, 0.8);
        }
    }
    
    .ziconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
    }
    
    #loginform div input {
        width: $--login-width;
    }
    
    #logform {
        margin-top: 20px;
        width: $--login-width;
        display: block;
        margin: auto;
    }
    
    #loginbutton {
        width: $--login-width;
        font-size: 15px;
        margin-bottom: 30px;
    }
    
    .ivu-input {
        width: $--login-width;
    }
    
    .logBar {
        text-align: left;
        width: $--login-width;
        vertical-align: top;
        line-height: 24px;
        left: 0;
        right: 0;
        margin: auto;
        padding: 20px 0px;
        height: 60px;
        cursor: pointer;
    }
    
    .logBar a {
        display: inline-block;
        color: #888;
        font-size: 14px;
        line-height: 28px;
    }
    
    .logBar a:hover {
        color: #666;
    }
    
    #logicon {
        //    -webkit-transform: translate(-10px,0);
        //      transform: translate(-10px, 0px);
        //     color:rgba(117,117,117,0);
        display: none;
        margin-left: 5px;
        line-height: 28px;
        vertical-align: top;
        color: #888;
        letter-spacing: 3px;
        font-size: 15px;
    }
    
    .icobar {
        display: inline-block;
    }
    
    .icomove {
        animation: icomove 1s;
        -webkit-animation: icomove 1s;
        display: inline-block !important;
    }
    
    #logicon i:hover {
        color: #666;
    }
    
    .infor {
        margin-top: 20px;
        color: #666;
        font-size: 18px;
        text-align: center;
    }
    .active{
        color: #2196f3;
    }
    .school_notice{
        padding: 0px 30px 20px 30px;
        
    }
    .school_notice p{
        padding: 10px 0px 0px 0px;
        line-height: 30px;
        font-size: 16px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }
</style>
