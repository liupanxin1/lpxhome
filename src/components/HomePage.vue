<template>
  <div class="homepage">
    
    <div class="container">
      <div class="table">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="280"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
      <div class="pager">
        <el-pagination background layout="prev, pager, next" :total="pager.total"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      pager: {
        pageNum:0, //页数
        pageSize:0, //每页展示数据
        totalSize:0,//总数据量
        totalPagers:0//总页数

      },
      tableList:[

      ],
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  mounted(){
    var self=this;
    axios({
      method: "post",
      //url: "/api/school/word/registerWord",
      url: "http://localhost:8080/school/findPage?pageNum=3&pageSize=10",
      headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method':'GET,POST',
                'Content-Type':'application/json;charset=UTF-8'}
    }).then(function(response) {
      let rspData=response.data;
      self.pager.pageNum=rspData.pageNum;
      self.pager.pageSize=rspData.pageSize;
      self.pager.totalSize=rspData.totalSize;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.aaa {
  width: 200px;
  height: 1800px;
}
.table{
  padding: 50px;
  
}
</style>