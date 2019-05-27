<template>
<div>
  <!-- banner -->
  <div id="banner" style="position: relative;">

    <div class="wrap">
      <img src="../assets/1.jpg" width="1263.3px" height="478px">
    </div>

    <div class="bao">
      <div class="banner-content" data-0="opacity:1" data-499="opacity:1" data-500="opacity:0">
        <p class="hs_p1">研路同行</p>
        <h2>因梦而美，从这里开始，为您解决考研路上种种难题</h2>
        <div class="baowrap">
          <div class="baowrap_one">

          </div>
          <div class="baowrap_two">
            <div class="nav">
              <ul id="countryUL">
                <li class="select xianshi" code="GB">学校周边租房</li>
                <li code="US">旅馆信息 </li>
                <li code="AU">自习场所</li>
                <li code="FR">  考研资料  </li>
              </ul>
            </div>
            <div class="wrapinput">
              <input type="text"  id="keyword" class="shuru fl" onKeyUp="retrieve()" value="铁道学院" readonly="readonly">
              <router-link :to="{name:'total'}"><input type="button" value="搜索" class="tijiao fl" id="searchButton"></router-link>
            </div>
          </div>
        </div>
        <div class="xiala" id="searchSelect">
          <div id="xialmcen" style="display:none">
            <table width="100%" height="100%" border="0">
              <tr>
                <td align="center" valign="center">
                  <img src="loading.gif" width="50" height="50" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- banner结束 -->
  <!-- news -->
  <div id="news">
    <h1>服务推荐</h1>
    <img src="../assets/bg1.png" class="bg1 fl" alt="" >
    <div class="one" >
      <div class="one-1 fl">
        <img src="../assets/fw1.png"   width="285" height="400" alt="">
      </div>
      <div class="one-2 fl">
        <img src="../assets/fw2.png"   width="285" height="400" alt="">
      </div>
      <!-- 新添活动 -->
      <a href="">
        <div class="one-3 fl">
          <img src="../assets/fw3.png"   width="285" height="400" alt="">
        </div>
      </a>
      <div class="one-4 fl">
        <img src="../assets/fw4.png"  width="285" height="400" alt="">
      </div>

    </div>
    <!-- news结束 -->
  </div>
</div>
</template>

<script>
  import total from "./li/total"
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }

  },
  components: {
    total:total
  },
  methods:{
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/styles/user.css";
  @import "../../static/styles/common.css";
  @import "../../static/styles/bootstrap.min.css";
  @import "../../static/styles/bootstrap-datetimepicker.min.css";
  @import "../../static/styles/aboutus.css";
  @import "../../static/styles/index.css";
  @import "../../static/styles/responsiveslides.css";
  @import "../../static/styles/tdgy.css";
</style>
