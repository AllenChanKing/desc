$(window).load(function() {
    $('#loader').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
});

$(function(){
	//js获取并且设置屏幕高度
	$(".full-screen")
	.height($(window).height())
	.css({display:"block"});
	// 点击返回顶部按钮返回顶部
	$("aside li.back2top").on("click",function(){
		$("html,body").animate({scrollTop:0},500);
	});

	// 重新加载页面返回顶部
	$("html,body").animate({scrollTop:0});

	//分类数组
	var secTop = new Array();
	$(".container section").each(function(index) {
	    secTop.push($(this).offset().top);            
	});

	// 点击向下箭头跳转到第一页（基本信息页）
	$(".scroll-down").on("click",function(){
		$("html,body").animate({scrollTop:secTop[0]},500);
	});

	// 头部距离顶端高度
	var headerTop=$("header").offset().top;

	//监听页面滚动，实现面包屑导航
	$(window).scroll(function(){    
	    var winScrollTop = $(window).scrollTop();

	    //切换导航
	    if(winScrollTop >= secTop[secTop.length-1]){         
	        $("nav a").removeClass("act");
	        $("nav a").eq(secTop.length-1).addClass("act");
	    }else if(winScrollTop < secTop[0]){
	        $("nav a").removeClass("act");
	    }else{
	        for(i = 0 ; i < secTop.length-1 ; i++){
	            if(winScrollTop >= secTop[i] && winScrollTop < secTop[i+1]){
	                $("nav a").removeClass("act");
	                $("nav a").eq(i).addClass("act");              
	            }   
	        }   
	    }
	});

	//滚动到对应专区
	$('nav a').on("click",function(){
		var $cur=$(this);
		var index=$(this).index();
		var scrollHeight = $(".container section").eq(index).offset().top;
	    $("html,body").animate({scrollTop:scrollHeight});
	});


});


$(window).scroll(function(){
    if(!$(".container #basic_info").attr("class") || $(".container #basic_info").attr("class").indexOf('animated')==-1){
        if(document.getElementById("basic_info").getBoundingClientRect().top<=$(window).height()){
            var i=0;
            $(".container #basic_info").addClass("animated");
        }
    }
});