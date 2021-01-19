<template>
  <div class="bookIntroduction">
    <div class="bookIntroductionImg">
      <img src="~assets/玄幻-1.jpg" alt="" />
    </div>
    <div class="bookIntroductionContent">
      <h1><em>圣墟</em><span>辰东 著</span></h1>
      <p>
        在破败中崛起，在寂灭中复苏。<br />沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……
      </p>
      <button>进入详情页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookIntroduction",
};
</script>

<style lang="less">
.bookIntroduction {
  opacity: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  height: 58vh;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 20px;
  .bookIntroductionImg {
    width: 185px;
    height: 246px;
    overflow: hidden;
    align-self: center;
    margin-left: 10%;
    img {
      transition: all 0.5s;
      width: 100%;
      filter: blur(0.7px);
      &:hover {
        transform: scale(1.2);
        filter: blur(0);
      }
    }
  }
  .bookIntroductionContent {
    margin-left: 40px;
    flex-grow: 1;
    color: #fff;
    padding-top: 30px;
    overflow: hidden;
    h1 {
      em {
        font-style: normal;
      }
      span {
        font-size: 18px;
        margin-left: 20px;
      }
      margin-bottom: 30px;
    }
    p {
      line-height: 30px;
    }
    button {
      width: 102px;
      height: 34px;
      margin-right: 15px;
      text-align: center;
      vertical-align: middle;
      border-width: 1px;
      border-style: solid;
      color: #fff;
      border-color: #409eff;
      background: #409eff;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      margin-top: 50px;
      &:hover {
        background: #409eff80;
      }
    }
  }
}
</style>