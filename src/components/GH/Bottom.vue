<template>
<div id="bottom">
<div class="logo">
    <router-link :to="{name:'HelloWorld'}"><img src="../../assets/logo.png" width="178"
                                                height="42" alt=""></router-link>

</div>
    <div class="links">
        <div class="columns">
        <h2>服务</h2>
        <ul>
            <li>校内租房</li>
            <li>校园周边临时住宿</li>
            <li>自习场所</li>
            <li>考研资料</li>
        </ul>
        </div>
        <div class="columns">
        <h2>支持</h2>
            <ul>
                <li>服务帮助</li>
                <li>注册账户</li>
                <li>联系方式</li>
                <li>商业合作</li>
            </ul>
        </div>
        <div class="columns">
            <h2>关于</h2>
             <ul>
                    <li>关于我们</li>
                    <li>招纳贤才</li>
                    <li>隐私政策</li>
                    <li>商标</li>
        </ul>
        </div>
    </div>
</div>
</template>

<script>
  import HelloWorld from "../HelloWorld";

  export default {
  name: 'Bottom',
  data() {
    return{};
  },
  components:{
    helloWorld: HelloWorld,
  }
}


</script>

<style scoped>
#bottom{
    width: 100%;
    background-color: #3a3a3a;
    overflow: hidden;
}
.logo{
    margin: 0 auto;
    padding-top: 20px;
    overflow: hidden;
    margin-top: 0px;
    float: left;
}
.links{
    margin-left: 200px;
    color: white;
    font-size: 14px;
}

.columns {
    padding-top: 20px;
    float: left;
    width: 233px;
    margin-right: 40px;
}
.links h2{
    font-size: 20px;
    width: 200px;
}
.links ul{
    list-style: none;
    padding: 0;
}
.links ul li{
    width: 176px;
    margin-bottom: 24px;
    float: left;
    padding: 0 10px;
}
</style>
