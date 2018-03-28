<template>
    <div>
         
             <moive :apidate=" require('./4.jpg')">
            </moive>
             <moive :apidate=" require('./4.jpg')">
            </moive>
             <moive :apidate=" require('./4.jpg')">
            </moive>
    </div> 
     
</template>
<script>
   import moive from "../../../moiv/moiv.vue";

export default {
  components:{
      moive
  }
}
</script>
<style scoped>

</style>
