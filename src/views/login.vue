<template>
	<div >
		<div>
			<p>登录</p>
			<p style="color: red;">{{tip}}</p>
			<label>
				手机号：<input v-model="phone" type="text" />
			</label>
			<br />
			<label>
				密   码：
			<input v-model="password" type="password" />
			</label>
			<input type="button" value="登录" @click="login" />
			<br />
			<input type="button" value="微信登录" @click="loginBywx" />
		</div>
		
	</div>
</template>

<script>
	import {loginBywx,login} from "@/api/user";
	export default{
		data(){
			return {
				phone:null,
				password:null,
				tip:null
			}
		},
		mounted(){
			
		},
		methods:{
			login:function(){
				let _this = this;
				login({phone:this.phone,password:this.password})
				.then(function(res){
					if(res && res.data){
						if(res.data.code == "13001"){
							_this.tip = res.data.msg;
							_this.$store.commit('saveUserId',res.data.data);
//							console.log(_this.$store.getters.userId)
//							console.log(_this.$store.getters.user.userId)
							setTimeout(function(){
								_this.$router.push({path:'/images'});
							},2000)
						}else{
							_this.tip = res.data.msg;
						}
					}
//					console.log(res)
				},function(err){
//					console.log(err)
				})
			},
			loginBywx:function(){
				window.location.href = "http://6068ab60.ngrok.io/api/v1/user/wechat/login?redirectUrl=http://6068ab60.ngrok.io/personal";
//				loginBywx();
			}
		}
	}
</script>

<style>
</style>