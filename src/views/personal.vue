<template>
	<div style="margin-left: 200px;">
		 <p>
		 	绑定手机号码
		 </p>
		 <p style="color: red;">{{tip}}</p>
		 手机号：<input v-model="phone" placeholder="请输入手机号" /><br />
		 验证码：<input v-model="code"  /><input type="button" @click="getSmsCode" value="获取验证码" /><label>{{getcodeSucc}}</label><br />
		 设置密码：<input v-model="password"  type="password" /><br />
		 <input value="绑定" type="button" @click="bindPhone" />
		 <div>
		 	<p>微信绑定</p>
		 	<input type="button"  value="微信绑定接口" />
		 	
		 </div>
		 <div>
		 	<p>更新密码</p>
		 	<p style="color: red;">{{tip}}</p>
		 	旧密码：<input v-model="pwd_old" type="password" /><br />
		 	新密码：<input v-model="newP" type="password" /><br />
		 	新密码确认：<input v-model="cnewP" type="password" /><br />
		 	名称:<input type="tel" v-model="nickname" />
		 	 <input value="密码更新" type="button" @click="changePwd" />
		 	 <input value="名称更新" type="button" @click="changeNickname" />
		 </div>
		 	<div>
		 		<p>获取用户信息</p>
		 		<input type="button" value="获取用户信息" @click="getUserInfo" /><br />
		 		手机号：{{u_phone}}<br />
		 		用户名：{{u_name}}
		 	</div>
	</div>
</template>

<script>
	import {getSmsCode,bindPhone,updateUser,getUser,getUserId} from "@/api/user";
	export default{
		data(){
			return {
				phone:null,
				code:null,
				password:null,
				newP:null,
				cnewP:null,
				pwd_old:null,
				nickname:null,
				wechat_id:'oMuuZwsGdOlmgUo2VsDHSo-zwGME',
				getcodeSucc:'',
				tip:null,
				u_phone:null,
				u_name:null
			}
		},
		mounted(){
			console.log(getUserId(this));
			//todos 获取登录用户wechatId
			console.log(document.cookie);
//			this.$store.commit('weChatId',{userId:res.data.data})
		},
		
		methods:{
			getUserInfo:function(){
				getUser(this.$store.getters.user.userId)
				.then((res)=>{
					this.u_phone = res.data.data.phone;
					this.u_name = res.data.data.nickname;
				},(err)=>{
					
				})
			},
			changeNickname:function(){
				updateUser({member_id:this.$store.getters.user.userId,nickname:this.nickname})
				.then(res=>{
					if(res.status == "200"){
						this.tip = res.data.msg
					}
//					console.log(res)
				},err=>{
					
				})
			},
			changePwd:function(){
				updateUser({member_id:this.$store.getters.user.userId,password:this.newP,pwd_old:this.pwd_old})
				.then(res=>{
					if(res.status == "200"){
						this.tip = res.data.msg
					}
//					console.log(res)
				},err=>{
					
				})
			},
			getSmsCode:function(){
				getSmsCode({phone:this.phone})
				.then((res)=>{
					if(res.status == "200"){
						this.getcodeSucc = "获取成功";
					}
				},(err)=>{
					
				})
			},
			bindPhone:function(){
				bindPhone({phone:this.phone,code:this.code,password:this.password,wechat_id:this.wechat_id})
				.then(res=>{
					if(res.status == "200"){
						this.tip = res.data.msg;
					}
				},err=>{
					
				})
			}
		}
	}
</script>

<style>
</style>