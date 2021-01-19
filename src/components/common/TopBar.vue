<template>
  <grail-layout id="topBar">
    <div class="left" slot="left">
      <span>欢迎来到HY书店网上商城！</span>
      <a href="javascript:;">注册</a>
      <a href="javascript:;">登录</a>
    </div>
    <div class="right" slot="right">
      <span>关注我们：</span>
      <a href="javascript:;"
        ><img src="~assets/icon/微信-5.png" alt="关注微信"
      /></a>
      <a href="javascript:;"
        ><img src="~assets/icon/QQ-5.png" alt="添加好友"
      /></a>
    </div>
  </grail-layout>
</template> 
<script>
import GrailLayout from "./GrailLayout";
export default {
  components: { GrailLayout },
  name: "TopBar",
};
</script>
<style lang="less">
#topBar {
  box-sizing: border-box;
  height: 46px;
  color: #444;
  font-size: 14px;
  padding: 8px 0 20px 0;
  background-color: #fff;
  .left {
    float: left;
    // width: auto !important;
    span,
    a {
      margin-right: 10px;
    }
  }
  .right {
    float: right;
    span {
      margin-right: 10px;
    }
    a {
      margin-right: 5px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
}
</style>