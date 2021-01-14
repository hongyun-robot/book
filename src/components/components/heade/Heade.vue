<template>
  <grail-layout
    class="header"
    leftWidth="350px"
    height="96px"
    rightWidth="200px"
  >
    <div slot="left" class="headerLeft">此处是 LOGO</div>
    <div slot="center" class="headerCenter">
      <div class="headerSearch">
        <input
          type="text"
          class="text"
          ref="headerSearch"
          placeholder="按 s 快速搜索"
        />
        <button>搜索</button>
      </div>
      <div class="headerHot">
        <span>热门搜索：</span>
        <span>中考</span>
      </div>
    </div>
    <div
      slot="right"
      class="headerRight"
      ref="headerRight"
      @mouseenter="enterCart"
      @mouseleave="leaveCart"
      @click="clickCart"
    >
      <img src="~assets/购物车.png" alt="" />
      <span>去购物车结算</span>
    </div>
  </grail-layout>
</template> 
<script>
import GrailLayout from "components/common/GrailLayout";

export default {
  name: "Heade",
  data() {
    return {
      shopMask: null,
    };
  },
  components: {
    GrailLayout,
  },
  mounted() {
    this.aa();
    this.$bus.$on("shopMaskLoad", (value) => {
      this.shopMask = value;
    });
  },
  methods: {
    clickCart() {
      $(this.shopMask).slideDown(600);
    },
    enterCart() {
      $(this.$refs.headerRight)
        .animate({
          width: 126,
        })
        .css("backgroundColor", "#ccc");
    },
    leaveCart() {
      $(this.$refs.headerRight)
        .animate({
          width: 38,
        })
        .css("backgroundColor", "transparent");
    },
    aa() {
      $("body").keyup(function (e) {
        if (e.keyCode === 83) {
          $(".text").focus();
        }
      });
    },
  },
};
</script>
<style lang="less">
.header {
  background-color: #fff;
  .headerLeft {
    text-align: center;
    font-size: 25px;
    line-height: 93px;
    color: #f56c6c;
    font-weight: 700;
  }
  .headerCenter {
    border: 2px solid #ff420c;
    width: 482px;
    height: 34px;
    .headerSearch {
      input {
        width: 390px;
        height: 30px;
        border: none;
        background-color: transparent;
        outline: none;
        padding-left: 10px;
        vertical-align: top;
      }
      button {
        width: 88px;
        height: 30px;
        background-color: #ff420c;
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
    .headerHot {
      font-size: 14px;
      margin-top: 15px;
      span:first-child {
        color: tomato;
      }
    }
  }
  .headerRight {
    overflow: hidden;
    width: 38px;
    height: 32px;
    background-color: #fff;
    line-height: 32px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.5s;
    img {
      width: 26px;
      margin-left: 5px;
      margin-top: 2px;
      vertical-align: top;
    }
    span {
      font-size: 13px;
      color: #333;
      margin-left: 8px;
    }
  }
}
</style>