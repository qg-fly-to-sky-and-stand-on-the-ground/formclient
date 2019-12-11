<style lang="scss" scoped>
@import "scss/mixin";

.regist-container {
  position: relative;
  width: 100%;

  .step-line-container {
    @include flex-center;

    position: relative;
    width: 100%;
    height: 200px;
  }

  .back-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1111;
  }

  .main-container {
    @include clear-float;

    position: relative;
    width: 100%;
  }

  .message-container {
    width: 100%;
    color: #fff;
    font-size:25px;
    font-weight:400;
    margin-top: 35px;
    color:rgba(255,255,255,1);
  }

  .button-container {
    @include flex-center;

    position: relative;
    width: 100%;
    height: 48px;
  }
}
</style>

<template>
  <div class="regist-container">
    <back-button
      class="back-button"
      @click="backToEntry"
    ></back-button>
    <div class="step-line-container">
      <step-line
        :step-index="stepIndex"
        :step-list="stepList"
      ></step-line>
    </div>
    <div class="main-container">
      <card-certification></card-certification>
    </div>
    <div class="message-container">
      <div class="message" v-if="isMessage">{{ text }}</div>
      <div class="button-container" v-else>
        <custom-button
          v-if="isShowReset"
          theme="brown"
          :name="resetName"
          style="margin-left: 0.39rem;margin-right: 0.39rem"
          @click="resetOperate"
        ></custom-button>
        <custom-button
          v-if="isShowConfirm"
          theme="blue"
          style="margin-left: 0.39rem;margin-right: 0.39rem"
          name="确认"
          @click="confirm"
        ></custom-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import StepLine from "@/components/stepLine/StepLine.vue";
import BackButton from "@/components/button/BackButton.vue";
import FaceCertification from "@/views/login/faceCertification/FaceCertification.vue";
import FingerprintCertification from "@/views/login/fingerprintCertification/FingerprintCertification.vue";
import CardCertification from "@/views/login/cardCertification/CardCertification.vue";
import Signature from "@/views/login/signature/Signature.vue";
import CustomButton from "@/components/button/CustomButton.vue";
import {checkMachineRequest} from "@/api/CheckMachineRequest";
import {idCardRequest} from "@/api/IDCardRequest";
import {fingerRequest} from "@/api/FingerRequest";
import {signatureRequest} from "@/api/SignatureRequest";
import OperationSuccess from "@/views/operationSuccess/OperationSuccess.vue";
import {operationFailMsg} from "@/utils/shared/message";
import {faceRequest} from "@/api/FaceRequest";
@Component({
  components: {
    OperationSuccess,
    CustomButton,
    Signature, CardCertification, FingerprintCertification, FaceCertification, BackButton, StepLine}
})
export default class FaceLogin extends Vue {
  stepIndex: number = 0;

  stepList: string[] = ['人脸识别'];

  text: string = '请放好您的身份证';

  fingerImage: string = '';

  signImage: string = '';

  faceImage: string = '';

  textList: string[] = [
    '请放好您的身份证',
  ];

  isMessage: boolean = true;

  idCardCode: string = '';

  imgUrl: string = '';

  resetName: string = '重新扫描';

  isShowConfirm: boolean = true;

  isShowReset: boolean = true;

  resetNameList: string[] = [
    '重新扫描',
  ];

  confirm() {
    if (this.isMessage) {
      return false;
    }

    this.stepIndex++;
    this.runStep();
  }

  runStep() {
    this.isShowConfirm = true;
    this.isShowReset = true;
    this.resetName = this.resetNameList[this.stepIndex];
    this.text = this.textList[this.stepIndex];
    this.isMessage = true;
  }

  resetOperate() {
    this.runStep();
  }

  backToEntry() {
    this.$router.push('/login/entry');
  }

  beforeMount() {
    this.stepIndex = 0;
  }
}
</script>
