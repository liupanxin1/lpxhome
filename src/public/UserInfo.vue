<template>
    <div class="userinfo">
        <div class="photo">
          <div class="isme">

          </div>
          <div class="msg">
            <span class="myname">{{username}}</span>
            <br>
            <span class="mymsg">{{usermsg}}</span>
          </div>
          <div class="target">
              <el-tag>小鲜肉</el-tag>
              <el-tag type="danger">前端迷</el-tag>
              <el-tag type="info">宅男</el-tag>
              <router-link to="/setresume">
              <el-tag type="warning">简历修改</el-tag>
              </router-link>
              
               <el-tag type="success">个人信息</el-tag>
              
          </div>
          <div class="contact">
            <span class="fz">———&nbsp&nbsp&nbsp</span><span class="title">社交账号</span> <span class="fz">&nbsp&nbsp&nbsp——— </span>
            <div class="contain">
              <div class="qq">
                  <img src="/static/qqfs.jpeg">
                  <span>QQ</span>
               </div>
               <div class="wx">
                 <img src="/static/wxfs.jpeg">
                 <span>微信</span>
               </div>
            </div>
            
          </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"浏半仙儿",
      usermsg:"假如生活撂倒了你，你就趴那，也别起来，坚定不移的往前沽涌，一直沽涌。"
    }
  }
}
</script>
<style scoped>
  .photo{
    width: 90%;
    position: relative;
    left:15px;
    
  }
  .photo .isme{
    width: 100px;
    height: 100px;
     margin: 0 auto;
    background: url("/static/photo.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    top: 25px;
    overflow: hidden;
  
    
  }
  .photo .msg{
    width: 200px;
    margin: 0 auto;
    position: relative;
    top:35px;
    
  }
  .photo .msg .myname{
    font-size: 20px;
    color: #409eff;
    line-height: 35px;
  }
  .photo .msg .mymsg{
    font-size: 15px;
    color: #606266;
    line-height: 35px;
  }
  .target{
    width: 200px;
    margin: 0 auto;
    position: relative;
    top:35px;
    line-height: 40px;
  }
  .contact{
    width: 200px;
    margin: 0 auto;
    position: relative;
    top:45px;
    text-align: center;

  }
  .contact .fz{
    color: #EBEEF5;
  }
  .contact .contain{
    width: 100%;
    margin: 0 auto;
  }

  .contact .contain .qq{
    width: 72px;
    height:98px;

    margin: 20px;
    
  }
  .contact .contain .wx{
    width: 72px;
    height:98px;

    margin-top: 20px;
    
  }
  .contact .contain img{
    height: 72px;
    width: 72px;
  }
</style>