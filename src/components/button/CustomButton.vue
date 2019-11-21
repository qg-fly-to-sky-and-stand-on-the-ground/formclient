<style lang="scss" scoped>
@import "scss/mixin";

.custom-button {
  @include flex-center;

  overflow: hidden;
  display: block;
  width:198px;
  height:52px;
  border-radius:12px;
  font-size:25px;
  font-weight:400;
  color:rgba(255,255,255,1);
  background-position: center center;
  background-size: 100%;
}
</style>

<template>
  <button
    class="custom-button"
    @click="clickBox"
    @mousedown="changeStatus(true)"
    @mouseup="changeStatus(false)"
    :style="'background-image: url(' + themeUrl + ')'"
  >{{ name }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component
export default class CustomButton extends Vue {
  @Prop(String) theme!: string;
  @Prop(String) name!: string;

  themeUrl: string = '';

  displayTheme: any = null;

  themeList: any = {
    brown: {
      normal: require('@assets/icons/brown_button.png'),
      active: require('@assets/icons/brown_button_click.png')
    },
    blue: {
      normal: require('@assets/icons/blue_button.png'),
      active: require('@assets/icons/blue_button_click.png')
    }
  };

  changeStatus(status: boolean) {
    this.themeUrl = status ? this.displayTheme.active : this.displayTheme.normal;
  }

  beforeMount() {
    switch (this.theme) {
      case 'blue': {
        this.displayTheme = this.themeList.blue;
        break;
      }

      default: {
        this.displayTheme = this.themeList.brown;
      }
    }

    this.themeUrl = this.displayTheme.normal;
  }

  clickBox(event: any) {
    this.$emit('click', event);
  }
}
</script>
