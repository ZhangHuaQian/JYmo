<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import {serverIP as ip} from '@/utils/serverIP'
export default {
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      // this.$router.replace("/home");
      // window.location.href="www.360.com"
    } else {
      // alert("pc端页面，检测到非手机，临时跳转到百度");
            // this.$router.replace("/home");
window.location.replace("http://gxjcxy.sx-tech.net/#/home/index");

    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
