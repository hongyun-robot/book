<template>
  <div id="shop">
    <img
      src="~assets/购物车-蓝.png"
      alt="点击进入购物车购买商品"
      title="点击进入购物车购买商品"
    />
    <!-- <shop-mask ref="showShop"></shop-mask> -->
  </div>
</template> 
<script>
import ShopMask from "./ShopMask";
export default {
  name: "ShoppingCart",
  components: { ShopMask },
};
</script>
<style lang="less">
#shop {
  width: 140px;
  height: 300px;
  background-color: transparent;
  border: 3px solid #000;
  border-radius: 15px;
  top: 100px;
  right: 100px;
  position: fixed;
  display: none;
  cursor: pointer;
}
</style>