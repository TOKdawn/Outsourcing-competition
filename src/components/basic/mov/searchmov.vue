<template>
<div>
 <div class="mov_list">
      <movie :apidate="require('./1.jpg')"></movie>
       <movie :apidate="require('./1.jpg')"></movie>
        <movie :apidate="require('./1.jpg')"></movie>
         <movie :apidate="require('./1.jpg')"></movie>
          <movie :apidate="require('./1.jpg')"></movie>
           <movie :apidate="require('./1.jpg')"></movie>
      
  </div>

</div>
</template>
<script type="text/ecmascript-6">
import movie from '../../moiv/moiv.vue'
export default {
  data() {
    return {
      showData: {}
    };
  },
  components: {
    movie
  },
  methods: {
  
    mov(_id){
        // console.log(_id)
         this.$router.push({ name: "showmov", params: { id: _id } });
    }
  },
  created() {
    // console.log( this.$route.params.scorename);
    if (this.$route.params.scorename == "$allmov") {
        let _this = this;
        this.$axios
        .get("/file/alldata")
        .then((res) => {
          _this.showData = res.data.allFile;
          console.log(_this.showData)
        }).catch((err)=>{
                console.log('err:',err)
        })
    } else {
      let _this = this;
      this.$axios
        .get("/file/search?courseName=" + this.$route.params.scorename)
        .then(res => {
          _this.showData = res.data.searchRes;
            console.log(_this.showData)
        }).catch((err)=>{
                console.log('err:',err)
        })
    }
  }
};
</script>
<style scoped>
.mov_list {
  width: 1200px;
  left: 0;
  right: 0;
  margin: 20px auto 10px auto;

  height: 800px;
}
.mov_card{
    width: 250px;
    margin: 10px;
    display: inline-block;
    text-align: center;
}
.image{
  width: 100%;
}
</style>

