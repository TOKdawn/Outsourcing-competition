<template>
  <div class="basic">
    <heeader></heeader>
    <router-view></router-view>
    <foooter></foooter>
  </div>

</template>
<script>
import heeader from "./header/headerdark";
import foooter from "./footer/footer"
export default {
  data() {
    return {};
  },
  components: {
    heeader,
    foooter
  }
};
</script>
<style scoped>
.basic{
  background-color: #fff;
}
</style>
