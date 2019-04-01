<template>
    <div id="head">
      <div class="logo">
        <router-link :to="{name:'HelloWorld'}"><img src="http://staticpic.6apt.com/static/images/logo.png" width="178" height="38" alt=""></router-link>
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
</template>

<script>
    import HelloWorld from "../HelloWorld";
    import Login from "./Login";
    import Register from "./Register";

    export default {
        name: 'Head',
      data(){
          return{};
      },
      routes:[
        {
          name:'HelloWorld',
          path:'/',
          components:HelloWorld
        },
        {
          name:'Login',
          path:'/login',
          components:Login
        },
        {
          name:'Register',
          path:'/register',
          components:Register
        }
      ]
    }
</script>

<style scoped>
  #head {
    border: 1px solid #eeeeee;
    border-left-style: none;
    border-right-style: none;
    border-top-style: none;
    min-width: 1200px;
    top:0;
    background-color: #ffffff;
    position: fixed;
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

  .user ul a{
    text-decoration: none;
  }

  .user ul a:hover {
    color: #00a7eb;
  }

</style>
