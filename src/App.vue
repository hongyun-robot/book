<template>
  <div id="app">
    <top-bar></top-bar>
    <heade></heade>
    <conten ref="content"></conten>
    <shopping-cart @click.native="showShop"></shopping-cart>
    <shop-mask ref="showShop"></shop-mask>
  </div>
</template>

<script>
import TopBar from "components/common/TopBar";
import Heade from "components/components/heade/Heade";
import Conten from "components/components/conten/Conten";
import ShoppingCart from "components/components/shopingCart/ShoppingCart";
import ShopMask from "components/components/shopingCart/ShopMask";

export default {
  name: "App",
  components: { TopBar, Heade, Conten, ShoppingCart, ShopMask },
  mounted() {
    $(window).scroll(function (e) {
      if ($(document).scrollTop() >= $("#content").offset().top - 20) {
        $("#shop").fadeIn();
      } else {
        $("#shop").fadeOut();
      }
    });
  },
  methods: {
    showShop() {
      console.log(this.$refs.showShop);
      $(this.$refs.showShop.$el).slideDown(600);
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  #app {
    width: 1200px;
    margin: 0 auto;
    // background-image: linear-gradient(to bottom, #edf1f3 0%, #dee5e9 100%);
  }
}
a {
  color: #333;
  text-decoration: none;
}
</style>
