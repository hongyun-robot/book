<template>
  <div id="content">
    <a href="javascript:;">
      玄幻/科幻
      <book-item></book-item>
      <div class="bgImg1"></div>
    </a>
    <a href="javascript:;">
      经典著作/社会科学
      <book-item></book-item>
      <div class="bgImg2"></div>
    </a>
    <a href="javascript:;">
      玄幻/科幻
      <book-item></book-item>
      <div class="bgImg3"></div>
    </a>
  </div>
</template> 
<script>
import BookItem from "./BookItem";
export default {
  name: "Conten",
  components: { BookItem },
  data() {
    return {
      t: 0,
      p: 0,
    };
  },
  mounted() {
    this.imgScrollTop(1);
    this.imgScrollTop(2);
    this.imgScrollTop(3);
    $(window).scroll(function () {
      let i = 40;
      if ($(this).scrollTop() <= 100) {
        $("#content a").each((index, el) => {
          $(`#content a:nth-child(${index + 1}) div`).css(
            "backgroundPositionY",
            `${index * i}px`
          );
        });
      }
    });
  },
  methods: {
    imgScrollTop(current) {
      let $img = $(`#content a:nth-child(${current}) div`);
      let backgroundPositionY = $img.css("backgroundPositionY");
      $(window).scroll(function () {
        backgroundPositionY =
          $img
            .css("backgroundPositionY")
            .match(/-?\d+\.?\d?/g)
            .join() * 1;
        this.p = $(this).scrollTop();
        setTimeout(() => (this.t = this.p));
        if (this.t < this.p) {
          $img.css({
            backgroundPosition: (index, value) =>
              `50% ${parseFloat(backgroundPositionY - 0.8)}px`,
          });
        } else {
          $img.css({
            backgroundPosition: (index, value) =>
              `50% ${parseFloat(backgroundPositionY + 0.8)}px`,
          });
        }
      });
    },
  },
};
</script>
<style lang="less">
#content {
  a {
    position: relative;
    display: block;
    height: 85vh;
    cursor: default;
    .bgImg1 {
      background-image: url("~assets/bg1.jpg");
      background-position: center 0px;
    }
    .bgImg2 {
      background-image: url("~assets/bg2.jpg");
      background-position: center 40px;
    }
    .bgImg3 {
      background-image: url("~assets/bg3.jpg");
      background-position: center 80px;
    }
    & > div:nth-child(2) {
      position: absolute;
      left: -35vh;
      top: 25vh;
      width: 100vw;
      height: 60vh;
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      cursor: default;
    }
  }
}
</style>