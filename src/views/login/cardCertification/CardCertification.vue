<style lang="scss" scoped>
.card-container {
  position: relative;
  width:364px;
  height:230px;
  background:rgba(255,255,255,1);
  border-radius:24px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="card-container">
    <img src="@assets/icons/card.png" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class CardCertification extends Vue {

}
</script>
