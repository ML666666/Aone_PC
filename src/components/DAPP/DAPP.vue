<template>
    <div class="DAppWrapper">
      <img class="LOGO" src="../../assets/DAPP/LOGO.png" height="106" width="170"/>
      <a href="https://t9.senhet.com/app/app-debug.apk" class="getAPP">
        <img src="../../assets/DAPP/ICON.png" height="28" width="26"/>
        <span>Android</span>{{language}}
      </a>
      <canvas id="QTCODE"></canvas>
  </div>
</template>

<script>
    import QRCode from 'qrcode'
    export default {
        name: "d-a-p-p",
        mounted:function () {
          var QueryURL= 'https://t9.senhet.com/app/app-debug.apk';
          var canvas = document.getElementById('QTCODE');
          QRCode.toCanvas(canvas, QueryURL, function (error) {
          });
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage.download;
          },
        }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .DAppWrapper{
      width: 1000px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    .DAppWrapper{
      width: 1000px;
      margin: 0 auto;
      transform:scale(0.85,0.85) !important;
    }
  }
.DAppWrapper{
  .LOGO{
    height:106px;
    margin: 0 auto;
    display: block;
    margin-bottom: 66px;
  }
  .getAPP{
    display: inline-block;
    /* max-width: 227px; */
    /* min-width: 180px; */
    width: auto;
    height: 40px;
    padding: 0 14px;
    border-radius: 20px;
    border: 1px solid white;
    margin: 0 auto;
    margin-bottom: 66px;
    line-height: 40px;
    cursor: pointer;
    font-size: 18px;
    /* text-align: left; */
    margin-left: 500px;
    float: left;
    transform: translateX(-50%);
    margin-right: 200px;
    img{
     display: inline-block;
     float: left;
     margin-top: 4px;
    }
    font-size:18px;
    text-align: left;
    span{
      display: inline-block;
      float: left;
      margin-right: 5px;
      margin-left: 10px;
    }
  }
  #QTCODE{
    width:300px !important;
    height:300px !important;
    margin: 0 auto;
  }
}
</style>
