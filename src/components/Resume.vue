<template>
  <div class="resume">
    <img src="/static/resume.png" />
    <span class="title">我的简历</span>

    <el-button class="edit" type="primary" icon="el-icon-edit" circle @click="resumeEdit"></el-button>
    <div class="person">
      <el-card class="box-card">
        <span class="othertitle">基本信息</span>
        <table>
          <colgroup>
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <tbody>
            <tr>
              <th>姓名：</th>
              <td>{{personmsg.name}}</td>
              <th>性别：</th>
              <td>{{personmsg.sex}}</td>
            </tr>
            <tr>
              <th>年龄：</th>
              <td>{{personmsg.age}}</td>
              <th>工作年限：</th>
              <td>{{personmsg.workyear}}</td>
            </tr>
            <tr>
              <th>期望岗位：</th>
              <td>{{personmsg.job}}</td>
              <th>学历：</th>
              <td>{{personmsg.record}}</td>
            </tr>
            
            <tr>
              <th>联系方式：</th>
              <td>{{personmsg.tel}}</td>
              <th>邮箱：</th>
              <td>{{personmsg.eml}}</td>
            </tr>
            <tr>
              <th>现住城市：</th>
              <td style="">{{personmsg.address}}</td>
            </tr>
          </tbody>
        </table>
      </el-card>
    </div>
     <div class="study" >
         <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="othertitle">个人技能</span>
        </div>
        <div v-for="item in skills" :key="item" class="skillmsg">
          {{item.msg}}<br>
        </div>
      </el-card>
    </div>


    <div class="study" >
         <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="othertitle">教育经历</span>
        </div>
        <div class="timel" v-for="learns in learnmsg" :key="learns.id">
          <el-timeline>
            <el-timeline-item color="#0bbd87" size="large" :timestamp="learns.time" placement="top">
              <el-card>
                <h4>{{learns.msgtitle}}</h4>
                <p>{{learns.msg}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-card>
    </div>
    <div class="experience">

    </div>

    <div class="other" v-for="others in othermsg" :key="others.id">

    </div>

    <div class="upload">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="uploadtitle">简历上传</span>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :multiple="false"
            :before-remove="beforeRemove"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :on-error="handleError"
            list-type="doc"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">点击提交</el-button>
            <div slot="tip" class="el-upload__tip">只能上传word文件，且不超过10M</div>
          </el-upload>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Resume",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      personmsg: {
        name: "章三",
        age: "25",
        sex: "男",
        school: "山东建筑大学",
        money: "0",
        record: "本科",
        workyear: "3年",
        job: "前端开发",
        studyHistory: "",
        jobHistory: "",
        skills: "",
        specialy: "",
        tel:"17865162356",
        eml:"liupanxin1@163.com",
        address:"上海市浦东新区"
      },
      skills:[
        {msg:"..1、熟练掌握javascript、html、css等前端基础，可独立完成原生js代码编写、页面布局、dom操作等。"},
        {msg:"2、熟练掌握jquery、bootstrap、element-ui、echarts等前端开发控件，提高开发效率。"},
        {msg:"3、熟练掌握vue框架及vue生态，熟练使用vue-router、axios、vuex、vue-resource等vue常用模块。"},
        {msg:"4、对于模块化、组件化开发有一定的认识，对前后端分离开发中常见的问题如跨域问题等有相应的处理经验。"}
      ],
      
      
      learnmsg:[
        {
          id:1,
          title:"教育经历",
          time:"2014-09-01",
          msgtitle:"山东建筑大学",
          msg:"于2014年9月-2018年7月就读于山东建筑大学物联网工程专业。"
        },
         {
          id:2,
          title:"教育经历",
          time:"2017-06-01",
          msgtitle:"惠与济宁国际人才产业基地",
          msg:"于2017年6月参与惠与济宁国际人才产业基地java开发培训。"
        }
      ],
      othermsg: [
        {
          id: 1,
          title: "学习经历",
          msg: "2014年9月1号就读于山东建筑大学物联网工程专业"
        },
        {
          id: 2,
          title: "工作经历",
          msg: "没啥经历，搬了三年砖了。"
        },
        {
          id: 3,
          title: "技能",
          msg: "我韩信贼溜。"
        },
        {
          id: 4,
          title: "特长",
          msg: "睡觉、吃饭、打豆豆。。。"
        }
      ],
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      fileList:[
     
      ]
    };
  },
  
  beforeMount() {
    /** start axios请求服务端数据 */

    // GET request for remote image


    var formData=
      {
      name:this.personmsg.name,
      age:this.personmsg.age,
      sex:this.personmsg.sex,
      workyear:this.personmsg.workyear,
      school:this.personmsg.school,
      record:this.personmsg.record,
      job:this.personmsg.job,
      money:this.personmsg.money,
      studyHistory:this.personmsg.studyHistory,
      jobHistory:this.personmsg.jobHistory,
      skills:this.personmsg.skills,
      specialy:this.personmsg.specialy

      };
     
    console.log( JSON.stringify(formData));
    
    axios({
      method: "post",
      //url: "/api/school/word/registerWord",
      url: "http://localhost:8080/school/word/registerWord",
      data:JSON.stringify(formData),
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method':'GET,POST',
                'Content-Type':'text/plain;charset=UTF-8'}
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    /**  ----end---- */
  },
  mounted() {
    console.log("---------- vue挂载完成 -----------");
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    msgedit(item) {
      console.log(item);
    },
    resumeEdit() {
      this.$router.push({ path: "/setresume" });
    },
    requestData() {},
    //文件上传相关方法 ---start
    submitUpload() {
        this.$refs.upload.submit();
      },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleError(){
        console.log("111");
      }
      //文件上传相关方法 ----end
  }
};
</script>
<style scoped>
.resume {
  margin-top: 20px;
}
img{
  width: 25px;
  height: 25px;
}
.edit {
  position: relative;
  left: 250px;
  top: 20px;
  display: none;
}
.title {
  color: #409eff;
  font-size: 25px;
  line-height: 32px;
  position: relative;
  top: -3px;
  left: 5px;
}
.person {
  padding-left: 100px;
  padding-top: 50px;
  width: 80%;
}
.other {
  padding-left: 100px;
  width: 80%;
  padding-top: 10px;
}
.experience {
  padding-left: 100px;
  width: 80%;
  padding-top: 10px;
}
.upload {
  padding-left: 100px;
  width: 80%;
  padding-top: 10px;
}
.study {
  padding-left: 100px;
  width: 80%;
  padding-top: 10px;
}
.othertitle {
  font-size: 18px;
  color: #409eff;
  line-height: 35px;
}
table {
  line-height: 30px;
}
tbody th {
  padding-left: 50px;
}
.timel {
  text-align: left;
  padding-right: 20px;
}
.skillmsg{
  text-align: left;
  line-height: 25px;
  padding-left: 15px;
}
</style>