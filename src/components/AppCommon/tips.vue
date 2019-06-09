<template>
    <div class="_TheTips">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tips"
    }
</script>

<style lang="scss">
._TheTips{
  height:34px;
  background:linear-gradient(90deg,rgba(121,173,245,1) 0%,rgba(26,121,255,1) 100%);
  border-radius:16px;
  text-align: center;
  line-height: 34px;
  padding-left:14px;
  padding-right: 14px;
  font-size:16px;
  position: absolute;
  z-index: 200;
  left: -14px;
  top: -14px;
}
</style>
