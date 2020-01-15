<template>
  <div class="resume">
    <div class="descript">
      <span class="count1">已发现</span>
      <span class="count2">{{cirList.length}}</span>
      <span class="count1">位小伙伴</span>
    </div>
    <div class="contain">
      <div class="card" v-for="item in cirList" :key="item.id" :style="{background:item.color}">
        <div class="left">
          <img :src="item.url" />
        </div>
        <div class="right">
          <span class="name">{{item.name}}</span>
          <br />
          <span class="job">{{item.job}}</span>
          <br />
          <span>{{item.msg}}</span>
        </div>
      </div>
      <div class="add">
        <img src="/static/add.png" @click="addpar" />
      </div>

      <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentDate: new Date(),
      cirList: [
        {
          id: 1,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "韩金龙",
          job: "中国外挂协会会长",
          msg: "你尽管皮，找不到外挂算我输。。。",
          color: "#409EFF"
        },
        {
          id: 2,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "穗儿",
          job: "中国建设用地测量专员",
          msg: "给我一根皮筋，我能量完整个地球",
          color: "#67C23A"
        },
        {
          id: 3,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "穗儿",
          job: "中国建设用地测量专员",
          msg: "给我一根皮筋，我能量完整个地球",
          color: "#E6A23C"
        },
        {
          id: 1,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "穗儿",
          job: "中国建设用地测量专员",
          msg: "给我一根皮筋，我能量完整个地球",
          color: "#F56C6C"
        },
        {
          id: 2,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "穗儿",
          job: "中国建设用地测量专员",
          msg: "给我一根皮筋，我能量完整个地球",
          color: "#909399"
        },
        {
          id: 3,
          url:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "穗儿",
          job: "中国建设用地测量专员",
          msg: "给我一根皮筋，我能量完整个地球",
          color: "#67C23A"
        }
      ]
    };
  },
  methods: {
    addpar() {}
  }
};
</script>
 
<style scoped>
.resume {
  background: url("/static/bg.jpeg");
}
.contain {
  width: 400px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.descript {
  height: 40px;
  line-height: 40px;
  padding-top: 20px;
  padding-right: 30px;
  text-align: right;
}
.count1 {
  font-size: 20px;
}
.count2 {
  font-size: 24px;
  color: #f56c6c;
}
.card {
  height: 220px;
  width: 380px;
  background: #67c23a;
  margin: 30px;
  border-radius: 5px;
  border-top-left-radius: 40px;
  box-shadow: inset 1px 1px 5px pink, 1px 1px 10px #000;
  display: flex;
}

.card .left {
  width: 150px;
  line-height: 220px;
  border-right: #ffffff 2px solid;
}
img {
  width: 92px;
  height: 92px;
  border-radius: 50%;
}
.card .right {
  width: 160px;
  margin-top: 30px;
  padding-left: 10px;
  line-height: 30px;
}
.name {
  font-size: 22px;
  font-weight: bold;
  color: #303133;
}
.job {
  font-size: 16px;

  color: #606266;
}
.add {
  margin: 0 auto;
}
.add img {
  width: 64px;
  height: 64px;
}

.add :hover {
  opacity: 0.8;
}
.contain :hover {
  opacity: 0.8;
}
</style>