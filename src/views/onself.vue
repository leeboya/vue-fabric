<template>
  <div class="onself">
      个人中心
      <p>收藏夹</p>
      <ul v-for="collection in collectionList">
            <li>{{collection.title}} =={{collection.id}} == {{collection.boardId}}
            <span class="del" :data-boardId="collection.boardId"  @click="delCollection()">删除</span> 
            <span class="chg" :data-boardId="collection.boardId" @click="chgCollection()">修改</span>
            <span v-if="collection.isShare == 0" class="chg" :data-isShare="collection.isShare"  :data-boardId="collection.boardId" @click="share()">共享</span>
            <span v-if="collection.isShare == 1" class="chg" :data-isShare="collection.isShare" :data-boardId="collection.boardId" @click="share()">不共享</span>
            <span class="chg" :data-boardId="collection.boardId" @click="detail()">详情</span>
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
                collectionList: null
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
                            _self.collectionList = response.data
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

            }
            

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
</style>


