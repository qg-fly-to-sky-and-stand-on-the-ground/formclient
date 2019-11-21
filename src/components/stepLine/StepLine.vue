<style lang="scss" scoped>
@import "scss/mixin";

.step-line-container {
  @include vertical-center;

  position: relative;
  width: 100%;

  .step-box {
    position: relative;
    float: left;
    width: 200px;
    height: 80px;

    .step-item {
      margin-left: auto;
      margin-right: auto;
    }

    .step-name {
      display: block;
      width: 100%;
      margin-top: 10px;
      text-align: center;
      height:24px;
      font-size:25px;
      font-weight:400;
      color: #eee;
    }

    .step-name-finish {
      color: #fff;
    }
  }

  .step-line {
    position: absolute;
    width:64px;
    height:2px;
    background: #eee;
    top: 30%;
    transform: translateY(-50%);
  }

  .step-finish {
    background:rgba(45,227,240,1);
  }
}
</style>

<template>
  <div class="step-line-container">
    <div class="step-box"
      v-for="(item, index) in stepList"
      :key="item"
    >
      <div
        class="step-line"
        v-if="index !== 0"
        style="left: 0"
        :class="index <= stepIndex ? 'step-finish' : ''"
      ></div>
      <step-item
        class="step-item"
        :status-name="index < stepIndex ? 'finish' : (stepIndex === index ? 'processing' : '')"
      ></step-item>
      <span class="step-name"
        :class="index <= stepIndex ? 'step-name-finish' : ''"
      >{{ item }}</span>
      <div
        class="step-line"
        style="right: 0;"
        v-if="index !== (stepList.length - 1)"
        :class="index < stepIndex ? 'step-finish' : ''"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import StepItem from "@/components/stepLine/stepItem/StepItem.vue";
@Component({
  components: {StepItem}
})
export default class StepLine extends Vue {
  @Prop() stepList!: string[];

  @Prop(Number) stepIndex!: number;
}
</script>
