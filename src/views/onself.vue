<template>
  <div class="onself">
      个人中心
      <p>收藏夹</p>
      <p v-for="collection in collectionList">
          <span>{{collection.title}}</span>
      </p>
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
                var name=prompt("输入名称");
                if(name){
                    axios.post('/boards',{
                            title: name
                        })
                        .then(function(res){
                            if(res.status == '200'){
                                alert('添加成功')
                                _self.getCollection();
                            }
                        })
                        .catch(function(err){
                            console.log(err);
                    });
                }
            },
            

        }
    
    }
</script>


