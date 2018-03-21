<template>
<div class="m-singp">
     <div class="wrap">
        <div class="search-box">
                <input type="text" class="search" placeholder="请输入">
                <span class="btn">筛选</span>
        </div>
     <div class="container"> 
        <div class="waterfall"> 
            <div class="pin" v-for="item in productList"> 
                <img :src="item.pic" > 
                <p>1 convallis timestamp</p> 
            </div> 
        
        </div> 
        </div>
    </div>
</div>
 
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4aeaf5c16002988db3fc89e3608a18ca540e806728c5c7-9I7wRn_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/5e9504beda02770814d7d3f501b3a69804e0d66d13273-5YG3rM_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/f468b05081e3bd7f92dbd0c69dab287d8c7fc1182a1f8d-Pot2uw_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/0f1ff2f20f70172a6383755951e025876fd261689f8ae-KF0mpy_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/451dd19402c8d945a5bd55c220bbf449afc2ab3e7bf56-NYBQEq_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/aad203ac19f420aa8e9a8a9b5e706fc22d866cb998301-iHLn1o_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4aeaf5c16002988db3fc89e3608a18ca540e806728c5c7-9I7wRn_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/5e9504beda02770814d7d3f501b3a69804e0d66d13273-5YG3rM_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/f468b05081e3bd7f92dbd0c69dab287d8c7fc1182a1f8d-Pot2uw_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/0f1ff2f20f70172a6383755951e025876fd261689f8ae-KF0mpy_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/451dd19402c8d945a5bd55c220bbf449afc2ab3e7bf56-NYBQEq_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/aad203ac19f420aa8e9a8a9b5e706fc22d866cb998301-iHLn1o_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        },
      ]
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.m-singp {
  background: #f5f5f5;
  .wrap {
    width: 1140px;
    padding: 48px 0;
    margin: 0 auto;
    .search-box {
      width: 652px;
      margin: 0 auto;
      overflow: hidden;
      .search {
        width: 552px;
        border-radius: 4px;
        border: #d9d9d9 1px solid;
        line-height: 20px;
        padding: 10px;
        float: left;
      }
      .btn {
        padding: 9px 16px;
        border-radius: 4px;
        background: #fff;
        border: #ccc 1px solid;
        margin-left: 10px;
        float: right;
      }
    }
    .container {
        width: 1440px;
        margin: 20px auto;
        .waterfall {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-width: 24em;
        -webkit-column-width: 24em;
        column-width: 24em;
        -moz-column-gap: 1em;
        -webkit-column-gap: 1em;
        column-gap: 1em;
        .pin {
                padding: 1em;
                margin: 0 0.125em 1em;
                -moz-page-break-inside: avoid;
                -webkit-column-break-inside: avoid;
                break-inside: avoid;
                background: white;
                -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
                -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
                img {
                width: 100%;
                padding-bottom: 1em;
                margin-bottom: 0.5em;
                border-bottom: 1px solid #cccccc;
                }
            }
        }
    }





  }
}
</style>


