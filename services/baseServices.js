
let get = (url,dataType) =>{
	return new Promise( (resolve,reject)=>{
		$.ajax({
			url,
			type: "get",
			dataType,
			success: (data)=>{
				resolve(data);
			},
			fail : (e)=>{
				console.log(e);
			}
		})
	})
}

let getJson = (url) => {
	return new Promise( (resolve,reject) =>{
		$.get(url,(data) => {
			resolve(data);
		})
	})
}

let post = (url,dataType) =>{
	return new Promise( (resolve,reject) =>{
		$.ajax({
			url,
			type: "get",
			dataType,
			success: (data)=>{
				resolve(data);
			},
			fail : (e)=>{
				reject(e);
			}
		})
	})
}
let getRegister = (url,data,dataType) =>{
	return new Promise( (resolve,reject) =>{
		$.ajax({
			url,
			type: "GET",
			dataType,
			data,
			success: (data)=>{
				console.log(data);
				resolve(data);
			},
			fail: (e)=>{
				reject(e);
			}
		})
	})
}
export default get;
export {
	get,
	post,
	getJson,
	getRegister,
}