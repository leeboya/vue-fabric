<template>
	<div >
		<div style="margin-left: 200px;">
			<p>注册</p>
			<p style="color: red;">{{tip}}</p>
			<label>
				昵称：<input v-model="nickName" type="text" />
				<br />
			</label>
			<label>
				手机号：<input v-model="phoneNum" type="text" />
				<br />
			</label>
			<label>
				验证码：
				<input type="text" v-model="code" />
				<input type="button" @click="getSmscode" value="获取验证码" />
				<label>{{getcodeSucc}}</label>
				<br />
			</label>
			<label>
				
				密码：<input v-model="password" type="password" />
			</label>
			<br />
			<input type="button" value="马上注册" @click="regist" />
		</div>
		
	</div>
</template>

<script>
	import {regist} from "@/api/user"
	import {getSmsCode} from "@/api/user"
	export default{
		data(){
			return {
				phoneNum:null,
				nickName:null,
				code:null,
				password:null,
				tip:null,
				getcodeSucc:null
			}
		},
		mounted(){
			
		},
		methods:{
			getSmscode:function(){
				getSmsCode({phone:this.phoneNum})
				.then((res)=>{
					if(res.status == "200"){
						this.getcodeSucc = "获取成功";
					}
//					console.log(res)
				},(err)=>{
					
				})
			},
			regist:function(){
				let _this = this;
				regist({phone:this.phoneNum,nickname:this.nickName,password:this.password,code:this.code})
				.then((res)=>{
					if(res && res.data){
						if(res.data.code == "10000"){
							_this.$store.commit('saveUserId',res.data.data)
							this.tip = "注册成功";
//							console.log(_this.$store.getters.getUserId);
							setTimeout(function(){
								_this.$router.push({path:'/'});
							},2000)
						}else if(res.data.code == "12004"){
							this.tip = "用户已经存在";
						}
					}
				},(err)=>{
//					console.log(err)
				})
			}
		}
	}
</script>

<style>
</style>