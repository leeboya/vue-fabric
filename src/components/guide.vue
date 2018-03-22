<template>
  <div class="m-guide" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
      <div class="m" v-for="(item,index) in classFliy" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
          <div class="img-box">
               <img src="@/assets/img/icon1.png">
          </div>   
          <span>{{item.name}}</span>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            classFliy:[
                {
                    name:'沙发',
                    icon:'icon1'
                },
                {
                    name:'椅子',
                    icon:'icon2'
                },
                 {
                    name:'几类'
                },
                 {
                    name:'桌子'
                },
                 {
                    name:'柜子'
                },
                 {
                    name:'架类'
                },
                 {
                    name:'床'
                },
                 {
                    name:'灯具'
                },
                 {
                    name:'配饰'
                },
                 {
                    name:'挂画'
                },
                {
                    name:'花艺'
                },
                {
                    name:'布艺'
                },
                {
                    name:'地毯'
                },
                 {
                    name:'墙纸'
                },
                 {
                    name:'屏风'
                },
                 {
                    name:'户外'
                },
                 {
                    name:'生活'
                },
                 {
                    name:'硬装'
                }
            ]
        }
    }
  
}
</script>
<style rel="stylesheet/scss" lang="scss">
.m-guide{
    max-width: 1440px;
    margin:64px auto 0 auto;
    /*flex布局（作用于容器）*/
    display: flex;
    /*换行（作用于容器）*/
    flex-wrap: wrap;
    &.open {
          margin:27px auto 0 auto;
    }
    .m{
        width:100px;
        text-align: center;
        margin:0 20px 20px 20px;
        color:#677BAF;
        font-size:14px;
        margin-bottom:84px;
        &.open {
            width:80px;
            margin-bottom:33px;
        }
        .img-box {
            width:20px;
            margin: auto ;
            
            img {
                width:100%;
            }
        }
    }
}



</style>

