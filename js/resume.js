$(window).load(function() {
    $('#loader').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
});

$(function(){
	// 点击返回顶部按钮返回顶部
	$("aside li.back2top").on("click",function(){
		$("html,body").animate({scrollTop:0},500);
	});

	// 重新加载页面返回顶部
	$("html,body").animate({scrollTop:0});

	//js获取并且设置屏幕高度
	$(".full-screen").height($(window).height());

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


// $(window).scroll(function(){
//     if(!$(".historybox #historyboxul").attr("class") || $(".historybox #historyboxul").attr("class").indexOf('animated')==-1){
//         if(document.getElementById("historyboxul").getBoundingClientRect().top<=$(window).height()){
//             var i=0;
//             $(".historybox #historyboxul").addClass("animated");
//             var interval=setInterval(function(){
//                 $("div.historybox li.wow").removeClass("act");
//                 var index=i%6;
//                 $("div.historybox li.wow").eq(index).addClass("act");
//                 if(i>=6){
//                     $("div.historybox li.wow").removeClass("act");
//                     clearInterval(interval);
//                     i=0;
//                 }
//                 i++;
//             },1600);
//         }
//     }
// });