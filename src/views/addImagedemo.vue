<template>
<div>
    <ul class="imgul" v-for="single in imgData">
        <li class="imgsize">
            <img :src="single.url" alt="" :data-id="single.id">
            <span @click="addImage()" :data-id="single.id">添加图片</span>
        </li>
    </ul>
</div>
  
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return{
          imgData:[
              {
                    id: '978567271493566466',
                    url: 'http://ovfllimsi.bkt.clouddn.com/a0004.jpeg'
              },
              {
                    id: '978567368457486338',
                    url: 'http://ovfllimsi.bkt.clouddn.com/all_animation_100.jpg'
              },
              {
                    id: '978567453253730306',
                    url: 'http://ovfllimsi.bkt.clouddn.com/all_animation_101.jpg'
              },
              {
                    id: '978567522833039361',
                    url: 'http://ovfllimsi.bkt.clouddn.com/all_animation_1011.jpg'
              }
          ],
          boardId: null
          
      }
  },
  created(){
      
  },
  mounted(){
      this.boardId = this.$route.query.boardId
  },
  methods:{
      addImage(){
          let _self = this;
          axios.post('/api/v1/users/boards/images',{
                boardId: _self.boardId,
                itemId : event.target.getAttribute("data-id")
            })
            .then(function(res){
                if(res.data){
                    _self.$router.push({path:'/onself'});
                }  
            })
            .catch(function(err){
                console.log(err);
        });
      }
  }
}
</script>
<style scoped>
.imgul{
    margin: 30px;
}
.imgsize{
    width:200px;
    height: 100px;
}
.imgsize img{
    width: 100%;
    height: 100%;
}
.imgsize span:hover{
    cursor: pointer;
}
</style>




