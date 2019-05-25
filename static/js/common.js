$(function (){
 	
 	var currUrl = window.location.pathname;
 	var temp = '';
 	
 	if(currUrl.indexOf("login") > 0 || currUrl.indexOf("register") > 0){
 		temp = '1';
		$('#bannerAccount-User').show();
 	}
	if(currUrl.indexOf("Account") > 0 || currUrl.indexOf("modify") > 0){
 	    $('.threechoices').hide();
		$('#bannerAccount-User').show();
		
 	}
 	$("#bannerAccount-User").mouseover(function(){
	    $(".apt-Drapdown-list").show();
	});
	$("#bannerAccount-User").mouseout(function(){
	    $(".apt-Drapdown-list").hide();
	});
	$("#languageswitch").mouseover(function(){
	    $(".languagelist").show();
	});
	$("#languageswitch").mouseout(function(){
	    $(".languagelist").hide();
	});
	
 });


$(function(){
	var url = host_path+'/User/checkLogin';
	$.ajax({
		url:url,
		data:{},
		type:'GET',
		success:function(e){
			var data = eval("("+e+")");
			if(data.status == 'success'){
				var str = '<div class="mycount"></div>'+data.username;
				$('#userName').html(str);
				$("#bannerAccount-Login").css('display','none');
				$("#bannerAccount-User").css('display','block');
			}else{
				$("#bannerAccount-User").css('display','none');
				$("#bannerAccount-Login").css('display','block');
			}
		}
	})
});

function sharepos(){
  var wh=$(window).height();
  var sh=$("#share").children().height();
  var lh=wh-sh;
	  $("#share").css("top",lh/2+"px");
};
sharepos();
$(window).resize(function(){
  sharepos();
});
$(window).scroll(function(){
  sharepos();
});

$(function(){
  $(".uls>li").mouseover(function(){
     $(this).children().eq(0).css({"opacity":"1","background-color":"#ffcc00"});
    
  });
  $(".uls>li").mouseout(function(){
     $(this).children().eq(0).css({"opacity":"0.6","background-color":"#434343"});
    
  });
});

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["weixin"],"viewText":"������","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


$(function(e) {
    $('.gynav li').eq(1).bind({
		'mouseout':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/header-guide.png')},
		'mouseover':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/header-guide1.png')}
		})
	$('.gynav li').eq(0).bind({
		'mouseout':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/header-book.png')},
		'mouseover':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/header-book1.png')}
		})
		$('.threechoices li:eq(2) a').eq(0).bind({
		'mouseout':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/xialasanjiao.png')},
		'mouseover':function(){$(this).find('img').attr('src','//staticpic.6apt.com/static/images/lanxialasanjiao.png')}
		})
		$('.hs_language').click(function(e){
			  $(".hs_uls").toggle();
			 
			  e.stopPropagation();
		})
			$(document).click(function(){
			  $(".hs_uls").hide();
			 
		})

	$('.language').hide();
	$('.threechoices a:eq(2)').click(function(e){
		$('.language').toggle();
		e.stopPropagation();
		})
	$('.language li').click(function(){
		$(this).parents('.language').hide(); 
		})
	$('#share li').eq(0).mouseover(function(){$('.ejectphone').stop(false, false).animate({width:'144px'},"500")})
	$('#share li').eq(0).mouseout(function(){$('.ejectphone').stop(false, false).animate({width:'0'},"500")})
	$('#sharemobile li').eq(1).mouseover(function(){$('.ejectphone').stop(false, false).animate({width:'144px'},"500")})
	$('#sharemobile li').eq(1).mouseout(function(){$('.ejectphone').stop(false, false).animate({width:'0'},"500")})
	
	$('#share li').eq(4).mouseover(function(){$('.ejectshare').stop(false, false).animate({width:'230px'},"500")})
	$('#share li').eq(4).mouseout(function(){$('.ejectshare').stop(false, false).animate({width:'0'},"500")})
	
	
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
	})
});
$(".langular_sele").click(function(e){
    $(".langular_ul").toggle();
     e.stopPropagation();
})
$(document).click(function(){
			  $(".langular_ul").hide();
			 
		});