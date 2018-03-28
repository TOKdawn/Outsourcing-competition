<template>
<div>
     <el-button type="primary" class="shixun_button">上传 <i class="el-icon-upload2"></i> </el-button>
      <Card style="width:90%;margin: 20px auto 50px auto">
        <p slot="title" class="shixun_tit">
             <Row>
        <Col span="8">
            软件体系架构作业 </Col>
        <Col span="8"> <span style="text-align: center;">截止时间2018-4-10</span> </Col>
        <Col span="8"><span>作业进度65% </span> </Col>
    </Row>
          
        </p>
       <div class="shixun_teacher">
           <Icon type="person"></Icon>王小明
       </div>
      <el-progress :text-inside="true" :stroke-width="15" :percentage="65" class="shixun_progress"></el-progress>
    </Card>
      <Card style="width:90%;margin: 20px auto">
        <p slot="title" class="shixun_tit">
              <Row>
        <Col span="8">
            软件体系架构作业 </Col>
        <Col span="8"> <span style="text-align: center;">截止时间2018-4-10</span> </Col>
        <Col span="8"><span>作业进度55% </span> </Col>
    </Row>
          
        </p>
        <div class="shixun_teacher">
           <Icon type="person"></Icon>王小明
       </div>
      <el-progress :text-inside="true" :stroke-width="15" :percentage="55" class="shixun_progress"></el-progress>
    </Card>
     </div>
</template>
<script>
export default {
  
}
</script>
<style >
.shixun_button{
    margin-left: 88%;
}
.shixun_tit {
    font-size: 22px !important;
    padding-left: 20px;
    font-weight: 700 !important;
}
.shixun_tit span{
    width: 100%;
    color: #3e3e3e;
    display: block;
    font-weight: 500;
    font-size: 16px;
    text-align: right;
}

.shixun_progress{
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 0px;
}
.el-progress-bar__outer{
     border-radius: 0px 0px 0px 4px !important;
}


.el-progress-bar__inner{
     border-radius: 0px 0px 0px 4px !important;
}
.shixun_teacher{
    margin-top: 50px;
    font-size: 16px;
    margin-left: 10px;
    
}
</style>
