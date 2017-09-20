//register.js
import "../css/reset.css";
import "../css/common.less";
import "../css/register.less";

import { footerLoad, } from "../../utils/common";
import { getRegisterServices } from "../../services/webServices";
$( ()=>{
	footerLoad();
	register();
})

function register(){
	
	// if(name){
	// 	$(".iphone").val(name);
	// }
	// if(psw){
	// 	$(".psw").val(psw);
	// }
	$(".iphone").blur(function(){
		//1.手机号
		//获取输入的内容
		//console.log(this);
		var str = $(".iphone").val();
		var isTrue = /^1\d{10}$/.test(str);
		if(!isTrue){
			$(".tip").css("display","block");
			$(".tip").text("请输入正确的手机号：");
		}else{
			$(".tip").css("display","none");
		}
		//console.log(str);
		localStorage.setItem("keyname",str);
		//console.log(localStorage.getItem("keyname"));
	})
	$(".psw").blur(function(){
		//2.密码
		let psw = $(".psw").val();
		//console.log(psw);
		let isTrue = /^\w{6,16}$/.test(psw);
		if(!isTrue) {
			$(".tip").css("display","block");
			$(".tip").text("用户密码长度范围在6~16位之间。");
		}else{
			$(".tip").css("display","none");
		}
		//console.log(psw);
		localStorage.setItem("psw",psw);
	})
	$(".pw").blur(function(){
		//2.密码
		let pw = $(".pw").val();
		var psw = $(".psw").val();
		let isTrue = /^\w{6,16}$/.test(pw);
		if(!isTrue) {
			$(".tip").css("display","block");
			$(".tip").text("用户密码长度范围在6~16位之间。");
		}else{
			$(".tip").css("display","none");
			if( pw == psw ){
				$(".tip").css("display","none");
			}else{
				$(".tip").css("display","block");
				$(".tip").text("两次输入密码不一致");
			}
		}
	})
	$(".reg_btn").click( ()=>{
		var name = localStorage.getItem("keyname");
		var psw = localStorage.getItem("psw");
		if($(".select_checkbox").attr("checked",true)){
			getRegisterServices({status:"register",userID:name,password:psw}).then( data=>{
				console.log("===data===",data);
				if(data == 0){
					console.log("用户名重名");
				}else if( data == 2){
					console.log(数据库报错);
				}else{
					console.log("注册成功");
					window.location.href = "login.html";
				}
			})
		}
	})
}

