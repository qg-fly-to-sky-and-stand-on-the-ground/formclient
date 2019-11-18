<style lang="scss" scoped>
.layout-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>

<template>
  <div class="layout-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import LeftSection from "@/views/layout/leftSection/LeftSection.vue";
import RightSection from "@/views/layout/rightSection/RightSection.vue";

@Component
export default class Layout extends Vue {

}
</script>
