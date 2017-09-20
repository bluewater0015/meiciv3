//login.js
import "../css/common.less";
import "../css/reset.css";
import "../css/login.less";

import { getRegisterServices } from "../../services/webServices";
$(function(){
	login();
})
function login(){
	var name = localStorage.getItem("keyname");
	var psw = localStorage.getItem("psw");
	if(name){
		$(".iphones").val(name);
	}
	if(psw){
		$(".psws").val(psw);
	}

	$(".login_btn").click( ()=>{
		//var name = localStorage.getItem("keyname");
		//var psw = localStorage.getItem("psw");
		//console.log(name);
		getRegisterServices({status:"login",userID:name,password:psw}).then( (data)=>{
			console.log("---data---",data);
			if( data == 0){
				console.log("用户名不存在");
			}else if( data == 2){
				console.log("用户名密码不符！");
			}else{
				console.log("登录成功");
				window.location.href = "../index.html";
			}
		})
	})
}