<template>
  <div class="grail" :style="grailStyle">
    <div class="left" :style="{ width: leftWidth }">
      <slot name="left"></slot>
    </div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right" :style="{ width: rightWidth }">
      <slot name="right"></slot>
    </div>
  </div>
</template> 
<script>
export default {
  name: "GrailLayout",
  data() {
    return {
      grailStyle: {
        height: this.height,
      },
    };
  },
  props: {
    height: {
      type: String,
      default: "46px",
    },
    leftWidth: {
      type: String,
      default: "auto",
    },
    rightWidth: {
      type: String,
      default: "auto",
    },
  },
};
</script>
<style lang="less">
.grail {
  display: flex;
  .center {
    flex: 1;
  }
}
</style>