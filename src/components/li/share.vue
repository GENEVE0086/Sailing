<template>
   <div>
  <!--悬浮窗-->
  <div id="share">
    <ul class="uls">
      <li>
        <a href="" class="uls_a"></a>
        <img src="//staticpic.6apt.com/static/images/rightnav_phone.png" width="26" height="24" alt="" style="top:11px;left:10px;position:absolute;cursor:pointer;"/>
        <div class="ejectphone">
          <span>400 0783 006</span>
        </div>
      </li>
      <li id="BizQQWPA">
        <a target="_blank" href=" " class="uls_a">
          <img border="0" src="../../assets/suspension/rightnav-QQ.png" alt="6apt" title="6apt"/>
        </a>
      </li>
      <li>
        <a href="" class="uls_a"></a>
        <img src="../../assets/suspension/rightnav-skype.png" width="24" height="24" alt="" style="top:11px;left:11px;position:absolute;cursor:pointer;"/>
      </li>
      <li>
        <a href="" class="uls_a"></a>
        <img src="../../assets/suspension/rightnav_email.png" width="24" height="18" alt="" style="top:14px;left:11px;position:absolute;cursor:pointer;"/>
      </li>
      <li>
        <a href=""  class="uls_a"></a>
        <img src="../../assets/suspension/rightnav_share.png" width="22" height="26" alt="" style="top:10px;left:12px;position:absolute;cursor:pointer;"/>
        <div class="ejectshare">
          <ul>
            <li><a href="" target="_blank"><img src="footer-facebook.png" width="11" height="22" alt=""/></a></li>
            <li><a href="" target="_blank"><img src="footer-twitter.png" width="24" height="20" alt=""/></a></li>
            <li><a href="" target="_blank"><img src="footer-weibo.png" width="24" height="20" alt=""/></a></li>
            <li><div class="bdsharebuttonbox"><a href="" class="bds_weixin" data-cmd="weixin"></a></div></li>
            <li><a href="" target="_blank"><img src="footer-douban.png" width="20" height="19" alt=""/></a></li>
          </ul>
        </div>
      </li>
      <li class="fanhui">
        <a href="" class="uls_a"></a>
        <img src="rightnav_top.png" width="22" height="26" alt="" style="top:10px;left:12px;position:absolute;cursor:pointer;"/>
      </li>
    </ul>

  </div>
   </div>
</template>

<script>
    export default {
        name: 'share',
      data() {
        return {}
      }
    }
</script>

<style scoped>
  @import "../../../static/styles/tdgy.css";
  @import "../../../static/styles/common.css";
  @import "../../../static/styles/bootstrap.min.css";
</style>
