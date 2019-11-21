<style lang="scss" scoped>
@import "scss/mixin";

.step-item-container {
  @include flex-center;

  position: relative;
  width:44px;
  height:44px;
  border-radius:50%;
  background:rgba(255,255,255,1);
  opacity:0.6;

  img {
    width:19px;
    height:14px;
  }
}

.finish {
  background-color: #2A2C3D;
  border:2px solid rgba(0,238,255,1);
}

.processing {
  background-color: #2DE3F0;
}
</style>

<template>
  <div
    class="step-item-container"
    :class="containerClass"
  >
    <img
      v-if="statusName === 'finish'"
      :src="successImage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Prop, Watch} from "vue-property-decorator";

@Component
export default class StepItem extends Vue {
  @Prop(String) statusName!: string;

  imageUrl: string = '';

  containerClass: string = '';

  successImage: string = require('@assets/icons/success.png');

  changeContainerClass(statusName: string) {
    switch (statusName) {
      case 'processing': {
        this.containerClass = 'processing';
        break;
      }

      case 'finish': {
        this.containerClass = 'finish';
        break;
      }

      default: {
        this.containerClass = '';
      }
    }
  }

  @Watch("statusName")
  statusNameChangeHandler(newVal: string) {
    this.changeContainerClass(newVal);
  }

  beforeMount() {
    this.changeContainerClass(this.statusName);
  }
}
</script>
