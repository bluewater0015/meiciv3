//recent.js
import "./css/common.less";
import "./css/reset.css";
import "./css/recent.less";
import { getProductServices } from "../services/webServices";
import { topLoad,headerLoad,footerLoad,logoNavLoad,goodListLoad } from "../utils/common.js";

$( ()=>{
	topLoad();
	headerLoad();
	logoNavLoad();
	scrollTop();
	footerLoad();;
	goodListLoad();
})
function scrollTop(){
	var top = $("#recent_page").offset().top;
	console.log(top);
	$(window).scroll( ()=>{
		var scrollTop = $(document).scrollTop();

	 	if(scrollTop > top){
	 		$("#top").fadeIn();
	 	}else{
	 		$("#top").fadeOut();
	 	}
	})
	// var top = $("#recent_page").offset().top;
	// $(window).on('scroll',()=>{
		
	// 	var scrollTop = $(document).scrollTop();

	//  	if(scrollTop > top){
	//  		$("#top").fadeIn();
	//  	}else{
	//  		$("#top").fadeOut();
	//  	}
	// })
}

