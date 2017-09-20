import baseServices,{getRegister} from "./baseServices";
let Config = require(`../config`);
let getProductServices = ()=>{
	return new Promise( (resolve,reject)=>{
		baseServices(`${Config.main_url}/getGoods.php`,"jsonp").then(data=>{
			resolve(data);
		}).catch( error=>{
			reject(error);
		})
	}) 
} 
let getRegisterServices = (data)=>{
	//console.log("1111111111111");
	return new Promise((resolve,reject) =>{
		console.log(`${Config.main_url }/userinfo.php`,data,"JSON");
		getRegister(`${Config.main_url }/userinfo.php`,data,"JSON").then( data=>{
			//console.log("aa");
			resolve(data);
		}).catch( error=>{
			reject(error);
		})
	})
}
//export default getProductServices;
export {
	getProductServices,
	getRegisterServices,
}