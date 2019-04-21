<template>
  <div>
    <div id="head">
      <div class="logo">
        <router-link :to="{name:'HelloWorld'}"><img src="http://staticpic.6apt.com/static/images/logo.png" width="178"
                                                    height="38" alt=""></router-link>
      </div>
      <div class="user">
        <ul>
          <li>
            <router-link :to="{name:'Login'}">登录</router-link>
          </li>
          <li>
            <router-link :to="{name:'Register'}">注册</router-link>
          </li>
        </ul>
     </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from "../HelloWorld";
  import Login from "./Login";
  import Register from "./Register";



  export default {
    name: 'Head',
    data () {
      return {};
    },
    components: {
      helloWorld: HelloWorld,
      register: Register,
      login: Login
    }
  }
</script>


<style scoped>
  #head {
    border: 1px none #eeeeee;
    border-bottom-style: solid;
    width: 100%;
    top: 0;
    background-color: #ffffff;
    position: fixed;
    height:auto;
    /*right: 20px;*/
    z-index: 100;
  }
  .logo {
    margin-top: 13px;
    float: left;
  }

  .user {
    line-height: 30px;
  }

  .user ul li {
    float: right;
    color: #333333;
    font-size: 14px;
    margin-left: 28px;
    list-style: none;
  }

  .user ul {
    position: absolute;
    right: 20px;
  }

  .user ul a {
    text-decoration: none;
  }

  .user ul a:hover {
    color: #00a7eb;
  }

</style>
