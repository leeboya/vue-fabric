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
	return axios.post("/user/info/login",params);
}

export function regist(params) {
  return axios.post('/user/info/register',params)

}
export function getSmsCode(params){
	return axios.post("/user/info/smsSend",params);
}

export function bindPhone(params){
	return axios.put("/user/info/bindPhone",params);
}
export function updateUser(params){
	return axios.put("/user/info/update",params);
}
export function getUser(params){
	return axios.get("/user/info/"+params);
}
