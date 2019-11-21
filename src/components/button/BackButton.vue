<style lang="scss" scoped>
@import "scss/mixin";
.back-container {
  @include flex-center;

  cursor: pointer;
  position: relative;
  width:120px;
  height:44px;
  background:rgba(31,143,100,1);
  border-radius:0 0 12px 0;

  span {
    display: block;
    font-size:25px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
}
</style>

<template>
  <div class="back-container" @click="buttonClick">
    <span>返回</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class BackButton extends Vue {
  buttonClick(event: any) {
    console.log('123')
    this.$emit('click', event);
  }
}
</script>
