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
	return axios.get('/api/v1/wechat/login')
	
}

export function login(params){
	return axios.post("/api/v1/user/info/login",params);
}

export function regist(params) {
  return axios.post('/api/v1/user/info/register',params)

}
export function getSmsCode(params){
	return axios.post("/api/v1/user/info/smsSend",params);
}

export function bindPhone(params){
	return axios.put("/api/v1/user/info/bindPhone",params);
}
export function updateUser(params){
	return axios.put("/api/v1/user/info/update",params);
}
export function getUser(params){
	return axios.get("/api/v1/user/info/"+params);
}