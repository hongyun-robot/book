<template>
  <div id="content" @click="showBookIntroduction">
    <a href="javascript:;">
      玄幻/科幻
      <book-item></book-item>
      <div class="bgImg1 bgimg"></div>
      <book-introduction />
    </a>
    <a href="javascript:;">
      经典著作/社会科学
      <book-item></book-item>
      <div class="bgImg2 bgimg"></div>
      <div class="bookIntroduction">2</div>
    </a>
    <a href="javascript:;">
      玄幻/科幻
      <book-item></book-item>
      <div class="bgImg3 bgimg"></div>
      <div class="bookIntroduction">3</div>
    </a>
  </div>
</template> 
<script>
import BookItem from "./BookItem";
import BookIntroduction from "./BookIntroduction";
export default {
  name: "Conten",
  components: { BookItem, BookIntroduction },
  data() {
    return {
      getEl: document.querySelector("a:nth-child(1) .bookIntroduction"),
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
          $(`#content a:nth-child(${index + 1}) .bgimg`).css(
            "backgroundPositionY",
            `${index * i}px`
          );
        });
      }
    });
  },
  methods: {
    imgScrollTop(current) {
      let $img = $(`#content a:nth-child(${current}) .bgimg`);
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
    showBookIntroduction(e) {
      if (e.target.localName == "img") {
        $(e.path[1]).siblings(".bookIntroduction").fadeToggle(500);
      }
    },
  },
};
</script>
<style lang="less">
#content {
  a {
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
      left: 0;
      width: 100vw;
      height: 58vh;
      background-attachment: fixed;
      background-position: center center;
      background-size: cover;
      cursor: default;
    }
  }
}
</style>