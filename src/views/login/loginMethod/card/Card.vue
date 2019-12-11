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
      <operation-success v-if="stepIndex === 1"></operation-success>
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
import CustomButton from "@/components/button/CustomButton.vue";
import CardCertification from "@/views/login/cardCertification/CardCertification.vue";
import BackButton from "@/components/button/BackButton.vue";
import StepLine from "@/components/stepLine/StepLine.vue";
import {checkMachineRequest} from "@/api/CheckMachineRequest";
import {operationFailMsg} from "@/utils/shared/message";
import {idCardRequest} from "@/api/IDCardRequest";
import OperationSuccess from "@/views/operationSuccess/OperationSuccess.vue";
@Component({
  components: {OperationSuccess, StepLine, BackButton, CardCertification, CustomButton}
})
export default class Card extends Vue {
  stepIndex: number = 0;

  stepList: string[] = ['身份认证'];

  text: string = '请放好您的身份证';

  fingerImage: string = '';

  signImage: string = '';

  faceImage: string = '';

  textList: string[] = [
    '请放好您的身份证',
    '请保持手指干净',
    '请直视摄像头',
    '请在规定的区域签写真实姓名'
  ];

  isMessage: boolean = true;

  idCardCode: string = '';

  imgUrl: string = '';

  resetName: string = '重新扫描';

  isShowConfirm: boolean = true;

  isShowReset: boolean = true;

  resetNameList: string[] = [
    '重新扫描',
    '重新扫描',
    '重新扫描',
    '重新签名'
  ];

  backToEntry() {
    this.$router.push('/login/entry');
  }

  resetOperate() {

  }

  readIDCard() {
    idCardRequest.readIDCardToLogin({
      IdCardMachine: "1"
    }).then(res => {
      if (res.status == 11) {
        // 登陆成功
        this.stepIndex++;
        this.text = '登陆成功，正在跳转页面';
        setTimeout(() => {
          this.$router.push('');
        }, 500);
      } else if (res.status == 4) {
        // 登陆失败
        operationFailMsg('登陆失败，请检查您放入的卡是否正确')
      } else if (res.status == 1) {
        // 未注册
        operationFailMsg('您未注册，请前往注册页面进行注册');
      } else {
        // 请求失败时候
      }
    });
  }

  checkMachine() {
    checkMachineRequest.checkIdCard({
      idCardMachine: 1
    }).then(res => {
      if (res.status == 13) {
        this.readIDCard();
      } else {
        operationFailMsg('机器故障，请转移至其他机器进行业务')
      }
    });
  }

  mounted() {
    this.checkMachine();
    window.vue = this;
  }
}
</script>
