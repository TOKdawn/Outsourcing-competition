<template>
  <div>
    <heeader></heeader>
    <router-view></router-view>
  </div>

</template>
<script>
import heeader from "./header/headerdark";
export default {
  data() {
    return {};
  },
  components: {
    heeader
  }
};
</script>
<style scoped>

</style>
