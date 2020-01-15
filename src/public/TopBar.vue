<template>
  <div class="topbar">
    <div class="left">
      <span class="name">{{name}}</span>
      <span class="msg">{{msg}}</span>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/home"><span>首页</span></router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <router-link to="/resume">个人简历</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/learnmaterials">学习资料</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/onedayday" >每日一记</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/circle">圈子</router-link>
        </el-menu-item>
       
          <el-menu-item index="6">
          <router-link to="/setresume">简历上传</router-link>
          </el-menu-item>
        
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      name: "浏半仙儿",
      msg: "前端小白，正在努力中",
      activeIndex: "1",
     
    };
  }
};
</script>
<style scoped>
.topbar {
  width: 100%;
  height: 60px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.left {
  width: 40%;
  min-width: 400px;
  padding-left: 40px;
}
.left .name {
  font-size: 26px;
  color: #409eff;
  line-height: 50px;
}
.left .msg {
  font-size: 15px;
  color: #606266;
  line-height: 50px;
}
.menu {
  margin-left: 150px;
  min-width: 520px;
  
}
a{
  text-decoration: none;
  display: block;
  line-height: 68px;
  
}

</style>