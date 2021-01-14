<template>
  <div class="bookItem">
    <img src="~assets/玄幻-1.jpg" alt="" />
    <img src="~assets/玄幻-2.jpg" alt="" />
    <img src="~assets/玄幻-3.jpg" alt="" />
    <img src="~assets/玄幻-4.jpg" alt="" />
  </div>
</template> 
<script>
export default {
  name: "BookItem",
};
</script>
<style lang="less">
.bookItem {
  display: flex;
  margin-top: 10px;
  img {
    margin: 0 65px;
    height: 20vh;
    flex: 1;
    cursor: pointer;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>