<style lang="scss" scoped>
.userPage {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  .chooseFrom {
    position: absolute;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(1, 1, 1, 0.3);
    .con {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -14em;
      margin-left: -18em;
      padding: 1em;
      width: 36em;
      height: 28em;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 0 5px 0 #999;
      .title {
        height: 1.5em;
        color: #666;
        line-height: 1.5em;
        text-align: left;
        font-size: 2em;
        font-weight: bold;
      }
      .listCon {
        margin: 1em auto;
        padding: 1em 0;
        height: 18em;
        text-align: left;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 #aaa;
        overflow-y: scroll;
        .list {
          padding: 0.3em 4em 0.3em 1em;
          color: #999;
          .name {
            color: #777;
            font-size: 14px;
          }
          .des {
          }
        }
        .chooseList {
          color: #666;
          background-color: #e3f7e6;
          background-image: url(../../assets/icons/formChoices.png);
          background-repeat: no-repeat;
          background-size: auto 2.5em;
          background-position: 95% center;
        }
      }
      .buttonCon {
        padding: 0 2em;
        height: 3em;
        line-height: 3em;
        text-align: right;
        .buttom {
          width: 5em;
          font-size: 12px;
        }
      }
    }
  }
  .form {
    .button {
      display: block;
      margin: 2em auto;
    }
    .fromCon {
      display: inline-block;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div class="userPage">
    <div class="chooseFrom" v-if="choose">
      <div class="con">
        <div class="title">选择表单</div>
        <div class="listCon">
          <div
            class="list"
            v-for="(item, index) in formChoices"
            :key="index"
            :class="{chooseList:index==chooseIndex}"
            @click="chooseIndex=index"
          >
            <div class="name">{{item.name}}</div>
            <div class="des">介绍：{{item.des}}</div>
            <div class="needInformation">所需材料：{{item.needInformation}}</div>
          </div>
        </div>
        <div class="buttonCon">
          <Button type="success" class="buttom" ghost @click="selectForm">确定</Button>
        </div>
      </div>
    </div>
    <div class="from" v-else>
      <Button class="button" @click="choose=true">重选表单</Button>
      <Button class="button" @click="commit">提交</Button>
      <div class="fromCon" v-html="formHtml"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class userPage extends Vue {
  choose: boolean = true;
  formChoices: any[] = [];
  chooseIndex: number = 0;
  peopleInfo: Object = {
    id: "441501199901015056"
  };
  form: Object = {
    id: "ae8a7da6-d7ed-4aac-bc45-1e6dd528fa95"
  };
  formHtml: string = "";
  constraint: any = [];
  con: any = {};
  domList: any = [];
  input = "INPUT";
  mutli = "MULTI_COLUMN";
  single = "SINGLE_COLUMN";
  url: string = "https://qgailab.com:12410/intelligent-form";

  mounted() {
    this.getChoice();
    // this.getChoice()->selectForm()->getConstraint()->getHtml()->init()->getDate()->upDate()
    // 获取表单选项->选择表单->获取约束->获取表格HTML->初始化表格->获取表格数据->还原表格数据
  }

  getChoice() {
    axios
      .get(this.url + "/form/supportform")
      .then(response => {
        if (response.data.code == 0) {
          console.log("表单选项：", response.data.data.formList);
          this.formChoices = response.data.data.formList;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectForm() {
    let id = this.formChoices[this.chooseIndex].id;
    if (this.formChoices.length == 0) {
      this.$Notice.error({
        title: "选择有误",
        desc: `暂无表单可选`,
        duration: 3
      });
      return;
    }
    if (
      this.chooseIndex < 0 ||
      this.chooseIndex > this.formChoices.length - 1
    ) {
      this.$Notice.warning({
        title: "选择有误",
        desc: `请选择选`,
        duration: 3
      });
      return;
    }

    this.form = {
      id: id
    };
    this.choose = false;
    this.getConstraint();
  }

  // 初始化表格
  init() {
    this.con = document.getElementsByClassName("fromCon")[0];
    this.domList = document.getElementsByClassName("editable");
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let nameEn = this.domList[i].getAttribute("key");
      let yueshu = this.findYueshu(nameEn);
      if (!nameEn) {
        continue;
      }
      if (yueshu) {
        if (yueshu.type) {
          // 初始化选择框
          this.domList[i].setAttribute("type", yueshu.type);
          if (yueshu.group) {
            this.domList[i].setAttribute("group", yueshu.group);
          }
        } else {
          // 初始化输入框
          this.domList[i].setAttribute("type", this.input);
          this.domList[i].setAttribute("group", yueshu.group);
          if (this.domList[i].getAttribute("writable") == "true") {
            this.domList[i].setAttribute("contenteditable", "true");
          } else {
            this.domList[i].setAttribute("contenteditable", "false");
          }
        }
      }
    }
    this.con.onclick = this.conClick;
    this.getDate();
  }

  // key匹配获取约束
  findYueshu(nameEn: string) {
    let len = this.constraint.length;
    for (let i = 0; i < len; i++) {
      if (this.constraint[i].nameEn == nameEn) {
        return this.constraint[i];
      }
    }
    return null;
  }

  // 还原表格数据
  upDate(data: any) {
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let nameEn = this.domList[i].getAttribute("key");
      let type = this.domList[i].getAttribute("type");
      if (type == this.input) {
        if (typeof data[nameEn] == "object") {
          if (data[nameEn].length == 0) {
            continue;
          }
          this.domList[i].innerText = data[nameEn].shift();
        } else {
          if (!data[nameEn]) {
            continue;
          }
          this.domList[i].innerText = data[nameEn];
          data[nameEn] = null;
        }
      } else if (type == this.single || type == this.mutli) {
        let str = this.domList[i].innerText;
        if (data[nameEn]) {
          this.domList[i].innerText = str.replace("□", "☑");
        } else {
          this.domList[i].innerText = str.replace("☑", "□");
        }
      }
    }
  }

  // 提交表格数据
  commit() {
    if (!this.judgeCommit()) {
      return;
    }
    let send = {
      id: "441501199901015056"
    };
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let type = this.domList[i].getAttribute("type");
      let nameEn = this.domList[i].getAttribute("key");
      let value: any = "";
      if (!nameEn) {
        continue;
      }
      if (type == this.input) {
        value = this.domList[i].innerText;
      } else if (type == this.mutli) {
        value = this.domList[i].innerText[0] == "☑";
      } else if (type == this.single) {
        value = this.domList[i].innerText[0] == "☑";
      }
      this.addSendValue(send, nameEn, value);
    }
    this.addCalculate(send);
    console.log("提交表格数据：", send);
    axios
      .post(this.url + "/form/storedata", send)
      .then(response => {
        if (response.data.code == 0) {
          this.$Notice.success({
            title: "输入有误",
            desc: "恭喜你，提交成功",
            duration: 3
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 添加要计算的数据
  addCalculate(send: any) {
    let len = this.constraint.length;
    for (let i = 0; i < len; i++) {
      let defaultValue = this.constraint[i].defaultValue;
      if (defaultValue) {
        let nameEn = this.constraint[i].nameEn;
        let value = this.calculation(defaultValue, send);
        this.addSendValue(send, nameEn, value);
      }
    }
  }

  // 处理计算表达式
  calculation(str: string, send: any) {
    let arr1 = str.split("${");
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == "") {
        continue;
      }
      let arr = arr1[i].split("}");
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == "") {
          continue;
        }
        arr2.push(arr[j]);
      }
    }
    return this.calculate(arr2, send);
  }

  // 计算
  calculate(arr: string[], send: any) {
    let result = Number(send[arr[0]]);
    for (let i = 1; i < arr.length; i = i + 2) {
      if (arr[i] == "+") {
        result += Number(send[arr[i + 1]]);
      } else if (arr[i] == "-") {
        result -= Number(send[arr[i + 1]]);
      } else if (arr[i] == "*") {
        result *= Number(send[arr[i + 1]]);
      } else if (arr[i] == "/") {
        result /= Number(send[arr[i + 1]]);
      }
    }
  }

  // 添加要提交的数据
  addSendValue(send: any, nameEn: string, value: any) {
    if (!send[nameEn]) {
      send[nameEn] = value;
    } else if (typeof send[nameEn] != "object") {
      let arr = [send[nameEn], value];
      send[nameEn] = arr;
    } else {
      send[nameEn].push(value);
    }
  }

  // 判断表格输入
  judgeCommit(): Boolean {
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let type = this.domList[i].getAttribute("type");
      if (type == this.input) {
        let nameEn = this.domList[i].getAttribute("key");
        let value = this.domList[i].innerText;
        let yueshu = this.findYueshu(nameEn);
        let nameCh = yueshu.nameCh;
        if (!this.judgeLength(nameCh, value, yueshu.length)) {
          return false;
        }
        if (!this.judgeRegular(nameCh, value, yueshu.regularExpression)) {
          return false;
        }
      }
    }
    return true;
  }

  // 长度判断
  judgeLength(nameCh: string, value: any, length: string): Boolean {
    if (length) {
      let min = length.split("-")[0];
      let max = length.split("-")[1];
      if (value.length < min) {
        this.$Notice.error({
          title: "输入有误",
          desc: `${nameCh} 输入长度不得小于${min}`,
          duration: 3
        });
        return false;
      } else if (value.length > max) {
        this.$Notice.error({
          title: "输入有误",
          desc: `${nameCh} 输入长度不得大于${max}`,
          duration: 3
        });
        return false;
      }
      return true;
    }
    return true;
  }

  // 正则判断
  judgeRegular(nameCh: string, value: any, regularExpression: any): Boolean {
    if (regularExpression) {
      let test = new RegExp(regularExpression);
      if (!test.test(value)) {
        this.$Notice.error({
          title: "输入有误",
          desc: `${nameCh} 输入不规范`,
          duration: 3
        });
        return false;
      }
      return true;
    }
    return true;
  }

  // 父容器监听单选、多选点击事件
  conClick(event: any): void {
    let target = event.target;
    if (!target.getAttribute("key")) {
      this.$Notice.warning({
        title: "提示",
        desc: "该字段未开放输入/勾选",
        duration: 1
      });
      return;
    }
    if (target.getAttribute("writable") == "false") {
      this.$Notice.warning({
        title: "提示",
        desc: "该字段已被禁止输入/勾选",
        duration: 2
      });
      return;
    }
    if (target.getAttribute("type") == this.single) {
      this.clickSingle(target);
    } else if (target.getAttribute("type") == this.mutli) {
      this.clickMutli(target);
    }
  }

  // 点击单选框
  clickSingle(dom: any) {
    let str = dom.innerText;
    this.initSingle(dom.getAttribute("group"));
    if (str[0] == "□") {
      dom.innerText = str.replace("□", "☑");
    } else {
      dom.innerText = str.replace("☑", "□");
    }
  }

  // 点击多选框
  clickMutli(dom: any) {
    let str = dom.innerText;
    if (str[0] == "□") {
      dom.innerText = str.replace("□", "☑");
    } else {
      dom.innerText = str.replace("☑", "□");
    }
  }

  // 还原单选框（配合点击使用）
  initSingle(group: any) {
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let str = this.domList[i].innerText;
      if (this.domList[i].getAttribute("group") == group) {
        this.domList[i].innerText = str.replace("☑", "□");
      }
    }
  }

  // 获取约束
  getConstraint() {
    axios
      .post(this.url + "/form/getconstraint", {
        //peopleInfo: this.peopleInfo,
        form: this.form
      })
      .then(response => {
        if (response.data.code == 0) {
          console.log("约束：", response.data.data.constraintList);
          this.constraint = response.data.data.constraintList;
          this.getHtml();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 获取html文件
  getHtml() {
    axios
      .post(this.url + "/form/gethtml2", {
        //peopleInfo: this.peopleInfo,
        form: this.form
      })
      .then(response => {
        this.formHtml = response.data;
        setTimeout(() => {
          this.init();
        }, 100);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 获取表格数据
  getDate() {
    axios
      .post(this.url + "/form/getdata", {
        peopleInfo: this.peopleInfo
      })
      .then(response => {
        if (response.data.code == 0) {
          console.log("表单数据：", response.data.data.dataMa);
          this.upDate(response.data.data.dataMap);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

