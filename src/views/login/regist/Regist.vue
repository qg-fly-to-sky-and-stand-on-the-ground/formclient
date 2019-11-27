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
      <card-certification v-if="stepIndex === 0"></card-certification>
      <fingerprint-certification
        :img-url="fingerImage"
        v-if="stepIndex === 1"></fingerprint-certification>
<!--      <face-certification v-if="stepIndex === 2"></face-certification>-->
      <signature v-if="stepIndex === 2"
        :img-url="signImage"
      ></signature>
      <operation-success v-if="stepIndex === 3"></operation-success>
    </div>
    <div class="message-container">
      <div class="message" v-if="isMessage">{{ text }}</div>
      <div class="button-container" v-else>
        <custom-button
          theme="brown"
          :name="resetName"
          @click="resetOperate"
        ></custom-button>
        <custom-button
          theme="blue"
          style="margin-left: 0.78rem"
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
@Component({
  components: {
    OperationSuccess,
    CustomButton,
    Signature, CardCertification, FingerprintCertification, FaceCertification, BackButton, StepLine}
})
export default class Regist extends Vue {
  stepIndex: number = 0;

  stepList: string[] = ['身份认证', '指纹认证', '签名确认'];

  text: string = '请放好您的身份证';

  fingerImage: string = '';

  signImage: string = '';

  textList: string[] = [
    '请放好您的身份证',
    '请保持手指干净',
    '请在规定的区域签写真实姓名'
  ];

  isMessage: boolean = true;

  idCardCode: string = '';

  imgUrl: string = '';

  resetName: string = '重新扫描';

  resetNameList: string[] = [
    '重新扫描',
    '重新扫描',
    '重新签名'
  ];

  scanFinger() {
    fingerRequest.scanFinger({
      fingerMachine: 1,
      idCard: this.idCardCode
    }).then(res => {
      if (res.status == 6) {
        this.isMessage = false;
        let imagesBase64 = res.data;
        this.fingerImage = imagesBase64 ? imagesBase64 : '';
      } else {
        operationFailMsg('指纹录入失败,请重新')
        // this.scanFinger();
      }
    });
  }

  signature() {
    signatureRequest.signature({
      signatureMachine: 1,
      idCard: this.idCardCode
    }).then(res => {
      if (res.status == 10) {
        // 签名完成后
        this.signImage = res.data ? res.data : '';
        this.isMessage = false;
      } else {
        operationFailMsg('签名录入失败，请重新签字');
        // this.signature();
      }
    })
  }

  confirm() {
    if (this.isMessage) {
      return false;
    }

    this.stepIndex++;
    this.runStep();
  }

  runStep() {
    this.resetName = this.resetNameList[this.stepIndex];
    this.text = this.textList[this.stepIndex];
    this.isMessage = true;
    if (this.stepIndex == 0) {
      this.readIdCard();
    } else if (this.stepIndex == 1) {
      this.scanFinger();
    } else if (this.stepIndex == 2) {
      this.signature();
    } else if (this.stepIndex == 4) {
      this.text = '';
    }
  }

  readIdCard() {
    idCardRequest.readIDCardInfo({
      idCardMachine: 1
    }).then(res => {
      if (res.status == 4) {
        // 读取身份证成功，
        this.isMessage = false;
        this.idCardCode = res.idCard;
      } else {
        operationFailMsg('身份证卡录入失败，请重新录入身份证卡!');
        // this.readIdCard();
      }
    });
  }

  resetOperate() {
    this.runStep();
  }

  backToEntry() {
    this.$router.push('/login/entry');
  }

  beforeMount() {
    // @ts-ignore
    window.vue = this;
    this.stepIndex = 0;
    this.readIdCard()
  }
}
</script>
