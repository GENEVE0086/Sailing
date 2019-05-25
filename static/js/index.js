$('#searchButton').click(function(){
	$('#matchResult div').eq(0).children().children().eq(0).click();
})

function retrieve(){
	var countrycode = '';
	$('#countryUL li').each(function(i,ele){
		if($(ele).hasClass('select')){
			countrycode = $(ele).attr('code');
		}
	});
	var keyword = $('#keyword').val();
	var url = host_path+"/Index/retrieve";
	var data = {};
	data.countries = countrycode;
	data.keyword = keyword;
	$('#xialmcen').show();
	$.ajax({
		url:url,
		data:data,
		type:'POST',
		success:function(e){
			var data = eval("("+e+")");
			var str = '';
			if(data.cityCount == '0' && data.nearbyCount == '0' && data.apartmentCount == '0'){
				str = '<p class="nomatchtext">抱歉，没有搜索结果，请重新输入</p>';
			}
			
			if(data.cityCount > 0){
				str += '<div class="city"><div class="city-ti">'+l_config.City+'</div>';
				var city = data.city;
				for(var a in city){
					if(data.isChina == 'english'){
						str += '<li onclick="jump(\''+city[a].city_id+'\',\'city\')" ><a href="javascript:;">'+city[a].city_nameen+'</a></li>';
					}else{
						str += '<li onclick="jump(\''+city[a].city_id+'\',\'city\')"><a href="javascript:;">'+city[a].city_name+'</a></li>';
					}
				}
				str += '</div>';
			}
			if(data.nearbyCount > 0){
				str += '<div class="university"><div class="city-ti">'+l_config.University+'</div>';
				var nearby = data.nearby;
				for(var a in nearby){
					if(data.isChina == 'english'){
						str += '<li onclick="jump(\''+nearby[a].nearby_id+'\',\'nearby\')"><a href="javascript:;">'+nearby[a].nearby_nameen+'</a></li>';
					}else{
						str += '<li onclick="jump(\''+nearby[a].nearby_id+'\',\'nearby\')"><a href="javascript:;">'+nearby[a].nearby_namecn+'</a></li>';
					}
				}
				str += '</div>';
			}
			if(data.apartmentCount > 0){
				str += '<div class="apartment"><div class="city-ti">'+l_config.Property+'</div>';
				var apartment = data.apartment;
				for(var a in apartment){
					str += '<li onclick="jump(\''+apartment[a].apartment_id+'\',\'apartment\')"><a href="javascript:;">'+apartment[a].apartment_name+'</li>';
				}
				str += '</div>';
			}
		    $('#matchResult').css('display','block');
			$('#matchResult').html(str);
            $('.defaultResult').css('display','none');
			$('#searchSelect').scrollTop(0);

            if(keyword.length==0){
			   $('#matchResult').css('display','none');
			   $('.defaultResult').css('display','block');			  
	       };
	       $('#xialmcen').hide();
		}
	})
}
function jump(flag,type){
	$('#keyword').val('');
	var url;
	if(type == 'city'){
		if(g_config.urlLang != 'cn'){
			url = "en/List/showList?type=city&city="+flag;
		}else{
			url = "cn/List/showList?type=city&city="+flag;
		}
	}
	if(type == 'nearby'){
		if(g_config.urlLang != 'cn'){
			url = "en/List/showList?type=nearby&nearby="+flag;
		}else{
			url = "cn/List/showList?type=nearby&nearby="+flag;
		}
	}
	if(type == 'apartment'){
		if(g_config.urlLang != 'cn'){
			url = "Details?apartment_id="+flag;
		}else{
			url = "cn/Details?apartment_id="+flag;
		}
	}
	window.location.href=host_path+'/'+url;

}
$(function() {
	$('#dowebok').responsiveSlides({
		auto:true,
		nav: true,
		namespace: 'centered-btns',
		timeout:6000,
	});
});

$(document).ready(function(e) {
        $('.nav>ul>li').click(function()
		{
			$(this).addClass('select').siblings('li').removeClass('select');
			var code = $(this).attr('code');
			$('#'+code).show().siblings('div').not('#recentitem').hide();
			$('.nav>ul>li img').removeClass('xianshi');
			$(this).find('img').addClass('xianshi');
			retrieve();
			
		});
		$('.city>li').click(function(e)
		{
			$(this).css('background','#eeeeee').siblings('li').css('background','#ffffff');
			e.stopPropagation();
		});
		$('.daxue>li').click(function(e)
		{
			$(this).addClass('city-select').siblings('li').removeClass('city-select');
			e.stopPropagation();
		});
		$('.shuru').click(function(e)
		{
			$('.xiala').show();
			e.stopPropagation();
		});
		$(document).click(function()
		{
			$('.xiala,.language').hide();
		});
    });

	$(document).ready(function(e){
      $('.hotcity li').each(function(i,ele){		  
		var litextlength=$(ele).text().length;
		 if(litextlength>22.8){
			$(ele).mouseover(function(){					
			  $(this).attr("title",$(this).html());					
			 });
			}
		 });
   });

	
	
	$('.fanhui').hide();
	$('.fanhui').click(function(){
		$('html,body').animate({scrollTop:0},500)
		})
	$(window).scroll(function(){
    l=Math.max(document.body.scrollTop||document.documentElement.scrollTop);
			if(l>=550)
			{$('.fanhui').show(500)}
			else
			{$('.fanhui').hide(500)}
	});

	//http://detectmobilebrowsers.com/ + tablets
	(function(a) {
		if(/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|playbook|silk/i.test(a)
		||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
		{
			//Add skrollr mobile on mobile devices.
			document.write('<script type="text/javascript" src="../../dist/skrollr.mobile.min.js"><\/script>');
		}
	})(navigator.userAgent||navigator.vendor||window.opera);

	var s = skrollr.init();


	$(document).scroll(function(){
   var scrollTop=$(this).scrollTop();
   var lis=$(".rslides li");
     $(".rslides li").css({top:scrollTop/1.5});
	 $(lis).each(function(i,ele){
	if(scrollTop>0){
	  if($(ele).css("float")!=="none"){
	     var topd=$(this).css("top");
		 var ltop=parseInt(topd)-40;
		  var lheight=478-parseInt(topd);
		     $(".wrap").css("top","-"+topd);
			 $(".bao").css("top","-"+topd);
             
			 $(".wrap").css("height",lheight+"px");
	  }
	}
	else if(scrollTop==0){$(".bao").css("top","0px");$(".wrap").css("top","0px"); 
	 $(".wrap").css("height","auto");}
	 
	  
	 });
	
});
$(function(){
   var scrollTops=$(this).scrollTop();
   var lis=$(".rslides li");
   $(lis).each(function(i,ele){
    if(scrollTops>0){
	  if($(ele).css("float")!=="none"){
	     var topd=$(this).css("top");
		  var ltop=parseInt(topd)-40;
		  var lheight=478-parseInt(topd);
		 $(".wrap").css("top","-"+topd);
		 $(".wrap").css("height",lheight+"px");
		 $(".bao").css("top","-"+topd);
		
	  }
	}else if(scrollTops==0){$(".bao").css("top","0px"); $(".wrap").css("top","0px");  $(".wrap").css("height","auto");}
	 });
});