import axios from 'axios';
export function uploadImg(params){
	return axios.post("/api/v1/tuku/item",params);
}
