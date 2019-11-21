<style lang="scss" scoped>
@import "scss/mixin";
.card-container {
  @include flex-center;
  position: relative;
  width:180px;
  height:180px;
  border:4px solid rgba(45,227,240,1);
  border-radius:50%;
  margin: 0 auto;

  img {
    display: block;
    width:118px;
    height:86px;
    border-radius:1px;
  }
}
</style>

<template>
  <div class="card-container">
    <img src="@assets/icons/success.png" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class OperationSuccess extends Vue {

}
</script>
