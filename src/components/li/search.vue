<template>
  <div>

    <!--内容-->
    <div id="mengcdiv" style="display:none">
      <table width="100%" height="100%" border="0">
        <tr>
          <td align="center" valign="center">
            <img src="../../assets/load.gif" width="50" height="50" />
          </td>
        </tr>
      </table>
    </div>

    <div id="listbox">
      <div class="listbox">
        <div class="sharediv"><!--选择大学-->
          <label>选择大学</label>
          <ul class="sharediveq0">
            <li class="sharedivactive" >中南大学</li>
            <li >湖南大学</li>
            <li >中南林业科技大学</li>
            <li >长沙理工大学</li>
            <li >湘潭大学</li>
          </ul>
        </div><!--选择大学-->
        <div class="sharediv"><!--选择校区-->
          <label>选择校区</label>
          <div class="sharedivso">
            <input type="text" id="selectCity" value="铁道学院" readonly="readonly">
          </div>
        </div><!--选择校区-->
        <div class="sharediv"><!--选择方位-->
          <label>选择方位</label>
          <div class="sharedivso">
            <input type="text" id="selectCity" value="朝阳" readonly="readonly">
          </div>
        </div>
        <!--选择方位-->
        <div class="sharediv"><!--房间类型-->
          <label>房间类型</label>
          <ul class="sharediveq1">
            <li>
              <img src="../../assets/on.png" class="turadio" alt=""/>
              <input type="checkbox" class="gyradio" name="roomType[]"  checked value="1">基础房间    			</li><li>
            <img src="../../assets/on.png" class="turadio" alt=""/>
            <input type="checkbox" class="gyradio" name="roomType[]"  checked value="2">精装修房间   			</li><li>
            <img src="../../assets/on.png" class="turadio" alt=""/>
            <input type="checkbox" class="gyradio" name="roomType[]"  checked value="3">多人房间    			</li><li>
            <img src="../../assets/on.png" class="turadio" alt=""/>
            <input type="checkbox" class="gyradio" name="roomType[]"  checked value="4">单人房间    			</li>   </ul>
        </div><!--房间类型-->
        <div class="sharediv tebiegd"><!--价格区间-->
          <label class="tskz">价格区间</label>

          <div class="Company fl">
            <span>￥</span>/月   </div>
          <div class="Discount fl">
            <ul>
              <li><img src="../../assets/off.png" class="turadio0" alt=""/><input type="checkbox" class="gyradio0" name="apartmentType[]"  value="preferential"> <span>优惠</span></li>
              <li><img src="../../assets/off.png" class="turadio0" alt=""/><input type="checkbox" class="gyradio0" name="apartmentType[]"  value="shortRent"> <span>可短租</span></li>
              <li><img src="../../assets/on.png" class="turadio0" alt=""/><input type="checkbox" class="gyradio0" name="apartmentType[]"  checked value="rent"><span>未满租</span></li>
            </ul>
          </div>
        </div><!--价格区间-->
      </div>
    </div>
    <div id="detailed">
      <div class="Number">
        <div class="Numberse">
          <span sort="default">默认排序</span>   <ul>
          <li sort="default">默认排序</li>
          <li id="distanceLi" sort="distance" style="display:none" >距离最近</li>
          <li sort="low">价格由低到高</li>
        </ul>
        </div>
        <span>共<em id="apartmentCount">1</em>个结果</span>
      </div>
      <div class="Listinformation" id="dataList"   style="min-height:942px;display:block" >
        <div class="Listinformationz fl"><!--左边-->
          <ul class="dataList">
            <li count="1" style="height: 248px;">
              <div class="room fl">
                <a
                  href="Details_58.htm" target="_blank"><img src="../../assets/pic1.png" width="300" height="300" alt=""/></a>
              </div>
              <div class="Listinformationw fr" style="height: 246px;">
                <div class="h2_wrap"><div class="h2_detail">
                  <a
                    href="Details_58.htm"
                    target="_blank"><h2>通泰梅岭苑</h2></a></div></div>
                <h3>距离：中南大学铁道校区 0.41 km</h3>

                <p class="strong_p">

                  <span> <strong>￥<i>1600</i></strong></span> /月起			       </p>
                <div class="wordbottom">
                  <router-link :to="{name:'total'}" > <a href="" target="_blank" class="djhuaguo">查看详情</a></router-link>
                </div>
                <div class="BLabel">

                </div>
              </div>
            </li>
          </ul>

        </div>

      </div><!--左边-->



      <div class="clear"></div><!--去除浮动-->

    </div>

  </div>
</template>

<script>
  import HelloWorld from '../HelloWorld'
  import total from '../li/total'
    export default {
        name: "search",

      data () {
        return {}
      },
      components: {
        total: total,
        helloWorld: HelloWorld
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
</style>
