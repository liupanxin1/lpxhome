<template>
  <div id="app">

    <v-top></v-top>
    <div class="contain">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="user">
        <v-user></v-user> 
      </div>
    
    </div>
    
  </div>
  
</template>

<script>

import TopBar from "./public/TopBar"
import UserInfo from "./public/UserInfo"
export default {
  name: 'App',
  components: {
    "v-top":TopBar,
    "v-user":UserInfo
  },
  mounted(){
    this.$router.push('/home');
  },
  methods:{

    
  }
}
</script>

<style>
body{
  text-align: center;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: #EBEEF5;

  min-width: 1000px;

}
.contain{
  width: 80%;
  margin: 0 auto;
  margin-top:10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  

}
.contain .main{
  width: 75%;
  min-width: 665px;
  background: #ffffff;
  min-height: 700px;
  max-width: 800px;
  border-radius: 2px;
  overflow:scroll;
  padding: 10px;
}
.contain .user{
  width: 25%;
  min-width: 225px;
  background: #ffffff;
  min-height: 500px;
  max-height: 600px;
  border-radius:2px;
  margin-left: 15px;
  padding-top: 25px;

}
</style>
