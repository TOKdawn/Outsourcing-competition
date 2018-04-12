<template>
     <div>
       
              <Card class="chengji">
                <p slot="title">C语言提升</p>
                  <p>考试时间2018-5-28</p>
            <div>89</div>
                <p class="chengji_tea">查看老师评价</p>
            </Card>
                   <Card class="chengji">
                <p slot="title">JavaScript高级程序设计</p>
                  <p>考试时间2018-5-28</p>
                <div>89</div>
                  <p class="chengji_tea">查看老师评价</p>
            </Card>
                 
                   <Card class="chengji">
                <p slot="title">深入浅出设计模式</p>
                <p>考试时间2018-5-28</p>
               <div>68</div>
                <p class="chengji_tea">查看老师评价</p>
            </Card>
              <Card class="chengji">
                <p slot="title">PHP应用开发</p>
                  <p>考试时间2018-5-28</p>
               <div>79</div>
                  <p class="chengji_tea">查看老师评价</p>
            </Card>
              <Card class="chengji">
                <p slot="title">Python程序设计</p>
                 <p>考试时间2018-5-28</p>
                <div>89</div>
                <p class="chengji_tea">查看老师评价</p>
            </Card>
     </div>
</template>
<script>

export default {
}
</script>
<style scoped>
.chengji{
  width: 250px;
  display: inline-block;
  margin: 25px 15px;
}
.chengji_tea{
  text-align: right ;
}
.chengji div{
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  margin: 30px;
}
</style>


