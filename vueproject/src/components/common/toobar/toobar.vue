<template>
  <div id="flex_div">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#flex_div {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f6f6f6;
    z-index: 9999;
    box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);
}

</style>
