//index.js
import "./css/reset.css";
import "./css/common.less";
require('./css/index.less');
import { topLoad,headerLoad,logoNavLoad,specialLoad,specialTopLoad,footerLoad } from "../utils/common.js";
$(function(){
	topLoad();
	logoNavLoad();
	scrollTop();
	banner();
	headerLoad();
	specialLoad();
	navMoveEvent();
	specialTopLoad();
	footerLoad();
	movebanner();
})
function scrollTop(){
	var top = $("#banner").offset().top;
	console.log(top);
	$(window).scroll( ()=>{
		var scrollTop = $(document).scrollTop();

	 	if(scrollTop > top){
	 		$("#top").fadeIn();
	 	}else{
	 		$("#top").fadeOut();
	 	}
	})
	// $(window).on('scroll',()=>{
	// 	var top = $("#banner").offset().top;
	// 	var scrollTop = $(document).scrollTop();

	//  	if(scrollTop > top){
	//  		$("#top").fadeIn();
	//  	}else{
	//  		$("#top").fadeOut();
	//  	}
	// })
}
function navMoveEvent(){
	$(".follow_us").mouseenter(function(){
		console.log($(".follow_us"));
		$(".follow_menu").show();
	}).mouseleave(()=>{
		$(".follow_menu").hide();
	})
}

function banner(){
	var timer1 = setInterval(function(){
			i++;
			move();
		},2000);
	var oBanner = $(".banner_ul");
	var imgList = $(".banner_ul li");
	var btn = $(".btn");
	var btnList = $(".btn li");

	//复制第一张图片到最后
	imgList.first().clone().appendTo(oBanner);
	var size = $(".banner_ul li").length;
	var i = 0;//记录图片的下标
	//移动的函数
	//alert(1);
	function move(){
		//如果i小于0(左边界)
		
		if(i <= -1){
			i = size -2;
			oBanner.css("left", -(size-1) * 960);
		}
		if( i == size ){
			i = 1;
			oBanner.css("left",0);
		}
		//移动到第i张图片
		oBanner.stop().animate({left:-i * 960},1000);
		//改变btn的按钮状态
		btnList.eq(i).removeClass().addClass("active").siblings().removeClass("active");
		if(i == size -1 ){
			btnList.eq(0).removeClass().addClass("active").siblings().removeClass("active");
		}
	}
	//上一页
	$(".preBtn").click( ()=>{
		i--;
		move();
	})
	//下一页
	$(".nextBtn").click( ()=>{
		i++;
		move();
	})
	//btnList 按钮
	btnList.hover(function(){
		var index = $(this).index();
		//console.log(index);
		i = index;
		move();
	})
	//移入、移出banner
	
	$(".banner").hover(function(){
		clearInterval(timer1);
	},function(){
		timer1 = setInterval(function(){
			i++;
			move();
		},2000)
	})
}

/*select_ul*/
function movebanner(){
	var select = $(".select_ul");
	var selectList = $(".select_ul li");
	var size = $(".select_ul li").length;
	var i = 0;
	selectList.eq(0).clone().appendTo(select);
	selectList.eq(1).clone().appendTo(select);
	selectList.eq(2).clone().appendTo(select);
	selectList.eq(3).clone().appendTo(select);
	selectList.eq(4).clone().appendTo(select);
	//console.log("selectList:" + $(".select_ul li").length);
	var timer = setInterval( ()=>{
	 	i++;
	 	move();
	 },2000)
	function move(){
	 	//如果i小于0(左边界)
		if(i <= -1){
			i = size -10;
			select.css("left", -(size-1) * 186);
		}
		if( i > 10 ){
			i = 1;
			select.css("left",0);
		}
	 	select.stop().animate({left: -i*186},1000);
	}
	//上一页
	$(".select_left").click( ()=>{
		i--;
		move();
	})
	//下一页
	$(".select_right").click( ()=>{
		i++;
		move();
	})
	$(".select_bottom").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			i++;
			move();
		},2000)
	})
}



