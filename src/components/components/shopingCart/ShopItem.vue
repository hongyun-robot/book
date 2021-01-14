<template>
  <div class="shopItem" ref="shopItem">
    <div class="shopCheckbox">
      <input type="checkbox" ref="shopItemCheck" @change="shopItemChange" />
    </div>
    <div class="shopGoods">
      <img src="../../../assets/玄幻-1.jpg" alt="" />
      <a href="javascript:;">
        <span>圣墟</span>
        <p>作者：辰东</p>
      </a>
    </div>
    <div class="shopPrice" ref="shopPrice">￥{{ price }}</div>
    <div class="quantity-form">
      <a href="javascript:;" @click="shopDec" class="decrement">-</a>
      <input type="text" class="itxt" :value="num" />
      <a href="javascript:;" @click="shopInc" class="increment">+</a>
    </div>
    <div class="shopSum">￥{{ sum }}</div>
    <div class="shopAction" ref="shopDelete" @click="shopDelete">删除</div>
  </div>
</template> 
<script>
export default {
  name: "ShopItem",
  data() {
    return {
      num: 1,
      sum: 99.9,
      price: 99.9,
    };
  },
  methods: {
    // 商品点击减一
    shopDec() {
      if (this.num > 1) {
        this.num--;
        this.$store.commit("decrement", this.price);
        this.shopSum();
      }
    },
    // 商品点击加一
    shopInc() {
      this.num++;
      this.$store.commit("increment", this.price);
      this.shopSum();
    },
    // 商品总和
    shopSum() {
      this.$nextTick(() => {
        // let price = this.$refs.shopPrice.innerHTML.substr(1);
        let price = (this.num * this.price).toFixed(2);
        this.$emit("itemShopPrice", price);
        this.sum = price;
      });
    },
    //
    shopItemChange() {
      console.log(this);
    },
    // 点击删除商品
    shopDelete() {
      $(this.$el).slideUp(function () {
        $(this).remove();
      });
      this.$store.commit("decrement", this.num * this.price);
    },
  },
};
</script>
<style lang="less">
.shopItem {
  width: 100%;
  height: 140px;
  border: 1px solid #ccc;
  background-color: #fcfcfc;
  padding: 10px 0;
  // box-sizing: content-box;
  div {
    float: left;
    line-height: 140px;
  }
  .shopCheckbox {
    line-height: 0;
    width: 122px;
    input {
      margin-top: 50px;
      margin-left: 11px;
      width: 40px;
      height: 40px;
    }
  }
  .shopGoods {
    height: 100%;
    width: 229px;
    display: flex;
    img {
      vertical-align: top;
      width: 97px;
      height: 100%;
      margin-right: 20px;
    }

    a {
      padding: 10px;
      line-height: 0;
      p {
        margin-top: 30px;
        line-height: 0;
      }
    }
  }
  .shopPrice {
    width: 126px;
    text-align: center;
  }
  .quantity-form {
    width: 150px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .decrement {
      margin-left: 34px !important;
    }
    .decrement,
    .increment {
      float: left;
      border: 1px solid #cacbcb;
      height: 32px;
      line-height: 29px;
      padding: 1px 0;
      width: 30px;
      text-align: center;
      color: #666;
      margin: 0;
      background: #fff;
      margin-left: -1px;
      transition: all 0.3s;
      &:hover {
        background-color: #67c23a;
      }
    }

    .itxt {
      float: left;
      border: 1px solid #cacbcb;
      width: 42px;
      height: 32px;
      line-height: 18px;
      text-align: center;
      padding: 1px;
      margin: 0;
      margin-left: -1px;
      font-size: 16px;
      font-family: verdana;
      color: #333;
      -webkit-appearance: none;
      outline: none;
    }
  }
  .shopSum {
    width: 100px;
    text-align: center;
  }
  .shopAction {
    width: 60px;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
    margin-top: 22px;
    margin-left: 28px;
    transition: all 0.4s;
    background-color: #67c23a;
    &:hover {
      background-color: #f56c6c;
      color: #fff;
    }
  }
}
</style>