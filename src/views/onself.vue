<template>
  <div class="onself">
      个人中心
      <p>收藏夹</p>
      <ul v-for="(collection, index) in collectionList">
            <li>
                {{collection.title}}
                <div class="cover" @click="alertModel()" v-bind:style="{}">
                    <!-- <span class="cover-button" @click="setCover()">设为封面</span> -->
                </div>
                <div class="sm-img-icon">
                    <div class="img-icon"  v-for="img in collection.boardImg"
                    v-bind:style="{ backgroundImage: 'url('+img.imgUrl+')'}">
                        <span class="cover-button-set" @click="setCover()" :data-imageId="img.itemId" :data-boardId="collection.boardId">设为封面</span>

                    </div>
                </div>

            <span class="del" :data-boardId="collection.boardId"  @click="delCollection()">删除</span> 
            <span class="chg" :data-boardId="collection.boardId" @click="chgCollection()">修改</span>
            <span v-if="collection.isShare == 0" class="chg" :data-isShare="collection.isShare"  :data-boardId="collection.boardId" @click="share()">共享</span>
            <span v-if="collection.isShare == 1" class="chg" :data-isShare="collection.isShare" :data-boardId="collection.boardId" @click="share()">不共享</span>
            <span class="chg" :data-boardId="collection.boardId" @click="detail()">详情</span>
            <span class="chg" :data-boardId="collection.boardId" @click="toAddImg()">添加图片</span>
            </li>
      </ul>
      <button @click="newCollection()">添加收藏夹</button>
  </div>
</template>
<script>
import axios from 'axios';
    export default {
        data(){
            return {
                collectionList: null,
                tempData: null,
                boardImg:[]
            }
        },
        created(){
            this.getCollection();
        },
        mounted(){

        },
        methods:{
            // 查找所有画板接口
            getCollection(){
                let _self = this; 
                axios.get('/boards')
                        .then(function(response){
                            // _self.collectionList = response.data;
                            _self.tempData = response.data;
                            _self.tempData.forEach((element, index) => {
                                _self.getImg(element.boardId, index)
                            });

                        })
                        .catch(function(err){
                            console.log(err);
                        });
            },
            //添加收藏夹
            newCollection(){
                let _self = this; 
                var name=prompt("输入名称");
                if(name){
                    axios.post('/boards',{
                            title: name
                        })
                        .then(function(res){
                            if(res.status == '200'){
                                // alert('添加成功')
                                _self.getCollection();
                            }
                        })
                        .catch(function(err){
                            console.log(err);
                    });
                }
            },
            //删除收藏夹
            delCollection(){
                axios.put(`/boards/${event.target.getAttribute("data-boardId")}`,{   
                    })
                    .then(function(res){
                        if(!res.data){
                            alert('删除失败')
                        }
                        alert('删除成功')
                    })
                    .catch(function(err){
                        
                    })
            },
            //修改收藏夹
            chgCollection(){
                let _self = this;
                var title=prompt("修改标题");
                var description=prompt("description");
                axios.put('/boards',{
                        boardId : event.target.getAttribute("data-boardId"),
                        title : title,
                        description: ''
                    })
                    .then(function(res){
                        if(!res.data){
                            _self.getCollection();
                        }
                    })
                    .catch(function(err){
                        
                    })
            },
            //共享 不共享
            share(){
                let _self = this;
                if(event.target.getAttribute("data-isShare") == 0){
                    axios.put(`/boards/shared/${event.target.getAttribute("data-boardId")}`,{
                    })
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(err){
                        
                    })
                }else{
                    axios.put(`/boards/unshared/${event.target.getAttribute("data-boardId")}`,{
                        
                    })
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(err){
                        
                    })
                }
                
            },
            //收藏夹详情
            detail(){
                let _self = this; 
                axios.get(`/boards/${event.target.getAttribute("data-boardId")}`)
                        .then(function(res){
                            if(res.status == 200){
                                alert(res.data.title + '=' + res.data.description)
                            }
                        })
                        .catch(function(err){
                            console.log(err);
                        });

            },
            //添加图片 /boards/images
            addImg(){
                axios.post('/boards/images',{
                        title: name
                    })
                    .then(function(res){
                        if(res.status == '200'){
                            // alert('添加成功')
                            _self.getCollection();
                        }
                    })
                    .catch(function(err){
                        console.log(err);
                });
            },
            //获取图片 /boards/images/${board_id}
            getImg(boardId, index){
                let _self = this;
                axios.get(`/boards/images/${boardId}`)
                        .then(function(res){
                            _self.boardImg[index] = res.data
                            _self.tempData[index].boardImg = res.data;
                            _self.collectionList = _self.tempData;
                            _self.collectionList[index].boardImg.forEach(element=>{
                                console.log(index +'==='+element.imgUrl)
                            })
                        })
                        .catch(function(err){
                            console.log(err);
                        });
            },
            // Object.defineProperty()
            //设置为封面 /boards/images/is_primary
            setCover(){
                let confirmboolean = confirm('确定添加为封面');
                if(confirmboolean){
                    axios.put('/boards/images/isPrimary',{
                        boardId: event.target.getAttribute("data-boardId"),
                        imageId: event.target.getAttribute("data-imageId")
                    })
                    .then(function(res){
                        console.log(res.data)
                        if(res.data){
                            alert('设置封面成功')
                        }
                    })
                    .catch(function(err){
                        console.log(err)
                    })
                }
                
            },
            toAddImg(){
                console.log(event.target.getAttribute("data-boardId"))
                this.$router.push({path:'/addImage',params:{boardId:1}});//类似post传参
            },


        }
    
    }
</script>
<style lang="scss" scoped>
.del{
    cursor: pointer;
    &:hover{
        color: blue;
        background: #f0f;
    }
}
.chg{
    cursor: pointer;
    &:hover{
        color:#fff;
        background: red;
    }
}
.cover{
    background: url(http://iph.href.lu/200x250) no-repeat 100%;
    width:200px;
    height: 200px;
    position: relative;
    &:hover{
        cursor: pointer;
    }
    .cover-button{
        display: inline-block;
        position: absolute;
        bottom: 4px;
        right: 4px;
        background: #ccc;
        &:hover{
            background: dodgerblue;
        }
    }
}
.sm-img-icon{
    display: flex;
    .img-icon{
        position: relative;
        background-size: cover;
        width:50px;
        height: 50px;
    }
    .cover-button-set{
        font-size: 12px;
        color: deeppink;
        // display: none;
        &:hover{
            cursor: pointer;
            // display: inline-block;
        }
    }
}
</style>


