const getters = {
    fabricObj:state=>state.fabricObj.data,
	getUserId:state=>{
		return state.user.userId;
	},
	weChatId:stat=>{
		return state.user.weichatId;
	}
  };
  
  export default getters
  