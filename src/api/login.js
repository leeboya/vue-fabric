import axios from 'axios'

//export function sendMsg(params) {
//return Vue.http.post('/sendMessage', params)
//
// }
//
// export function getUserInfo(params) {
//return Vue.http.post('/login/miniSiteRegister', params)
//
// }
export function loginBywx(){
//	window.location.href = '/wechat/login';
	return axios.get('/wechat/login')
	
}

export function login(params){
	return axios.post("/users/login",params);
}

