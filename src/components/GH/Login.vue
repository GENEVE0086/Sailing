<template>
  <div>

    <!--主块 -->
    <div class="mc_layout_wrapper">
      <div class="login_layout_cell">
        <div class="login_content">
          <div class="login_con_wrap">
            <div class="login_con_cell">

              <div class="login_login_wrap">
                <div class="login_login">
                  <div class="login_login_text">
                    研路同行--与您相伴！
                  </div>
                </div>
                <div class="row logincont">
                  <div class="col-xs-6 col-sm-6" style="padding-right:45px;">
                    <form role="form" id="from-login">
                      <div class="inwrap">
                        <input type="text" class="inputlogin" name="username" id="account" placeholder="请输入邮箱账号">
                      </div>
                      <div class="inwrap">
                        <input type="password" class="inputlogin" name="password" id="password" placeholder="请输入密码">
                      </div>
                      <a href="forgotten-password.htm">
                        <p style="float:right;color:#00a7eb;font-size:14px;letter-spacing:2px;">忘记密码?</p></a>

<!--                      <div class="inwrap">-->
<!--                        <input type="text" class="inputlogin"  value="此处为验证码" >-->
<!--                      </div>-->
                        <div class="btwrap">
                        <div class="mengcbtn" style="display:none">
                          <table width="100%" height="100%" border="0">
                            <tbody>
                            <tr>
                              <td align="center" valign="center">
                                <img src="../../assets/button.gif" width="22" height="22" data-bd-imgshare-binded="1">
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="btwrap_con">
                          <input type="submit" class="btwrap_detail"  id="from-login-submit" value="登录">
                        </div>
                      </div>
                    </form>

                  </div>
                  <div class="col-xs-6 col-sm-6 loginright">

                    <div style="text-align: center;margin-left:8px;margin-top: 20px;">

                      <i style="width:46px;height:1px;padding:0px;display:inline-block;background-color:#eeeeee;vertical-align:middle;"></i>
                      <span style="text-align:center;font-size:16px;line-height: 16px;color:#666;padding-left: 6px; padding-right: 4px;letter-spacing:2px;">使用第三方登录</span>
                      <i style="width:46px;height:1px;padding:0px;display:inline-block;background-color:#eeeeee;vertical-align:middle;"></i>
                    </div>

                    <div class="logstyle">
                      <ul style="margin-left: -8px;">
                        <li>
                          <a href=""><img src="//staticpic.6apt.com/static/images/weixin.png" alt="微信登录"/></a>
                        </li>
                        <li>
                          <a href=""><img src="//staticpic.6apt.com/static/images/qq.png" alt="QQ登录" /></a>
                        </li>

                        <li>
                          <a href=""><img src="//staticpic.6apt.com/static/images/weibo.png" alt="微博登录"/></a>
                        </li>
                      </ul>
                    </div>
                    <p style="text-align:center;padding-left:40px;font-size:14px;color:#666;letter-spacing:2px;">如有疑问，请致电：18745007174</p>
                  </div>
                </div>
                <p style="font-size:14px;margin-top: 40px;color: #00a7eb;letter-spacing:2px;text-align:center;">
                  <router-link :to="{name:'Register'}" class="liji">
                    没有帐号，立即注册
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Register from './Register'

  export default {
  name: 'Login',
  data () {
    return {}
  },
    components: {
      Register:Register
    }
}
</script>

<style scoped>
     @import "../../../static/styles/user.css";
     @import "../../../static/styles/common.css";
     @import "../../../static/styles/bootstrap.min.css";
     @import "../../../static/styles/bootstrap-datetimepicker.min.css";
     @import "../../../static/styles/aboutus.css";
</style>
