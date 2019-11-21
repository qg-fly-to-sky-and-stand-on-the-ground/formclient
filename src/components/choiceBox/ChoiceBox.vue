<style lang="scss" scoped>
@import "scss/mixin";
.box-container {
  @include flex-center;

  position: relative;
  cursor: pointer;
  width:151px;
  height:151px;
  border-radius:18px;
  overflow: hidden;
  background-size: 100%;
  background-position: center center;
}
</style>

<template>
  <div
    class="box-container"
    @click="clickBox"
    :style="'background-image: url(' + imgUrl + ')'"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component
export default class ChoiceBox extends Vue {
  @Prop(String) color!: string;

  imgUrl: string = '';

  theme: any[] = [
    {
      name: 'purple',
      img: require('@assets/icons/purple_box.png')
    },
    {
      name: 'blue',
      img: require('@assets/icons/blue_box.png')
    },
    {
      name: 'brown',
      img: require('@assets/icons/brown_box.png')
    },
    {
      name: 'green',
      img: require('@assets/icons/green_box.png')
    },
  ];

  clickBox(event: any) {
    this.$emit('click', event);
  }

  beforeMount() {
    switch (this.color) {
      case 'purple': {
        this.imgUrl = this.theme[0].img;
        break;
      }

      case 'green': {
        this.imgUrl = this.theme[3].img;
        break;
      }

      case 'blue': {
        this.imgUrl = this.theme[1].img;
        break;
      }

      default: {
        this.imgUrl = this.theme[2].img;
      }
    }
  }
}
</script>
