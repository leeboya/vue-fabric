const user = {
	state:{
		userId:"",
		weichatId:""
	},
	mutations:{
		saveUserId:(state,userId)=>{
			state.userId = userId;
		}
	}
}

export default user;