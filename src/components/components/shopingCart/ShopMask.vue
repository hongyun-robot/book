<template>
  <div class="shopMask" ref="shopMask">
    <grail-layout class="maskGrailLayout" rightWidth="46px">
      <div class="shopMaskCenter" slot="center">购物车</div>
      <div
        class="shopMaskRight"
        @click="shopClose"
        ref="shopClose"
        slot="right"
      >
        X
      </div>
    </grail-layout>
    <div class="shopNav">
      <div class="t-checkbox">
        <input
          type="checkbox"
          class="checkall"
          ref="shopCheckAll"
          @change="shopCheckAll"
        />
        全选
      </div>
      <div class="t-goods">商品</div>
      <div class="t-price">单价</div>
      <div class="t-num">数量</div>
      <div class="t-sum">小计</div>
      <div class="t-action">操作</div>
    </div>
    <div class="shopItems">
      <shop-item @itemShopPrice="itemShopPrice"></shop-item>
      <shop-item @itemShopPrice="itemShopPrice"></shop-item>
      <shop-item @itemShopPrice="itemShopPrice"></shop-item>
    </div>
    <div class="shopMaskBottom">
      <span>合计：{{ $store.getters.changPrice }}</span>
      <a href="javascript:;">去结算</a>
    </div>
  </div>
</template> 
<script>
import GrailLayout from "components/common/GrailLayout";
import ShopItem from "./ShopItem";
export default {
  name: "ShopMask",
  components: { GrailLayout, ShopItem },
  mounted() {
    this.$bus.$emit("shopMaskLoad", this.$refs.shopMask);
  },
  methods: {
    // 点击叉号关闭购物车
    shopClose() {
      $(this.$refs.shopClose).parents(".shopMask").slideUp(1000);
    },
    // 全选
    shopCheckAll() {
      this.$children.forEach((el, index) => {
        if (index !== 0) {
          el.$refs.shopItemCheck.checked = this.$refs.shopCheckAll.checked;
        }
      });
    },

    itemShopPrice(item) {
      return item;
    },
  },
};
</script>
<style lang="less">
.shopMask {
  position: fixed;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  border-radius: 10px;
  cursor: auto;
  .maskGrailLayout {
    div {
      line-height: 46px;
      text-align: center;
      font-size: 20px;
      transition: all 0.4s;
    }
    .shopMaskCenter {
      background-color: rgba(103, 194, 58, 0.7);
      color: #fff;
      border-top-left-radius: 5px;
      cursor: auto;
      &:hover {
        background-color: rgba(103, 194, 58, 0.9);
      }
    }
    .shopMaskRight {
      color: #fff;
      background-color: #909399;
      cursor: pointer;
      border-top-right-radius: 5px;
      &:hover {
        background-color: rgba(144, 147, 153, 0.8);
      }
    }
  }
  .shopNav {
    height: 32px;
    line-height: 26px;
    padding: 5px 0;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    border-top: 0;
    position: relative;

    & > div {
      float: left;
    }

    .t-checkbox,
    .p-checkbox {
      height: 18px;
      line-height: 13px;
      padding-top: 7px;
      width: 122px;
      padding-left: 11px;
    }

    .t-goods {
      width: 229px;
    }

    .t-price {
      width: 120px;
      padding-right: 40px;
      text-align: right;
    }

    .t-num {
      width: 150px;
      text-align: center;
    }

    .t-sum {
      width: 100px;
      text-align: center;
    }

    .t-action {
      width: 130px;
      text-align: center;
    }
  }
  .shopMaskBottom {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #909399;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
    a {
      margin-left: 30px;
      width: 100px;
      height: 30px;
      line-height: 30px;
      background-color: tomato;
      display: inline-block;
      color: #f2f6fc;
      text-align: center;
      &:hover {
        background-color: red;
      }
    }
  }
}
</style>