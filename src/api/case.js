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

export function del(paletteId){
	debugger
	return axios.put("/api/v1/tuku/palettes/"+paletteId);
}
export function update(paletteId,params){
	return axios.put("/api/v1/tuku/palettes/"+paletteId,params);
}

export function caseBasic(paletteId){
	return axios.get("/api/v1/tuku/palettes/palettes/"+paletteId);
}

export function casedetails(paletteId){
	return axios.get("/api/v1/tuku/palettes/caseMongoDO/"+paletteId);
}