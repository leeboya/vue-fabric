<template>
	<div>
		<input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="upload"/> 
		<input value="上传图片" @click="upload" type="button" />
		<img id="img" />
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>
	import {qiniuToken,uploadToqiniu,getUrl} from "@/api/qiniu"
	import {uploadImg} from "@/api/image"
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			console.log(this.$store.getters)
			console.log(this.$store.getters.user.userId)
		},
		methods:{
			getBase64Image(dataURL) {  
			    return dataURL.split("base64,")[1];  
			},
			upload:function(e){
				let file = e.target.files[0];
//			    let param = {}; //创建form对象
			    let url = getUrl(file.name);
			    let base64;
			    let reader = new FileReader();
			    let _this = this;
			    let domain = null;
			    reader.onload=function(e){
			    	base64 = _this.getBase64Image(e.target.result);
					qiniuToken()//通过后台获取七牛云token
					.then(
						(res)=>{
							return res.data;
						},
						(err)=>{
							
						}
					).then((res)=>{
						//获取token成功后发送请求到七牛添加图片
						domain = res.domain;
						let config={
							headers:{
								'Content-Type':'multipart/form-data',
								"Authorization":"UpToken "+res.uptoken
							}
						}
						return uploadToqiniu(url,base64,config);
					},(err)=>{
						
					})
					.then((res)=>{
//						console.log(res)
//						console.log(domain);
//						console.log(_this.$store.getters.userId)
						
						//在将七牛返回的信息回传给后台
						return uploadImg({
							'imgUrl':(domain+res.data.key),
							'memberId':_this.$store.getters.user.userId,
							'imgHash':res.data.hash
						})
					},(err)=>{
						
					})
					.then((res)=>{
						console.log(res)
					},(err)=>{
						
					})
			    }
			    reader.readAsDataURL( file );
			    
			}
		}
	}
</script>

<style>
</style>