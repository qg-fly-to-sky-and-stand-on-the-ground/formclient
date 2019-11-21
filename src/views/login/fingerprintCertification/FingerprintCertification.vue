<style lang="scss" scoped>
@import "scss/mixin";
.face-container {
  @include flex-center;

  position: relative;
  width: 163px;
  height: 228px;
  margin: 0 auto;
  border: 2px solid rgba(45,227,240,1);
  border-radius: 12px;
  overflow: hidden;

  .face-image-container {
    position: relative;
    width:112px;
    height:162px;

    img {
      width: 100%;
    }
  }

  .scan-container {
    position: absolute;
    width: 100%;
    height:36px;
    top: -36px;
    left: 0;
  }

  .scan-animate {
    transition: 4s linear all;
  }

  .scan-end {
    transform: translateY(2.64rem);
  }
}
</style>

<template>
  <div class="face-container">
    <div class="face-image-container">
      <img src="@assets/icons/finger.png" />
    </div>
    <div
      class="scan-container"
      :class="scanClazz"
      :style="'background-image: url(' + require('@assets/icons/scan.png') +')'"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class FingerprintCertification extends Vue {
  scanClazz: string = '';
  animation() {
    setTimeout(() => {
      this.scanClazz = '';
      setTimeout(() => {
        this.scanClazz = 'scan-animate scan-end';
        this.animation();
      }, 50);
    }, 4000);
  }

  mounted() {
    setTimeout(() => {
      this.scanClazz = 'scan-animate scan-end';
      this.animation();
    }, 100);
  }
}
</script>
