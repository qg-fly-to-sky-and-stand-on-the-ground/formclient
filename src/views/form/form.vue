<style lang="scss" scoped>
.userPage {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
.button {
  display: block;
  margin: 2em auto;
}
.con {
  display: inline-block;
  margin: 0 auto;
}
</style>

<template>
  <div class="userPage">
    <Button class="button" @click="commit">提交</Button>
    <div class="con" v-html="form"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class userPage extends Vue {
  form: string = "";
  constraint: any = [];
  con: any = {};
  domList: any = [];
  input = "INPUT";
  mutli = "MULTI_COLUMN";
  single = "SINGLE_COLUMN";
  url:string = 'http://10.21.56.100:9999/GATEWAY/intelligent-form';

  mounted() {
    this.getConstraint();
    // getConstraint()->getHtml()->init()->getDate()->upDate()
    // 获取约束->获取表格HTML->初始化表格->获取表格数据->还原表格数据
  }

  // 初始化表格
  init() {
    this.con = document.getElementsByClassName("con")[0];
    this.domList = document.getElementsByClassName("editable");
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let nameEn = this.domList[i].getAttribute("key");
      let yueshu = this.findYueshu(nameEn);
      if(!nameEn) {
        continue;
      }
      if (yueshu) {
        if (yueshu.type) {
          // 初始化选择框
          this.domList[i].setAttribute("type", yueshu.type);
          if(yueshu.group) {
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
          this.domList[i].innerText = data[nameEn].shift();
        } else {
          this.domList[i].innerText = data[nameEn];
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
    console.log(this.domList);
    for (let i = 0; i < len; i++) {
      let type = this.domList[i].getAttribute("type");
      let nameEn = this.domList[i].getAttribute("key");
      let value: any = "";
      if(!nameEn) {
        continue;
      }
      console.log(this.domList[i]);
      if (type == this.input) {
        value = this.domList[i].innerText;
      } else if (type == this.mutli) {
        value = this.domList[i].innerText[0] == "☑";
      } else if (type == this.single) {
        value = this.domList[i].innerText[0] == "☑";
      }
      this.addSendValue(send, nameEn, value);
    }
    console.log('提交表格数据：', send);
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

  // 获取表格输入框数据
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
        // peopleInfo: {
        //   id: "441501199901015056"
        // },
        form: {
          id: "ae8a7da6-d7ed-4aac-bc45-1e6dd528fa95"
        }
      })
      .then(response => {
        if (response.data.code == 0) {
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
        // peopleInfo: {
        //   id: "441501199901015056"
        // },
        form: {
          id: "ae8a7da6-d7ed-4aac-bc45-1e6dd528fa95"
        }
      })
      .then(response => {
        this.form = response.data;
        setTimeout(()=>{
          this.init();
        }, 100)
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 获取表格数据
  getDate() {
    axios
      .post(this.url + "/form/getdata", {
        peopleInfo: {
          id: "441501199901015056"
        }
      })
      .then(response => {
        if (response.data.code == 0) {
          this.upDate(response.data.data.dataMap);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

