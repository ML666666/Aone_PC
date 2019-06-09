<template>
  <div>
    <div v-if="getOrderList.length" class="withDrawaListWrapper">
      <vue-scroll>
      <template v-for="(v,index) in getOrderList">
       <div :class="{'borderNone': index+1 == getOrderList.length}" class="listBlock">
        <div class="data">{{v.time}}</div>
         <template v-for="k in v.array">
        <div class="item">
          <img src="../../../assets/member/withDrawa.png" height="40" width="40"/>
          <div class="listDetail">
            <span>USDT</span>
            <span>{{k.cdate}}</span>
          </div>
          <div class="money">
            {{k.deposit | Fixed}}USDT
          </div>
          <div class="isSuccsee">
            <template v-if="k.audit_state == 0">
             {{language.Not_audit}}
            </template>
            <template v-if="k.audit_state == 1">
              {{language.Already_audit}}
            </template>
            <template v-if="k.audit_state == -1">
              {{language.Withdrawal_failure}}
            </template>
            <template v-if="k.audit_state == 2">
              {{language.Withdraw_S}}
            </template>
          </div>
        </div>
         </template>
      </div>
      </template>
      </vue-scroll>
    </div>
    <nothing v-else></nothing>
  </div>

</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from '../../../store/config'
  import nothing from '../../AppCommon/Nothing'
    export default {
        name: "with-drawal-list",
        components:{
          nothing
        },
        data:function () {
          return{
            getOrderList:[]
          }
        },
       filters:{
         Fixed:function (val) {
           return (val-0).toFixed(2)
         }
       },
       computed:{
         language:function () {
           return this.$store.getters.getLanguage.Withdraw_list
         },
       },
        mounted:function () {
          var obj = {
            userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
          }
          var _this = this;
          var newObj = gob.getSign(obj);
          axios.post(gob.apiUrl+'/Api/Member/depositLog',qs.stringify(newObj)).then(function (res) {
            if(gob.isOutLogin(res)){
              if(res.data.re){
                let s = new Set();
                for(var i = 0; i<res.data.re.length; i++){
                  res.data.re[i].cdate = res.data.re[i].cdate.substring(0,res.data.re[i].cdate.indexOf(" "));
                  s.add(res.data.re[i].cdate);
                }
                var num = [...s];
                for(var w = 0; w<num.length;w++){
                  var obj = {
                    time:null,
                    array:[]
                  };
                  obj.time = num[w];
                  for(var k = 0; k<res.data.re.length; k++){
                    if(res.data.re[k].cdate == num[w]){
                      obj.array.push(res.data.re[k])
                    }
                  }
                  _this.getOrderList.push(obj);
                }
              }else{
                _this.getOrderList.length = 0;
              }
            }
          })
        }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .withDrawaListWrapper{
      height: 700px;
    }
  }

  @media screen and (max-width: 1700px) {
    .withDrawaListWrapper{
      height: 700px;
    }
  }

  .withDrawaListWrapper{
    .borderNone{
      border: none !important;
    }
    .listBlock{
      width:880px;
      background:rgba(23,30,38,1);
      padding-top: 30px;
      border-bottom:10px solid rgba(151,151,151,0.4);
      .data{
        font-size: 16px;
        margin-left: 24px;
        text-align: left;
      }
      .item:last-child{
        border-color:transparent;
      }
      .item{
        width:880px;
        height:94px;
        border-bottom:1px solid rgba(255,255,255,0.2);
        padding-top: 24px;
        padding-left: 56px;
        position: relative;
        img{
          display: block;
          width: 40px;
          height: 40px;
          float: left;
        }
        .listDetail{
          width: 73px;
          height: 40px;
          float: left;
          font-size: 14px;
          text-align: left;
          margin-left: 12px;
          span{
            width: 73px;
            display: block;
            margin-bottom: 5px;
          }
          span:last-child{
            font-size: 12px;
          }
        }
        .isSuccsee{
          font-size: 14px;
          color: RGBA(74, 144, 226, 1);
          float: right;
          line-height: 40px;
          margin-right: 24px;
        }
        .money{
          position: absolute;
          font-size: 14px;
          top: 47px;
          left: 440px;
          transform: translate(-50%,-50%);
        }
      }
    }
  }
</style>
