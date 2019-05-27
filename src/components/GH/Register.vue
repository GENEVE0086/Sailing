<template>
  <div>

    <div class="mc_layout_wrapper">
      <div class="rej_layout_cell">
        <div class="rej_content">
          <div class="rej_con_wrap">
            <div class="rej_con_cell">
              <div class="rej_login_wrap">
                <div class="rej_login">
                  <div class="rej_login_text">
                    研路同行--与您相伴！					</div>
                </div>
                <div class="row registercont">
                  <form role="form" id="form-register">
                    <div class="col-xs-5 col-sm-5">
                      <div class="row inwrap">
                        <input type="text" class="inputreje" name="account" id="account" placeholder="请输入邮箱账号"></input>
                        <span for="account" generated="true" id="account_info" class="inputError success"></span>
                      </div>
                      <div class="row inwrap">
                        <input type="password" class="inputrej password" name="password" id="password" placeholder="请输入密码"></input>
                      </div>
                    </div>
                    <div class="col-xs-5 col-sm-5 registerright">

                      <div class="row inwrap">
                        <div class="col-sm-6 col6">
                          <input type="text" class="inputrej" name="verification" id="verification" placeholder="请输入验证码"></input>
                          <span for="account" generated="true" id="verification_info" class="inputError success"></span>
                        </div>
                        <div class="col-sm-6 col6"><img src="../../assets/verify_c.png" id="verification_img" height="40"/></div>
                      </div>
                      <div class="inwrap">
                        <input type="password" class="inputrej" name="password2" id="password2" placeholder="请确认密码"></input>
                      </div>

                    </div>
                    <div style="clear:both">

                    </div>

                    <div class="zhuce_wrap" style="margin-top:20px;">

                      <div class="mcsmtbtn" style="display:none;">
                        <table width="100%" height="100%" border="0">
                          <tbody>
                          <tr>
                            <td align="center" valign="center">
                              <img src="button.gif" width="22" height="22" data-bd-imgshare-binded="1">
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="registerbtn">
                        <input type="submit" class="registerbtn_con"  value="提交">
                      </div>
                      <div class="liji_login"><a href="login.html"><p>已有账号,马上登录</p></a></div>
                    </div>
                  </form>
                </div>


                <p style="text-align:center;margin-top:30px;margin-bottom:16px;">
                  <i style="width:46px;height:1px;padding:0px;display:inline-block;background-color:#eeeeee;vertical-align:middle;"></i>
                  <span style="text-align:center;font-size:16px;line-height:16px;color:#666;letter-spacing: 2px;">使用第三方登录</span>
                  <i style="width:46px;height:1px;padding:0px;display:inline-block;background-color:#eeeeee;vertical-align:middle;"></i>
                </p>
              </div>

              <div class="rgits_mothed">

                <div class="rgitstl">

                  <ul>
                    <li>
                      <img src="weixin.png" alt=""/>
                    </li>
                    <li>
                      <img src="qq.png" alt=""/>
                    </li>

                    <li>
                      <img src="weibo.png" alt=""/>
                    </li>
                  </ul>

                </div>

              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
  name: 'Register',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  @import "../../../static/styles/user.css";
  @import "../../../static/styles/common.css";
  @import "../../../static/styles/bootstrap.min.css";
  @import "../../../static/styles/bootstrap-datetimepicker.min.css";
  @import "../../../static/styles/aboutus.css";
  @import "../../../static/styles/index.css";
  @import "../../../static/styles/responsiveslides.css";
  @import "../../../static/styles/tdgy.css";
  @import "../../../static/styles/list.css";
  @import "../../../static/styles/responsiveslides.css";
  

</style>
