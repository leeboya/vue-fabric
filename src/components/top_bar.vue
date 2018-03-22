<template>
  <div class="m-topbar">
    <div class="large" v-if="!$store.state.fabricObj.jigsawIsOpen">
         <div class="logo">LOGO</div>
          <div class="classfily">
              <span class="active">单品</span>
              <span>拼图</span>
              <span>品牌</span>
          </div>
          <div class="aside">
              <span><img src="" alt=""></span>
              <span class="user">用户名</span>
              <span class="jigsaw">拼图</span>
          </div>
    </div>
    <div v-else cass="small"></div>
  
  </div>
</template>
<script>
export default {};
</script>
<style rel="stylesheet/scss" lang="scss">
    .m-topbar{
        background: #eee;
        height: 64px;
        .large{
          position: relative;
           .classfily {
              width:464px;
              margin:0 auto;
              span{
                display: inline-block;
                padding:0 43px;
                line-height: 64px;
                position: relative;
              }
              .active{
                &:after{
                  position: absolute;
                  content:"";
                  display: inline-block;
                  border:blue 1px solid;
                  bottom:0;
                  width:25%;
                  left:42px;

                }
              }
            }
            .logo {
              position: absolute;
              height: 64px;
              line-height: 64px;
              left:0;
              padding:0 24px;
            }
            .aside {
              position: absolute;
              right:25px;
              top:0;
              margin-top:16px;
              .user {
                font-size:14px;
              }
              .jigsaw {
                margin-left:10px;
                display: inline-block;
                background: #d8d8d8;
                border-radius: 65px;
                padding:4px 40px;
                opacity: .85;
              }
            }
        }
        .small {
          height: 64px;
          background: #F2F2F3;
        }
       
    }
</style>


