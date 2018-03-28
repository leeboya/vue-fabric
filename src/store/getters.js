const getters = {
    fabricObj:state=>state.fabricObj.data,
    user:state=>{
    	return state.user
   	}
//	getUserId:state=>{
//		console.log(state.user);
//		return state.user.userId;
//	},
//	weChatId:stat=>{
//		return state.user.weichatId;
//	}
  };
  
  export default getters
  