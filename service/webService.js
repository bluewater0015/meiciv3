import baseService from "./baseService";
let Config = require(`../config`);
let getProductService = () =>{
	return new Promise((resolve,reject)=>{
		baseService(`${Config.main_url}/shopdata/getGoods.php`,"jsonp").then(res=>{
			resolve(res);
		}).catch(error=>{
			reject(error);
		})
	})
}
let postProductService = () => {

}

export {
	getProductService,
	postProductService
}