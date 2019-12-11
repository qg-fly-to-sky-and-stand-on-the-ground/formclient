<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;

  .title-container {
    text-align: center;
    width: 100%;
    font-size:50px;
    font-weight:bold;
    margin-top: 32px;
    font-weight: bold;
    color:rgba(255,255,255,1);
  }

  .choice-box-container {
    position: relative;
    width: 330px;
    height: 330px;
    margin: 50px auto;

    .choice-box-word {
      display: block;
      width:105px;
      height:30px;
      line-height: 30px;
      font-size:21px;
      font-weight:400;
      color:rgba(255,255,255,1);
    }

    >.choice-box:nth-child(even) {
      margin-left: 27px;
    }
  }
}
</style>

<template>
  <div class="login-container">
    <div class="title-container">智能表单系统终端平台</div>
    <div class="choice-box-container">
      <choice-box
        class="choice-box"
        v-for="(item, index) in choiceBoxList"
        :key="item.name"
        :color="item.color"
        style="float: left;"
        :style="index >= 2? 'margin-top: 0.27rem;' : ''"
        @click="choiceMethod(index)"
      ><span class="choice-box-word">{{ item.name }}</span></choice-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import ChoiceBox from "@/components/choiceBox/ChoiceBox.vue";
import {checkMachineRequest} from "@/api/CheckMachineRequest";
import {operationFailMsg} from "@/utils/shared/message";
@Component({
  components: {ChoiceBox}
})
export default class Entry extends Vue {
  choiceBoxList: { color: string; name: string; }[] = [
    {
      color: 'purple',
      name: '身份证登陆'
    },
    {
      color: 'blue',
      name: '指纹登陆'
    },
    {
      color: 'green',
      name: '扫脸登录'
    },
    {
      color: 'brown',
      name: '注册'
    }
  ];

  isLoading: boolean = false;

  choiceMethod(index: number) {
    if (this.isLoading) {
      return ;
    }
    this.isLoading = true;
    if (index == 3) {
      // 检查机器
      checkMachineRequest.checkIdCard({
        idCardMachine: 1
      }).then(res => {
        this.isLoading = false;
        if (res.status == 13) {
          // 操作成功，进入注册页面
          this.$router.push('/regist');
        } else if (res.status == -2) {
          setTimeout(() => {
            this.choiceMethod(3);
          }, 2000)
        } else {
          operationFailMsg('存在机器故障，请前往其他机器上办理业务');
        }
      });
    }
  }
}
</script>
