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
.b1 {
  white-space-collapsing: preserve;
}

.b2 {
  margin: 1in 1.25in 1in 1.25in;
}

.p1 {
  text-align: center;
  hyphenate: auto;
  font-family: 方正小标宋简体;
  font-size: 18pt;
}

.p2 {
  text-align: justify;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 14pt;
}

.p3 {
  text-align: center;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 12pt;
}

.p4 {
  text-align: justify;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 12pt;
}

.p5 {
  text-indent: 0.16666667in;
  text-align: start;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 12pt;
}

.p6 {
  text-indent: 0.16666667in;
  text-align: justify;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 12pt;
}

.p7 {
  text-indent: 0.16736111in;
  text-align: justify;
  hyphenate: auto;
  font-family: 宋体;
  font-size: 12pt;
}

.p8 {
  text-align: justify;
  hyphenate: auto;
  font-family: 仿宋_GB2312;
  font-size: 16pt;
}

.p9 {
  text-indent: -0.4in;
  margin-left: 0.4in;
  text-align: justify;
  hyphenate: auto;
  font-family: 仿宋_GB2312;
  font-size: 16pt;
}

.p10 {
  text-align: justify;
  hyphenate: auto;
  font-family: Times New Roman;
  font-size: 10pt;
}

.td1 {
  width: 0.575in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.td2 {
  width: 1.375in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.td3 {
  width: 4.75in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.td4 {
  width: 1.25in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.td5 {
  width: 2.25in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.td6 {
  width: 6.125in;
  padding-start: 0in;
  padding-end: 0in;
  border-bottom: thin solid black;
  border-left: thin solid black;
  border-right: thin solid black;
  border-top: thin solid black;
}

.r1 {
  height: 0.41458333in;
  keep-together: always;
}

.r2 {
  height: 0.5347222in;
  keep-together: always;
}

.r3 {
  height: 0.4965278in;
  keep-together: always;
}

.r4 {
  height: 0.38541666in;
  keep-together: always;
}

.r5 {
  height: 0.45902777in;
  keep-together: always;
}

.r6 {
  height: 0.42569444in;
  keep-together: always;
}

.r7 {
  height: 0.43125in;
  keep-together: always;
}

.r8 {
  height: 0.42708334in;
  keep-together: always;
}

.r9 {
  height: 2.2583334in;
  keep-together: always;
}

.r10 {
  height: 1.0784723in;
  keep-together: always;
}

.s1 {
  font-weight: bold;
}

.t1 {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
}
</style>

<template>
  <div class="userPage">
    <Button class="button" @click="commit">提交</Button>
    <div class="con">
      <table class="t1">
        <tbody>
          <tr class="r1">
            <td class="td2">
              <p class="p3">
                <span>输入</span>
              </p>
            </td>
            <td class="dom td4" colspan="4" nameEn="key1"></td>
          </tr>
          <tr class="r10">
            <td class="td1" rowspan="3">
              <p class="p7">
                <span class="s3">监</span>
              </p>
              <p class="p7">
                <span class="s3">护</span>
              </p>
              <p class="p7">
                <span class="s3">人</span>
              </p>
            </td>
            <td class="td4" colspan="2">
              <p class="p7">
                <span class="s3">姓名</span>
              </p>
            </td>
            <td class="td4" colspan="2">
              <p class="p7">
                <span class="s3">身份证号码</span>
              </p>
            </td>
          </tr>
          <tr class="r4">
            <td writeable="true" nameEn="key2" class="dom td4" colspan="2"></td>
            <td writeable="true" nameEn="key3" class="dom td4" colspan="2"></td>
          </tr>
          <tr class="r4">
            <td writeable="true" nameEn="key2" class="dom td4" colspan="2"></td>
            <td writeable="true" nameEn="key3" class="dom td4" colspan="2"></td>
          </tr>
          <tr class="r10">
            <td class="td1">
              <p class="p3">
                <span>多</span>
              </p>
              <p class="p3">
                <span>选</span>
              </p>
            </td>
            <td class="td6" colspan="4">
              <p class="p5">
                <span writeable="true" nameEn="key6" class="dom">□多选a</span>
              </p>
              <p class="p5">
                <span writeable="true" nameEn="key7" class="dom">□多选b</span>
              </p>
              <p class="p5">
                <span writeable="true" nameEn="key8" class="dom">□多选c</span>
              </p>
            </td>
          </tr>
          <tr class="r10">
            <td class="td1">
              <p class="p3">
                <span>单</span>
              </p>
              <p class="p3">
                <span>选</span>
              </p>
            </td>
            <td class="td6" colspan="4">
              <p class="p5">
                <span writeable="true" nameEn="key9" class="dom">☑单选a</span>
              </p>
              <p class="p5">
                <span writeable="true" nameEn="key10" class="dom">☑单选b</span>
              </p>
              <p class="p5">
                <span writeable="true" nameEn="key11" class="dom">☑单选c</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  mutli = "Mutli";
  single = "Single";

  mounted() {
    this.getConstraint();
    // getConstraint()->getHtml()->init()->getDate()->upDate()
    // 获取约束->获取表格HTML->初始化表格->获取表格数据->还原表格数据
  }

  // 初始化表格
  init() {
    this.con = document.getElementsByClassName("con")[0];
    this.domList = document.getElementsByClassName("dom");
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let nameEn = this.domList[i].getAttribute("nameEn");
      let yueshu = this.findYueshu(nameEn);
      if (yueshu) {
        if (yueshu.type == this.input) {
          this.setINPUT(this.domList[i], yueshu);
        } else if (yueshu.type == this.mutli) {
          this.setMutli(this.domList[i], yueshu);
        } else if (yueshu.type == this.single) {
          this.setSingle(this.domList[i], yueshu);
        }
      }
    }
    this.con.onclick = this.conClick;
    this.getDate()
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

  // 初始化输入框
  setINPUT(dom: any, yueshu: any) {
    dom.setAttribute("type", yueshu.type);
    dom.innerText = yueshu.defaultValue;
    if (yueshu.group) {
      dom.setAttribute("group", yueshu.group);
    }
    if (dom.getAttribute("writeable") == "true") {
      dom.setAttribute("contenteditable", "true");
    } else {
      dom.setAttribute("contenteditable", "false");
    }
  }
  
  // 初始化单选框
  setSingle(dom: any, yueshu: any) {
    dom.setAttribute("type", yueshu.type);
    if (yueshu.group) {
      dom.setAttribute("group", yueshu.group);
    }
  }

  // 初始化多选框
  setMutli(dom: any, yueshu: any) {
    dom.setAttribute("type", yueshu.type);
    if (yueshu.group) {
      dom.setAttribute("group", yueshu.group);
    }
  }

  // 还原表格数据
  upDate(data: any) {
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let nameEn = this.domList[i].getAttribute("nameEn");
      let type = this.domList[i].getAttribute("type");
      if (type == this.input) {
        if (typeof data[nameEn] == "object") {
          this.domList[i].innerText = data[nameEn].shift();
        } else {
          this.domList[i].innerText = data[nameEn];
        }
      } else if (type == this.single || type == this.mutli) {
        let str = this.domList[i].innerText;
        if(data[nameEn]) {
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
        id: '441501199901015056'
    };
    let len = this.domList.length;
    for (let i = 0; i < len; i++) {
      let type = this.domList[i].getAttribute("type");
      let nameEn = this.domList[i].getAttribute("nameEn");
      let value: any = "";
      if (type == this.input) {
        value = this.domList[i].innerText;
      } else if (type == this.mutli) {
        value = this.domList[i].innerText[0] == "☑";
      } else if (type == this.single) {
        value = this.domList[i].innerText[0] == "☑";
      }
      this.addSendValue(send, nameEn, value);
    }

     axios
      .post("https://qgailab.com:12410/intelligent-form/form/storedata", send)
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
        let nameEn = this.domList[i].getAttribute("nameEn");
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
    this.constraint = [
      {
        id: 1,
        nameEn: "key1",
        nameCh: "输入",
        des: "",
        type: "INPUT",
        length: "",
        defaultValue: "key1",
        group: "",
        regularExpression: ""
      },
      {
        id: 2,
        nameEn: "key2",
        nameCh: "姓名",
        des: "",
        type: "INPUT",
        length: "2-6",
        defaultValue: "key2",
        group: "",
        regularExpression: "^[\u4E00-\u9FA5]{2,4}$"
      },
      {
        id: 3,
        nameEn: "key3",
        nameCh: "身份证号码",
        des: "",
        type: "INPUT",
        length: "2-100",
        defaultValue: "key3",
        group: "",
        regularExpression: "^[0-9]*$"
      },
      {
        id: 4,
        nameEn: "key4",
        nameCh: "",
        des: "",
        type: "INPUT",
        length: "",
        defaultValue: "key4",
        group: "",
        regularExpression: ""
      },
      {
        id: 5,
        nameEn: "key5",
        nameCh: "",
        des: "",
        type: "INPUT",
        length: "",
        defaultValue: "key5",
        group: "",
        regularExpression: ""
      },
      {
        id: 6,
        nameEn: "key6",
        nameCh: "",
        des: "",
        type: "Mutli",
        length: "",
        defaultValue: "",
        group: "group1",
        regularExpression: ""
      },
      {
        id: 7,
        nameEn: "key7",
        nameCh: "",
        des: "",
        type: "Mutli",
        length: "0-8",
        defaultValue: "",
        group: "group1",
        regularExpression: ""
      },
      {
        id: 8,
        nameEn: "key8",
        nameCh: "",
        des: "",
        type: "Mutli",
        length: "",
        defaultValue: "",
        group: "group1",
        regularExpression: ""
      },
      {
        id: 9,
        nameEn: "key9",
        nameCh: "",
        des: "",
        type: "Single",
        length: "",
        defaultValue: "",
        group: "group2",
        regularExpression: ""
      },
      {
        id: 10,
        nameEn: "key10",
        nameCh: "",
        des: "",
        type: "Single",
        length: "",
        defaultValue: "",
        group: "group2",
        regularExpression: ""
      },
      {
        id: 11,
        nameEn: "key11",
        nameCh: "",
        des: "",
        type: "Single",
        length: "",
        defaultValue: "",
        group: "group2",
        regularExpression: ""
      }
    ];
    this.getHtml();
    // axios
    //   .post("https://qgailab.com:12410/intelligent-form/form/getconstraint", {
    //     // peopleInfo: {
    //     //   id: "441501199901015056"
    //     // },
    //     form: {
    //       id: "ae8a7da6-d7ed-4aac-bc45-1e6dd528fa95"
    //     }
    //   })
    //   .then(response => {
    //     if (response.data.code == 0) {
    //       //   this.constraint = response.data.data.constraintList;\
    //       this.constraint = [
    //         {
    //           id: 1,
    //           nameEn: "key1",
    //           nameCh: "",
    //           des: "",
    //           type: "INPUT",
    //           length: "",
    //           defaultValue: "key1",
    //           group: "",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 2,
    //           nameEn: "key2",
    //           nameCh: "",
    //           des: "",
    //           type: "INPUT",
    //           length: "",
    //           defaultValue: "key2",
    //           group: "",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 3,
    //           nameEn: "key3",
    //           nameCh: "",
    //           des: "",
    //           type: "INPUT",
    //           length: "",
    //           defaultValue: "key3",
    //           group: "",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 4,
    //           nameEn: "key4",
    //           nameCh: "",
    //           des: "",
    //           type: "INPUT",
    //           length: "",
    //           defaultValue: "key4",
    //           group: "",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 5,
    //           nameEn: "key5",
    //           nameCh: "",
    //           des: "",
    //           type: "INPUT",
    //           length: "",
    //           defaultValue: "key5",
    //           group: "",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 6,
    //           nameEn: "key6",
    //           nameCh: "",
    //           des: "",
    //           type: "Mutli",
    //           length: "",
    //           defaultValue: "",
    //           group: "group1",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 7,
    //           nameEn: "key7",
    //           nameCh: "",
    //           des: "",
    //           type: "Mutli",
    //           length: "0-8",
    //           defaultValue: "",
    //           group: "group1",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 8,
    //           nameEn: "key8",
    //           nameCh: "",
    //           des: "",
    //           type: "Mutli",
    //           length: "",
    //           defaultValue: "",
    //           group: "group1",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 9,
    //           nameEn: "key9",
    //           nameCh: "",
    //           des: "",
    //           type: "Single",
    //           length: "",
    //           defaultValue: "",
    //           group: "group2",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 10,
    //           nameEn: "key10",
    //           nameCh: "",
    //           des: "",
    //           type: "Single",
    //           length: "",
    //           defaultValue: "",
    //           group: "group2",
    //           regularExpression: ""
    //         },
    //         {
    //           id: 11,
    //           nameEn: "key11",
    //           nameCh: "",
    //           des: "",
    //           type: "Single",
    //           length: "",
    //           defaultValue: "",
    //           group: "group2",
    //           regularExpression: ""
    //         }
    //       ];
    //       this.getHtml();
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  
  // 获取html文件
  getHtml() {
    // axios
    //   .post("https://qgailab.com:12410/intelligent-form/form/gethtml2", {
    //     // peopleInfo: {
    //     //   id: "441501199901015056"
    //     // },
    //     form: {
    //       id: "ae8a7da6-d7ed-4aac-bc45-1e6dd528fa95"
    //     }
    //   })
    //   .then(response => {
    //     // this.form = response.data;
    //     this.init();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.init();
  }

  getDate() {
    axios
      .post("https://qgailab.com:12410/intelligent-form/form/getdata", {
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

