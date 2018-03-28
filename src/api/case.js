import axios from 'axios'

export function create(params){
	return axios.post("/api/v1/tuku/palettes/palette",params);
}
export function list(memberId){
	return axios.get("/api/v1/tuku/palettes/"+memberId+"/palette");
}
export function save(params){
	return axios.post("/api/v1/tuku/palettes/save",params);
}


