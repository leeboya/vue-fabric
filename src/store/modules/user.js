const user = {
	state:{
		data:{
			
		},
		userId:"",
		weichatId:""
	},
	mutations:{
		saveUserId:function(state,user){
			state.userId = user.userId;
		}
	}
}

export default user;