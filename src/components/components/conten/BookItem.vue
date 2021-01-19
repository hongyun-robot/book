<template>
  <div class="bookItem">
    <img
      :src="item"
      v-for="(item, index) in img"
      :key="index"
      alt=""
      title="点击查看详细信息"
    />
  </div>
</template>
<script>
export default {
  name: "BookItem",
  data() {
    return {
      img: [
        "/img/玄幻-1.12875323.jpg",
        "/img/玄幻-2.797d0e72.jpg",
        "/img/玄幻-3.fcd2c285.jpg",
        "/img/玄幻-4.64c42e79.jpg",
      ],
    };
  },
};
</script>
<style lang="less">
.bookItem {
  display: flex;
  margin: 10px 0 20px;
  img {
    margin: 0 11vh;
    height: 20vh;
    flex: 1;
    cursor: pointer;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>