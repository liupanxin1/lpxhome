<template>
  <div class="setresume">
    <img src="/static/resume.png">
    <span class="title">简历上传</span>
    <div class="upload">
      <input type="file" id="file" name="myfile" />
      <br>
      <input type="button" @click="uploadFile" value="上传" />
      <input type="button" @click="cancleLoad" value="取消" />
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "setResume",
  data() {
    return{

    }
  },
  Mount() {

  
      /** start vue-resource请求服务端数据 */




      /**  ----end---- */
  },
  methods: {
    uploadFile(){
    /**文件上传方法   ---start */
    var fileObj=document.getElementById("file").files[0];   //dom获取上传单文件
    if(!fileObj){
      alert("屁！没选文件。。。");
    }
    var formData=new window.FormData();
    formData.append("file",fileObj);
    console.log(formData);
    axios({
      method: "post",
      url: "http://localhost:8080/school/word/docToHtml",
      data: formData,
      headers: { 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Method':'GET,POST',
          'Content-Type':'multipart/form-data'
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
   

   
    },
    cancleLoad(){
      alert("emmmm,取消还没想好咋写。。。。");
    }
    /**文件上传方法   ---end */
  }
};
</script>
<style scoped>

.title {
  color: #409eff;
  font-size: 25px;
  line-height: 32px;
  position:relative;
  top:-5px;
  left:5px;
}
.upload{
  padding: 20px;
  line-height: 40px;
}

</style>