<style lang="scss" scoped>
.signature-container {
  position: relative;
  width:364px;
  height:230px;
  background:rgba(255,255,255,1);
  border-radius:8px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="signature-container">
    <img v-if="imgUrl.length != 0" :src="imgUrl"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Component
export default class Signature extends Vue {
  @Prop(String) imgUrl!: string;
}
</script>
