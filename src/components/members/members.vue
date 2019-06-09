<template>
    <div class="membersWaper">
      <div class="membersLeftBar">
        <div class="membersLeftBarTop">

          <img v-if="user.head_img" :src="user.head_img" height="40" width="40"/>
          <img v-else src="../../assets/member/header_3.png" height="40" width="40"/>

          <p v-if="user.nickname" class="userName">
            {{user.nickname}}
          </p>
          <p v-else class="userName">
            {{user.username}}
          </p>


          <p class="money">{{language.MemberCenter.assets}}：{{user.balance}}USDT</p>
        </div>
        <div class="membersLeftBarBottom">

          <router-link tag="div" :to="{name:'userDetail'}">
            <div  v-bind:class="{ 'active': $route.name == 'userDetail' }" class="membersLeftBarItem">
              {{language.MemberCenter.PersonalInformation.title}}
            </div>
          </router-link>

          <router-link  tag="div" :to="{name:'myPromotion'}">
          <div  v-bind:class="{ 'active': $route.name == 'myPromotion' }" class="membersLeftBarItem">
            {{language.MemberCenter.MyPromotion.title}}
          </div>
          </router-link>

          <router-link  tag="div" :to="{name:'TopUp'}">
          <div  v-bind:class="{ 'active': $route.name == 'TopUp' }" class="membersLeftBarItem">
            {{language.MemberCenter.ChargeMoney}}
          </div>
          </router-link>

          <router-link  tag="div" :to="{name:'withDraWal'}">
          <div  v-bind:class="{ 'active': $route.name == 'withDraWal' }" class="membersLeftBarItem">
            {{language.MemberCenter.TakeOutTheMoney}}
          </div>
          </router-link>

          <router-link  tag="div" :to="{name:'OrderList'}">
          <div v-bind:class="{ 'active': $route.name == 'OrderList' }" class="membersLeftBarItem">
            {{language.MemberCenter.TheOrderList.title}}
          </div>
          </router-link>

          <router-link  tag="div" :to="{name:'topUpList'}">
          <div  v-bind:class="{ 'active': $route.name == 'topUpList' }" class="membersLeftBarItem">
            {{language.MemberCenter.rechargeRecord.title}}
          </div>
          </router-link>

          <router-link  tag="div" :to="{name:'withDrawalList'}">
          <div v-bind:class="{ 'active': $route.name == 'withDrawalList' }" style="border: none" class="membersLeftBarItem">
            {{language.MemberCenter.TakenOutRecord.title}}
          </div>
          </router-link>
        </div>
      </div>
      <div class="memberRightWapper">
        <transition name="vux-pop-nor"  mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
    export default {
        name: "members",
        data:function () {
          return{
            user:JSON.parse(localStorage.getItem('game_2_UserData')),
          }
        },
        watch:{
          isUserDataChange:function (val,oldval) {
            this.user=JSON.parse(localStorage.getItem('game_2_UserData'))
          }
        },
       computed:{
        language:function () {
          return this.$store.getters.getLanguage
        },
        userDetial:function () {
          return JSON.parse(localStorage.getItem('game_2_UserData'))
        },
         isUserDataChange:function () {
           return this.$store.getters.isUserDataChange
         }
       },
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .membersWaper{

    }
  }
  @media screen and (max-width: 1700px) {
    .membersWaper{
      transform:scale(0.85,0.85) translateY(-58px) !important;
    }
  }
  .membersWaper{
    width: 1250px;
    margin: 0 auto;
    .membersLeftBar{
      width: 320px;
      float: left;
      .membersLeftBarTop{
        width:320px;
        height:186px;
        background:rgba(23,30,38,1);
        margin-bottom: 20px;
        img{
          width:68px;
          height:68px;
          margin-top: 24px;
          border-radius: 50%;
        }
        .userName{
          font-size:16px;
          text-align: center;
          margin-top: 16px;
        }
        .money{
          font-size:16px;
          margin-top: 16px;
        }
      }
      .membersLeftBarBottom{
        width:320px;
        height:494px;
        background:rgba(23,30,38,1);
        .membersLeftBarItem{
          height: 70.5px;
          line-height: 70.5px;
          padding-left: 24px;
          font-size: 16px;
          text-align: left;
          border-bottom:1px solid rgba(151,151,151,0.3);
          cursor: pointer;
          transition: 0.3s;
        }
        .active{
          background: RGBA(26, 121, 255, 1);
        }
        .membersLeftBarItem:hover{
          background: RGBA(26, 121, 255, 1);
          border-bottom: 1px solid RGBA(26, 121, 255, 1);
        }
      }
    }
    .memberRightWapper{
      width: 880px;
      float: left;
      margin-left: 50px;
    }
  }
  .membersWaper:after{
    display: block;
    clear: both;
    content: " ";
    height: 0px;
  }
</style>
