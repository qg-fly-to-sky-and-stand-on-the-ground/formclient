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
    position: absolute;
    width: 163px;
    height: 228px;
    overflow: hidden;
    top: 0;
    left: 0;
    padding-top: 30px;

    img {
      width: 112px;
    }
  }

  .next-face-image-container {
    background-color: #2A2C3D;
    position: absolute;
    top: 0;
    left: 0;
    width: 163px;
    height: 0;
    z-index: 11;
    padding-top: 30px;

    overflow: hidden;

    img {
      width: 112px;
    }
  }

  .next-face-end {
    height: 228px;
  }

  .scan-container {
    position: absolute;
    z-index: 111;
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
    <div class="next-face-image-container"
      :class="nextFaceClazz"
    >
      <img :src="newImg" />
    </div>
    <div class="face-image-container">
      <img :src="oldImg" />
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
import {Prop, Watch} from "vue-property-decorator";

@Component
export default class FaceCertification extends Vue {
  @Prop(String) imgUrl!: string;

  oldImg: string = require('@assets/icons/face.png');

  newImg: string = require('@assets/icons/face.png');

  localImage: string = require('@assets/icons/face.png');

  scanClazz: string = '';

  nextFaceClazz: string = '';

  @Watch('status')
  handler() {
    this.newImg = this.localImage;
  }

  animation() {
    setTimeout(() => {
      this.oldImg = this.newImg;
      this.scanClazz = '';
      this.nextFaceClazz = '';
      setTimeout(() => {
        if (this.imgUrl.length != 0) {
          this.newImg = this.imgUrl;
        }
        this.scanClazz = 'scan-animate scan-end';
        this.nextFaceClazz = 'scan-animate next-face-end';
        this.animation();
      }, 50);
    }, 4000);
  }

  @Watch('newImg')
  newImageHandler() {

  }

  mounted() {
    if (this.imgUrl.length != 0) {
      this.newImg = this.imgUrl;
      this.oldImg = this.imgUrl;
    }
    setTimeout(() => {
      this.scanClazz = 'scan-animate scan-end';
      this.nextFaceClazz = 'scan-animate next-face-end';
      this.animation();
    }, 50);
  }
}
</script>
