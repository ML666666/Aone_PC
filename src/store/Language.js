import mainPage from "./mainPage";
import ErrTipsObj from "./ErrorTips"
const state = {
  LanguageType:"chinese",
  isChinese:true,
  chinese: {
    download:"下载",
    eduMask:{
      step_1:[
        "行情",
        "鼠标点击在“行情”可以切换币种，进入了解“详细行情”",
      ],
      step_2:[
        "简体中文",
        "在这里可以切换语言噢"
      ],
      step_3:[
        "APP下载",
        "怕错过币圈新动态？快来这里扫描二维码下载APP吧。"
      ],
      step_4:[
        "点击这里可以进行“查看余额，修改个人信息，充币”等操作噢"
      ],
      step_5:[
        "知识",
        "想要学习更多区块链知识？这里有精彩文章和视频等你来"
      ],
      step_6:[
        "资讯",
        "快来这里了解币圈最新动态吧！"
      ],
      step_7:[
        "切换“BTC、LTC和ETH”,快捷下单"
      ],
      step_8:[
        "每个新用户仅有3次体验购买“2手”的机会。双击“自定义”还可以输入手数噢！",
        "手",
        "自定义"
      ],
      gotIt:"我知道了"
    },
    changeLanguage:{
      title:"选择语言",
      Sava:"保存",
    },
    mainPage: {
      TotalHand: "总手",
      Hand: "手",
    },
    introduction:{
      market_value:"市值",
      ranking:"排名",
      total_market_value_rate:"全球总市值占比",
      flow_rate:"流通率",
      turnover_rate:"换手率",
      core_algorithm:"核心算法",
      consensus_mechanism:"共识机制",
      project_start_time:"项目启动时间",
      support_purse:"支持钱包"
    },
    Login: {
      phoneTips: "请输入用户手机号",
      passWordTips: "请输入用户密码",
      registered:"注册",
      loginBtn:"登录",
      Forgot:"忘记密码",
      ChangeType:"请选择语言",
      errorTips:[
        "*用户名不能为空",
        "*手机格式错误",
        "*密码不能为空",
      ]
    },
    registered:{
      phoneTips: "请输入用户手机号",
      passWordTips: "请输入用户密码",
      loginBtn:"登录",
      MakeSurePassWord:"请确认密码",
      verificationCode:"请输入6位验证码",
      vCode:"获取验证码",
      registered:"注册",
      errorTips:[
        "确认密码与密码不一致",
        "确认密码不能为空",
        "密码不能为空",
        "手机格式错误",
        "手机不能为空"
      ]
    },
    forgetPassWord:{
      findPassWord:"找到密码",
      LoginRightNow:"马上登陆",
      retrunPage:"返回网页",
      phoneTips: "请输入用户手机号",
      verificationCode:"请输入验证码",
      vCode:"获取验证码",
      nextStep:"下一步",
      title:"忘记密码",
      errorTips:[
        "手机号不能为空",
        "手机格式错误",
        "验证码为空"
      ]
    },
    reSetPassWord:{
      findPassWord:"找到密码",
      LoginRightNow:"马上登陆",
      retrunPage:"返回网页",
      title:"重设密码",
      newPassWord:"请输入新密码",
      makeSurePassWord:"请确认新密码",
      makeSurePassWordBtn:"确认保存",
      errorTips:[
        "新密码不能为空",
        "确认密码不能为空",
        "新密码与确认密码不一致"
      ]
    },
    MainPahe:{

      Balance:"余额",
      Self_holding:"自持",
      Betting:"下单中",
      gaming:"游戏中",
      Processing_System:"系统处理中",
      hands:"手",
      Customize:"自定义",
      User:"用户",
      Buy_and_sell:"买向",
      Currency:"币种",
      Number_of_hands:"手数",
      Currency_amount:"币额",
      No_data:"暂无数据",
      Buy:"看涨",
      Sell:"看跌",
      Up:"看涨",
      Down:"看跌",
      Transaction_amount:"交易金额",
      Confirm_transaction:"确认交易",
      Confirm_buy:"确认看涨",
      Confirm_sell:"确认看跌",
      Confirm:"确认",
      BTC:"比特币",
      LTC:"以太坊",
      ETH:"莱特币",
      theTop:"今日最高",
      theDown:"今日最低"
    },
    appBar:{
      Operation_guide:"操作指引",
      TradingCenter:"游戏",
      MemberCenter:"我的",
      market:"行情",
      information:"资讯",
      education:"知识",
      Login_Register:"登录/注册",
      gerApp:'App下载'
    },
    infoPage:{
      BTC:"BTC 比特币",
      ETH:"ETH 以太坊",
      LTC:"LTC 莱特币",
      Currency:"币种",
      Price:"最新价格",
      Up:"涨",
      Down:"跌",
      Money_Marke:"币行情"
    },
    infoPageDetail:{
      BTC:"比特币",
      ETH:"以太坊",
      LTC:"莱特币",
      market:"行情",
      currency:"货币",
      the_highest:"今日最高",
      the_lowest:"今日最低",
      turnover:"成交额",
      ten_thousand:"万",
      Hundred_million:"亿",
      today:"今日",
      introduction:"介绍",
      information:"资讯",
      Volume:"成交額",
      name:"价格",
    },
    MemberCenter:{
      assets:"币资产",
      ChargeMoney:"充币",
      TakeOutTheMoney:"提币",
      PersonalInformation:{
        title:"个人信息"
      },
      TheOrderList :{
        title:"订单列表"
      },
      rechargeRecord :{
        title:"充币记录"
      },
      TakenOutRecord :{
        title:"提币记录"
      },
      MyPromotion :{
        title:"我的推广"
      },
      ChangeLanguage  :{
        title:"切换语言 "
      }
    },
    Deposit_record:{
      title:"充币",
      select:"USDT充币地址",
      Copy:"全部复制",
      to:"跳转到充币页"
    },
    Deposit_list:{
      title:"充币记录",
      month:"月",
      Deposit:"充值",
      Deposit_S:"充值成功"
    },
    Withdraw_record:{
      Mention_money:"提币成功",
      identity:"身份验证",
      MakeSure:"请验证登录密码确认本人操作",
      Btn:"确认",
      errorTips:[
        "提币金额不能少于10USDT",
        "提币金额不能大于用户余额！",
        "提币金额不能为空！",
        "提笔地址不能为空！",
      ],
      title:"提币",
      canGet:"当前可提取",
      getAll:"全部取出",
      getTo:"提取到",
      getAcount:"提取额",
      to:"跳转到提币页",
      wallet_address:"请输入钱包地址",
      minimum:"最低提取币额为10 USDT",
    },
    Withdraw_list:{
      title:"提现记录",
      month:"月",
      Not_audit:"未审核",
      Already_audit:"已审核",
      Withdrawal_audit:"提现审核中",
      Withdrawal_failure:"提现失败",
      Withdraw_S:"提现成功",
      apply_for:"提交申请",
      Review_background:"后台审核",
      got_it:" 知道了"
    },
    personInfo:{
      title:"个人信息",
      Head_portrait:"头像",
      User_name:"用户名",
      Bound_phone:"绑定手机",
      change_Password:"修改密码",
      Log_out:"退出登录",
      cancel:"取消",
      Confirm_the_exit:"确认退出",
      LogTips:"退出登录后不会删除任何数据，下次登录依然可以使用",
      save:"保存"
    },
    Switch_Head:{
      title:"添加头像",
      Select_photo:"只支持JPG、PNG、GIF，大小不超过5M建议尺寸为240X240",
      Cancel:"取消",
      Profile_photo:"头像预览",
      reSet:"重新选择"
    },
    Change_password:{
      title:"修改密码",
      Old_code:"旧密码",
      New_code:"新密码",
      Confirm_password:"确认密码",
      Confirm_change:"确认修改",
      errorTips:[
        "旧密码不能为空",
        "新密码不能为空",
        "确认密码不能为空",
        "新密码与确认密码不一致"
      ]
    },
    Order_details:{
      title:"订单详情",
      BTC:"比特币(BTC)",
      ETH:"以太坊(ETH)",
      LTC:"莱特币(LTC)",
      Buy_and_Sell:"买向",
      Buy:"看跌",
      Sell:"看涨",
      Number_of_hands:"手数",
      LOSE:"输",
      WIN:"赢",
      H:"手"
    },
    My_promotion:{
      title:"我的推广",
      Rules:"规则",
      Call_friends:"呼朋唤友来交易，轻轻松松来赚钱",
      My_teammates:"我的好友",
      Promotion_level:"推广星级",
      My_Income:"佣金",
      SumOfHand:"交易手数(手）",
      rule:[
        "1、每成功推荐一位好友，即可获得好友交易额的0.6%作为佣金",
        "2、好友每成功推荐一位好友，即可再获得二级队友交易额的0.4作为佣金",
        "3、被推荐用户注册并登录成功即算推荐成功",
        "4、被推荐用户如果识别了多个推广二维码，则只计入识别的第一个二维码",
        "5、在法律允许的范围内，A one对本规则拥有解释权。"
      ],
      My_promotional_codes:"我的推广码",
    },
    Extended_star_rule:{
      title:"推广星级规则",
      One_star_promoters:"一星推广员",
      Two_star_promoters:"二星推广员",
      Three_star_promoters:"三星推广员",
      Conditions_upgrade:"升级条件",
      Buddy_transaction:"好友交易"
    },
    Edu:{
      Video:"视频",
      article:"文章"
    },
    Interpretation:{
      Interpretation:"解读",
      news:"快讯"
    },
    information:{
      information:"资讯",
      bullish:"利多",
      bearish:"利空"
    }
  },
  upChinese: {
    download:"下载",
    eduMask:{
      step_1:[
        "行情",
        "鼠標點擊在“行情”可以切換蔽種，進入了解“詳細行情”",
      ],
      step_2:[
        "繁體中文",
        "在這裏可以切換語言噢"
      ],
      step_3:[
        "APP下載",
        "怕錯過幣圈新動態？快來這裏掃描二維碼下載APP吧。"
      ],
      step_4:[
        "點擊這裏可以進行“查看余額，修改個人信息，充幣”等操作噢"
      ],
      step_5:[
        "知識",
        "想要學習更多區塊鏈知識？這裏有精彩文章和視頻等妳來"
      ],
      step_6:[
        "資訊",
        "快來這裏了解幣圈最新動態吧！"
      ],
      step_7:[
        "切換“BTC、LTC和ETH”,快捷下單"
      ],
      step_8:[
        "每個新用戶僅有3次體驗購買“2手”的機會。雙擊“自定義”還可以輸入手數噢！",
        "手",
        "自定義"
      ],
      gotIt:"我知道了"
    },
    changeLanguage:{
      title:"選擇語言",
      Sava:"保存",
    },
    mainPage: {
      TotalHand: "總手數",
      Hand: "手",
    },
    introduction:{
      market_value:"市值",
      ranking:"排名",
      total_market_value_rate:"全球總市值占比",
      flow_rate:"流通率",
      turnover_rate:"换手率",
      core_algorithm:"核心算法",
      consensus_mechanism:"共识机制",
      project_start_time:"项目启动时间",
      support_purse:"支持钱包"
    },
    Login: {
      phoneTips: "請輸入用戶手機號",
      passWordTips: "請輸入用戶密碼",
      registered:"註冊",
      loginBtn:"登錄",
      Forgot:"忘記密碼",
      ChangeType:"請選擇語言",
      errorTips:[
        "*用護名不能為空",
        "*手机格式错误",
        "*密碼不能為空",
      ]
    },
    registered:{
      phoneTips: "請輸入用戶手機號",
      passWordTips: "請輸入用戶密碼",
      loginBtn:"登錄",
      MakeSurePassWord:"請確認密碼",
      verificationCode:"請輸入6位驗證碼",
      vCode:"獲取驗證碼",
      registered:"註冊",
      errorTips:[
        "確認密碼與密碼不壹致",
        "確認密碼不能為空",
        "密碼不能為空",
        "手機格式錯誤",
        "手機不能為空"
      ]
    },
    forgetPassWord:{
      findPassWord:"找到密碼",
      LoginRightNow:"馬上登陸",
      retrunPage:"返回網頁",
      phoneTips: "請輸入用戶手機號",
      verificationCode:"請輸入驗證碼",
      vCode:"獲取驗證碼",
      nextStep:"下壹步",
      title:"忘記密碼",
      errorTips:[
        "手機號不能為空",
        "手機格式錯誤",
        "驗證碼為空"
      ]
    },
    reSetPassWord:{
      findPassWord:"找到密碼",
      LoginRightNow:"馬上登陸",
      retrunPage:"返回網頁",
      title:"重設密碼",
      newPassWord:"請輸入新密碼",
      makeSurePassWord:"請確認新密碼",
      makeSurePassWordBtn:"確認保存",
      errorTips:[
        "新密碼不能為空",
        "確認密碼不能為空",
        "新密碼與確認密碼不壹致"
      ]
    },
    MainPahe:{
      Balance:"余額",
      Self_holding:"自持",
      Betting:"下單中",
      gaming:"遊戲中",
      Processing_System:"系統處理中",
      hands:"手",
      Customize:"自定義",
      User:"用戶",
      Buy_and_sell:"買向",
      Currency:"幣種",
      Number_of_hands:"手數",
      Currency_amount:"幣額",
      No_data:"暫無數據",
      Buy:"看漲",
      Sell:"看跌",
      Up:"看涨",
      Down:"看跌",
      Transaction_amount:"交易金額",
      Confirm_transaction:"確認交易",
      Confirm_buy:"確認看涨",
      Confirm_sell:"確認看跌",
      Confirm:"確認",
      BTC:"比特币",
      LTC:"以太坊",
      ETH:"莱特币",
      theTop:"今日最高",
      theDown:"今日最低"
    },
    appBar:{
      Operation_guide:"操作指引",
      assets:"币资产",
      TradingCenter:"遊戲",
      MemberCenter:"我的",
      market:"行情",
      information:"資訊",
      education:"知識",
      Login_Register:"登錄/註冊",
      gerApp:'App下載'
    },
    infoPage:{
      BTC:"BTC 比特幣",
      ETH:"ETH 以太坊",
      LTC:"LTC 莱特幣",
      Currency:"幣种",
      Price:"最新價格",
      Up:"涨",
      Down:"跌",
      Money_Marke:"幣行情"
    },
    infoPageDetail:{
      BTC:"比特幣",
      ETH:"以太坊",
      LTC:"莱特幣",
      market:"行情",
      currency:"貨幣",
      the_highest:"今日最高",
      the_lowest:"今日最低",
      turnover:"成交額",
      ten_thousand:"萬",
      Hundred_million:"億",
      today:"今日",
      introduction:"介紹",
      information:"資訊",
      Volume:"成交額",
      name:"價格"

    },
    MemberCenter:{
      assets:"幣資產",
      ChargeMoney:"充幣",
      TakeOutTheMoney:"提幣",
      PersonalInformation:{
        title:"個人信息"
      },
      TheOrderList :{
        title:"訂單列表"
      },
      rechargeRecord :{
        title:"充幣記錄"
      },
      TakenOutRecord :{
        title:"提幣記錄"
      },
      MyPromotion :{
        title:"我的推廣"
      },
      ChangeLanguage  :{
        title:"切換語言 "
      }
    },
    Deposit_record:{
      title:"充幣",
      select:"USDT充幣地址",
      Copy:"全部復制",
      to:"跳轉到充幣頁"
    },
    Deposit_list:{
      title:"充幣記錄",
      month:"月",
      Deposit:"充值",
      Deposit_S:"充值成功"
    },
    Withdraw_record:{
      Mention_money:"提幣成功",
      identity:"身份驗證",
      MakeSure:"請驗證登錄密碼確認本人操作",
      Btn:"確認",
      errorTips:[
        "提幣金額不能少於10USDT",
        "提幣金額不能大於用戶余額！",
        "提幣金額不能為空！",
        "提筆地址不能為空！",
      ],
      title:"提幣",
      canGet:"當前可提取",
      getAll:"全部取出",
      getTo:"提取到",
      getAcount:"提取額",
      to:"跳轉到提幣頁",
      wallet_address:"請輸入錢包地址",
      minimum:"最低提取幣額為10 USDT",
    },
    Withdraw_list:{
      title:"提現記錄",
      month:"月",
      Not_audit:"未审核",
      Already_audit:"已审核",
      Withdrawal_audit:"提現審核中",
      Withdrawal_failure:"提現失敗",
      Withdraw_S:"提現成功",
      apply_for:"提交申請",
      Review_background:"後臺審核",
      got_it:" 知道了"
    },
    personInfo:{
      title:"個人信息",
      Head_portrait:"頭像",
      User_name:"用戶名",
      Bound_phone:"綁定手機",
      change_Password:"修改密碼",
      Log_out:"退出登錄",
      cancel:"取消",
      Confirm_the_exit:"確認退出",
      LogTips:"退出登錄後不會刪除任何數據，下次登錄依然可以使用",
      save:"保存",
    },
    Switch_Head:{
      title:"添加頭像",
      Select_photo:"只支持JPG、PNG、GIF，大小不超過5M建議尺寸為240X240",
      Cancel:"取消",
      Profile_photo:"頭像預覽",
      reSet:"重新選擇"
    },
    Change_password:{
      title:"修改密碼",
      Old_code:"旧密碼",
      New_code:"新密碼",
      Confirm_password:"確認密碼",
      Confirm_change:"確認修改",
      errorTips:[
        "舊密碼不能為空",
        "新密碼不能為空",
        "確認密碼不能為空",
        "新密碼與確認密碼不壹致"
      ]
    },
    Order_details:{
      title:"訂單詳情",
      BTC:"比特幣(BTC)",
      ETH:"以太坊(ETH)",
      LTC:"莱特幣(LTC)",
      Buy_and_Sell:"買向",
      Buy:"看跌",
      Sell:"看漲",
      Number_of_hands:"手數",
      LOSE:"輸",
      WIN:"贏",
      H:"手"
    },
    My_promotion:{
      title:"我的推廣",
      Rules:"規則",
      Call_friends:"呼朋喚友來交易，輕輕松松來賺錢",
      My_teammates:"我的好友",
      Promotion_level:"推廣星級",
      My_Income:"傭金",
      SumOfHand:"交易手數(手）",
      rule:[
        "1、每成功推薦壹位好友，即可獲得好友交易額的0.6%作為傭金",
        "2、好友每成功推薦壹位好友，即可再獲得二級隊友交易額的0.4作為傭金",
        "3、被推薦用戶註冊並登錄成功即算推薦成功",
        "4、被推薦用戶如果識別了多個推廣二維碼，則只計入識別的第壹個二維碼",
        "5、在法律允許的範圍內，A one對本規則擁有解釋權"
      ],
      My_promotional_codes:"我的推廣碼",
    },
    Extended_star_rule:{
      title:"推廣星級規則",
      One_star_promoters:"壹星推廣員",
      Two_star_promoters:"二星推廣員",
      Three_star_promoters:"三星推廣員",
      Conditions_upgrade:"升級條件",
      Buddy_transaction:"好友交易"
    },
    Edu:{
      Video:"視頻",
      article:"文章"
    },
    Interpretation:{
      Interpretation:"解讀",
      news:"快訊"
    },
    information:{
      information:"資訊",
      bullish:"利多",
      bearish:"利空"
    }
  },
  English:{
    download:"download",
    eduMask:{
      step_1:[
        "market",
        "The mouse stays in the \"market\" can switch currencies and enter the \"detailed market\".",
      ],
      step_2:[
        "EN",
        "You can switch languages here"
      ],
      step_3:[
        "Download APP",
        "Fear of missing out on new developments in the coinage? Come here and scan the qr code and download the APP."
      ],
      step_4:[
        "Click here to \"check the balance, modify personal information, coin\" and other operations"
      ],
      step_5:[
        "knowledge",
        "Want to learn more about blockchain? Here's a wonderful article and video for you"
      ],
      step_6:[
        "information",
        "Come here and get the latest news about the coincircle!"
      ],
      step_7:[
        "Switch \"BTC, LTC, and ETH\" to place orders quickly"
      ],
      step_8:[
        "Each new user only has three opportunities to buy \"two hands\". Double click \"custom\" can also enter the number of hands oh!",
        "H",
        "custom"
      ],
      gotIt:"got It"
    },
    changeLanguage:{
      title:"ChangeLanguage",
      Sava:"Save",
    },
    mainPage: {
      TotalHand: "TotalHand",
      Hand: "Hand",
    },
    introduction:{
      market_value:"market value",
      ranking:"ranking",
      total_market_value_rate:"total market value rate",
      flow_rate:"flow rate",
      turnover_rate:"turnover rate",
      core_algorithm:"core algorithm",
      consensus_mechanism:"consensus mechanism",
      project_start_time:"project start time",
      support_purse:"support purse"
    },
    Login: {
      phoneTips: "Please enter your phone number",
      passWordTips: "Please enter your user password",
      registered:"Registration",
      loginBtn:"log in",
      Forgot:"Forgot password",
      ChangeType:"Please select a language",
      errorTips:[
        "*Username can not be empty",
        "*Wrong format of mobile phone",
        "*Password cannot be empty",
      ]
    },
    registered:{
      phoneTips: "Please enter your phone number",
      passWordTips: "Please enter your user password",
      loginBtn:"log in",
      MakeSurePassWord:"MakeSurePassWord",
      verificationCode:"Please enter 6 bit verification code",
      vCode:"VCode",
      registered:"register",
      errorTips:[
        "Two passwords are inconsistent",
        "Confirm password cannot be empty",
        "Password cannot be empty",
        "Malformed phone number",
        "Phone number cannot be empty"
      ]
    },
    forgetPassWord:{
      findPassWord:"Find PassWord",
      LoginRightNow:"Log in immediately",
      retrunPage:"Back page",
      phoneTips:"Please enter your phone number",
      verificationCode:"please enter verification code",
      vCode:"VCode",
      nextStep:"Next step",
      title:"forgetPassWord",
      errorTips:[
        "Phone number cannot be empty",
        "Malformed phone",
        "Verification code is empty"
      ]
    },
    reSetPassWord:{
      findPassWord:"Find PassWord",
      LoginRightNow:"Log in immediately",
      retrunPage:"Back page",
      title:"To reset your password",
      newPassWord:"Please enter a new password",
      makeSurePassWord:"Confirm New Password",
      makeSurePassWordBtn:"Confirm save",
      errorTips:[
        "New password cannot be empty",
        "Confirm password cannot be empty",
        "Two passwords are inconsistent"
      ]
    },
    MainPahe:{
      Balance:"Balance",
      Self_holding:"Self-holding",
      Betting:"Betting",
      gaming:"gaming",
      Processing_System:"Processing System",
      hands:"Hand",
      hand:"H",
      Customize:"custom",
      User:"User",
      Buy_and_sell:"direction",
      Currency:"Currency",
      Number_of_hands:"Number",
      Currency_amount:"price",
      No_data:"No data",
      Buy:"Buy",
      Sell:"Sell",
      Up:"Up",
      Down:"Down",
      Transaction_amount:"Transaction amount",
      Confirm_transaction:"Confirm transaction",
      Confirm_buy:"Confirm buy",
      Confirm_sell:"Confirm sell",
      Confirm:"Confirm",
      BTC:"BTC",
      LTC:"LTC",
      ETH:"ETH",
      theTop:"HIGHEST",
      theDown:"LOWEST"
    },
    appBar:{
      Operation_guide:"Operation guide",
      TradingCenter:"Game",
      MemberCenter:"Me",
      market:"Market",
      information:"News",
      education:"konwl",
      Login_Register:"Login/register",
      gerApp:'Download App'
    },
    infoPage:{
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      Currency:"Currency",
      Price:"Price",
      Up:"Up",
      Down:"Down",
      Money_Marke:"Money market"
    },
    infoPageDetail:{
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      market:"Market",
      currency:"Currency",
      the_highest:"HIGHEST",
      the_lowest:"LOWEST",
      turnover:"Turnover",
      ten_thousand:"tenThousand",
      Hundred_million:"hundredMillion",
      today:"Today",
      introduction:"Introduction",
      information:"Information",
      Volume:"Volume",
      name:"Price"
    },
    MemberCenter:{
      assets:"Assets",
      Currency_amount:"Currency amount",
      ChargeMoney:"Deposit",
      TakeOutTheMoney:"Withdraw",
      PersonalInformation:{
        title:"My Info"
      },
      TheOrderList :{
        title:"Order List"
      },
      rechargeRecord :{
        title:"Deposit record"
      },
      TakenOutRecord :{
        title:"Withdraw record"
      },
      MyPromotion :{
        title:"My promotion"
      },
      ChangeLanguage  :{
        title:" Switch language"
      }
    },
    Deposit_record:{
      title:"Deposit",
      select:"the USDT Deposit address",
      Copy:"Copy all",
      to:"to the Deposit page"
    },
    Deposit_list:{
      Deposit_record:"Deposit record",
      month:"month",
      Deposit:"Deposit",
      Deposit_S:"Deposit success"
    },
    Withdraw_record:{
      Mention_money:"Mention money success",
      identity:"authentication",
      MakeSure:"Please verify the login password to confirm my operation",
      Btn:"confirm",
      errorTips:[
        "The withdrawal amount shall not be less than 10USDT",
        "The withdrawal amount shall not be greater than the user balance!",
        "The withdrawal amount cannot be empty!",
        "Pen address cannot be empty!",
      ],
      title:"Withdraw",
      canGet:"Current withdrawal",
      getAll:"All withdrawal",
      getTo:"withdrawal to",
      getAcount:"Draw Money",
      to:"to the Withdraw page",
      wallet_address:"Please enter your wallet address",
      minimum:"The minimum withdrawal amount is 10 USDT"
    },
    Withdraw_list:{
      title:"Withdraw list",
      month:"mouth",
      Not_audit:"Not audit",
      Already_audit:"Already audit",
      Withdrawal_audit:"Withdrawal audit",
      Withdrawal_failure:"Withdrawal failure",
      Withdraw_S:"Withdrawal success",
      apply_for:"apply for",
      Review_background: "Review",
      got_it:" got it"
    },
    personInfo:{
      title:"My Info",
      Head_portrait:"Head portrait",
      User_name:"User name",
      Bound_phone:"Bound phone",
      change_Password:"Change Password",
      Log_out:"Log out",
      cancel:"cancel",
      Confirm_the_exit:"Confirm the exit",
      LogTips:"No data will be deleted after you log out. You can still use it next time you log in",
      save:"save",
    },
    Switch_Head:{
      title:"Add picture",
      Select_photo:"Only JPG, PNG, GIF are supported, and the recommended size of 5M is 240X240",
      Cancel:"Cancel",
      Profile_photo:"Image preview",
      reSet:"Choose Again"
    },
    Change_password:{
      title:"Change password",
      Old_code:"Old code",
      New_code:"New code",
      Confirm_password:"Confirm",
      Confirm_change:"Confirm the change",
      errorTips:[
        "The old password cannot be blank",
        "The new password cannot be blank",
        "Confirm password cannot be empty",
        "Two passwords are inconsistent"
      ]
    },
    Order_details:{
      title:"Order details",
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      Buy_and_Sell:"Buy and sell",
      Buy:"Buy",
      Sell:"Sell",
      Number_of_hands:"Number of hands",
      LOSE:"LOSE",
      WIN:"WIN",
      H:"H"
    },
    My_promotion:{
      title:"My promotion",
      Rules:"Rules",
      Call_friends:"Call friends to trade and make money with ease",
      My_teammates:"My good friend",
      Promotion_level:"Promote the star",
      My_Income:"commission",
      SumOfHand:"Number of dealers (hand)",
      rule:[
        "1. For every successful recommendation of a friend, 0.6% of the friends' turnover will be paid as commission",
        "2. For every successful recommendation of a friend, you can get 0.4 of the turnover of your second-level teammate as commission",
        "3. Successful registration and login of the recommended user is counted as successful recommendation",
        "4. If the recommended user identifies multiple promoted qr codes, only the first qr code is included",
        "5. As far as the law allows, A one has the right to interpret this rule"
      ],
      My_promotional_codes:"My promotional codes",
    },
    Extended_star_rule:{
      title:"Promotion rules",
      One_star_promoters:"One star promoters",
      Two_star_promoters:"Two star promoters",
      Three_star_promoters:"Three star promoters",
      Conditions_upgrade:"Conditions of the upgrade",
      Buddy_transaction:"Buddy transaction"
    },
    Edu:{
      Video:"Video",
      article:"Article"
    },
    Interpretation:{
      Interpretation:"Interpretation",
      news:"news"
    },
    information:{
      information:"Information",
      bullish:"bullish",
      bearish:"bearish"
    }
  },
  Japanese: {
    download:"ダウンロード",
    eduMask:{
      step_1:[
        "相場",
        "マウスは「相場」に留まり、「詳しい相場」を知ることができる。",
      ],
      step_2:[
        "日本语",
        "ここで言叶を切り替えてください。"
      ],
      step_3:[
        "Appダウンロード",
        "通貨圏の新たな動きを逃すのか?ここで二次元コードをスキャンしてアプリをダウンロードしましょう。"
      ],
      step_4:[
        "ここをクリックして「残高を確認し、個人情報を修正してください」などの操作が可能です。"
      ],
      step_5:[
        "知识",
        "もっと多くのブロックの知識を学びたいですか?ここにはすばらしい文章と映像があります。"
      ],
      step_6:[
        "资讯",
        "ここに来て人民元の最新の動きを知りましょう!"
      ],
      step_7:[
        "「btc、ltc、eth」を切り替えて、ショートカット。"
      ],
      step_8:[
        "各新規加入者は「2手」を購入する機会を3回だけ持っている。ダブル「カスタマイズ」で手数を入力してもいい!",
        "手",
        "自定義"
      ],
      gotIt:"承知しました"
    },
    changeLanguage:{
      title:"言語を選択する",
      Sava:"保存",
    },
    mainPage: {
      TotalHand: "手の数",
      Hand: "手",
    },
    introduction:{
      market_value:"時価",
      ranking:"ランキング",
      total_market_value_rate:"全世界の時価総額である",
      flow_rate:"流通率",
      turnover_rate:"為替レート",
      core_algorithm:"共通認識機構",
      consensus_mechanism:"共通認識機構",
      project_start_time:"プロジェクト開始時間",
      support_purse:"財布を支える"
    },
    Login: {
      phoneTips: "ユーザーの携帯番号を入力してください",
      passWordTips: "ユーザーのパスワードを入力してください",
      registered:"登録する",
      loginBtn:"アクセス",
      Forgot:"パスワードを忘れる",
      ChangeType:"言語を選んでください",
      errorTips:[
        "*ユーザー名は空っぽにならない",
        "*手机格式错误",
        "*パスワードは空になってはいけません",
      ]
    },
    registered:{
      phoneTips: "ユーザーの携帯番号を入力してください",
      passWordTips: "ユーザーのパスワードを入力してください",
      loginBtn:"アクセス",
      MakeSurePassWord:"パスワードを確認してください",
      verificationCode:"検証コードを入力してください",
      vCode:"検証コードを取得",
      registered:"登録する",
      errorTips:[
        "Two passwords are inconsistent",
        "パスワードの確認は空っぽではありません",
        "暗証番号が空ではない",
        "番号が間違っています",
        "携帯電話番号は空いていない"
      ]
    },
    forgetPassWord:{
      findPassWord:"パスワードを見つける",
      LoginRightNow:"すぐに上陸する",
      retrunPage:"ページに戻る",
      phoneTips: "ユーザーの携帯番号を入力してください",
      verificationCode:"検証コードを入力してください",
      vCode:"検証コード",
      nextStep:"次のステップ",
      title:"パスワードを忘れる",
      errorTips:[
        "携帯番号は空いていません",
        "携帯のフォーマットエラー",
        "検証コードが空"
      ]
    },
    reSetPassWord:{
      findPassWord:"パスワードを見つける",
      LoginRightNow:"すぐに上陸する",
      retrunPage:"ページに戻る",
      title:"パスワードを再設定する",
      newPassWord:"新しいパスワードを入力してください",
      makeSurePassWord:"新しいパスワードをご確認ください",
      makeSurePassWordBtn:"保存の確認",
      errorTips:[
        "新しいパスワードは空になってはいけません",
        "パスワードを確認することはできません",
        "新しいパスワードと確認パスワードが一致しません"
      ]
    },
    MainPahe:{
      Balance:"残高",
      Self_holding:"持っている",
      Betting:"注記中",
      gaming:"ゲーム中",
      Processing_System:"システム処理中",
      hands:"手",
      Customize:"カスタム",
      User:"ユーザー",
      Buy_and_sell:"買う",
      Currency:"貨幣種",
      Number_of_hands:"手の数",
      Currency_amount:"貨幣額",
      No_data:"データなし",
      Buy:"確認昇",
      Sell:"確認降",
      Up:"上昇",
      Down:"下落",
      Transaction_amount:"取引金額",
      Confirm_transaction:"取引を確認する",
      Confirm_buy:"確認昇",
      Confirm_sell:"確認降",
      Confirm:"確認",
      BTC:"BTC",
      LTC:"LTC",
      ETH:"ETH",
      theTop:"今日は最高",
      theDown:"今日は最低だ"
    },
    appBar:{
      Operation_guide:"操作の導き",
      TradingCenter:"ゲーム",
      MemberCenter:"私の",
      market:"相場",
      information:"情報",
      education:"知识",
      Login_Register:"ログイン/登録",
      gerApp:'Appダウンロード'
    },
    infoPage:{
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      Currency:"貨幣種",
      Price:"最新の価格",
      Up:"昇幅",
      Down:"降幅",
      Money_Marke:"ドル相場"
    },
    infoPageDetail:{
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      market:"相場",
      currency:"通貨",
      the_highest:"今日は最高",
      the_lowest:"今日は最低だ",
      turnover:"結納額",
      ten_thousand:"万",
      Hundred_million:"億",
      today:"今日",
      introduction:"項目紹介",
      information:"资讯",
      Volume:"交通量",
      name:"価格"
    },
    MemberCenter:{
      assets:"貨幣資産",
      ChargeMoney:"硬貨を充てる",
      TakeOutTheMoney:"貨幣を提げる",
      PersonalInformation:{
        title:"個人情報"
      },
      TheOrderList :{
        title:"注文リスト"
      },
      rechargeRecord :{
        title:"硬貨記録"
      },
      TakenOutRecord :{
        title:"貨幣記録"
      },
      MyPromotion :{
        title:"私の普及"
      },
      ChangeLanguage  :{
        title:"言語の切り替え "
      }
    },
    Deposit_record:{
      title:"充填する",
      select:"充電値usdtのアドレス",
      Copy:"すべてコピー",
      to:"硬貨に飛び回る"
    },
    Deposit_list:{
      title:"硬貨記録",
      month:"月",
      Deposit:"充填する",
      Deposit_S: "成功のチャージ"
    },
    Withdraw_record:{
      Mention_money:"提貨の成功",
      identity:"身分検証",
      MakeSure:"ログインパスワードは本人の操作を確認して下さい。",
      Btn:"确认",
      errorTips:[
        "ティアドルは、10 usdtを超えることはできない。",
        "支払い総額は、ユーザ残高より大きくない。！",
        "金额は空いていない!",
        "住所が空にならない!",
      ],
      title:"金貨を取り出す",
      canGet:"取り出し可能な数量です",
      getAll:"全部取り出し",
      getTo:"抽出する",
      getAcount:"抽出の額",
      to:"取り出して",
      wallet_address:"財布の住所",
      minimum:"少なくとも取り出し可能な金貨は10 usdt",
    },
    Withdraw_list:{
      title:"記録を現す",
      month:"月",
      Not_audit:"無審査",
      Already_audit:"審査を受けた",
      Withdrawal_audit:"審査中",
      Withdrawal_failure:"現金の失敗を引き出す",
      Withdraw_S:"成功する",
      apply_for:"申請を提出する",
      Review_background:"審査中",
      got_it:" 知った"
    },
    personInfo:{
      title:"個人情報",
      Head_portrait:"頭像",
      User_name:"ユーザー名",
      Bound_phone:"携帯電話",
      change_Password:"パスワードを修正する",
      Log_out:"ログインを終了する",
      cancel:"取り消す",
      Confirm_the_exit:"脱退を確認する",
      LogTips:"ログアウト後に何のデータも削除しないので、次のログインは継続して使用できます",
      save:"保存",
    },
    Switch_Head:{
      title:"写真追加",
      Select_photo:"jpg, png, gifをサポートするだけで,大きさは5 mを超えないようにすると240x240。",
      Cancel:"キャンセル",
      Profile_photo:"写真のプレビュー",
      reSet:""
    },
    Change_password:{
      title:"パスワードを修正する",
      Old_code:"古いパスワード",
      New_code:"新しいパスワード",
      Confirm_password:"パスワードを確認する",
      Confirm_change:"修正を確認する",
      errorTips:[
        "古いパスワードは空けてはいけない",
        "新しいパスワードは空になってはいけません",
        "パスワードを確認することはできません",
        "新しいパスワードと確認パスワードが一致しません"
      ]
    },
    Order_details:{
      title:"注文の詳細",
      BTC:"BTC",
      ETH:"ETH",
      LTC:"LTC",
      Buy_and_Sell:"買う",
      Buy:"下落",
      Sell:"上昇",
      Number_of_hands:"手の数",
      LOSE:"負ける",
      WIN:"勝つ",
      H:"手"
    },
    My_promotion:{
      title:"私の普及",
      Rules:"规则",
      Call_friends:"友达を呼び、取引を呼び、缓やかにお金を稼ぐ。",
      My_teammates:"私の親友",
      Promotion_level:"星級を広める",
      My_Income:"プレミアム",
      SumOfHand:"手の数(手)",
      rule:[
        "1、一人で一人の亲友を推荐することで、友达の取引额の0.6%を储けてくれる",
        "2、亲友が一人の友达を推荐することに成功して、また、二段のチームメートの取引额の0.4を手数料として得られる",
        "3、利用者に登录されて登录されて成功することは推荐成功",
        "4、推奨されたユーザは、2つのビットを複数存在することを認識した場合、識別された第1の二次元コードだけを導出する",
        "5、法律の许す范囲内で、a oneは、そのルールに解釈権を持つ"
      ],
      My_promotional_codes:"私のプロモーションコード",
    },
    Extended_star_rule:{
      title:"星のルールを広めましょう",
      One_star_promoters:"1星の普及員",
      Two_star_promoters:"2星の普及員",
      Three_star_promoters:"3星の普及員",
      Conditions_upgrade:"アップグレードの条件",
      Buddy_transaction:"親友取引"
    },
    Edu:{
      Video:"動画",
      article:"文章"
    },
    Interpretation:{
      Interpretation:"解読",
      news:"速報"
    },
    information:{
      information:"情報",
      bullish:"利が多い",
      bearish:"利が低いてい"
    }
  },
  language:this.chinese
}

const getters = {
   getLanguage:state => state.language,
   getLanguageType:state => state.LanguageType,
   getIsChinese:state => state.isChinese,
}

const mutations = {
  SetLanguage:async ({ dispatch, commit, getters }, data) => {
    if(!localStorage.getItem('language')){
        localStorage.setItem('language','English');
        state.language = state.English;
        state.LanguageType = localStorage.getItem('language');
        localStorage.setItem('languageIndex','1');
        ErrTipsObj.setErrorTips("English");
    }else{
      if(localStorage.getItem('language') == "English"){
        state.language = state.English;
        state.LanguageType = localStorage.getItem('language');
        ErrTipsObj.setErrorTips("English")
      }

      if(localStorage.getItem('language') == "chinese"){
        state.language = state.chinese;
        state.LanguageType = localStorage.getItem('language');
        ErrTipsObj.setErrorTips("chinese")
      }

      if(localStorage.getItem('language') == "upChinese"){
        state.language = state.upChinese;
        state.LanguageType = localStorage.getItem('language');
        ErrTipsObj.setErrorTips("upChinese")
      }

      if(localStorage.getItem('language') == "Japanese"){
        state.language = state.Japanese;
        state.LanguageType = localStorage.getItem('language');
        ErrTipsObj.setErrorTips("Japanese")
      }
    }
  },
  changeLanguage:async ({ dispatch, commit, getters }, data) => {

        if(data == 0){
          localStorage.setItem('language','chinese');
          localStorage.setItem('languageIndex','0');
          state.language = state.chinese;
          state.LanguageType = "chinese"
          ErrTipsObj.setErrorTips("chinese")
        }
        if(data == 1){
          localStorage.setItem('language','English');
          localStorage.setItem('languageIndex','1');
          state.language = state.English;
          state.LanguageType = "English";
          ErrTipsObj.setErrorTips("English")
        }
       if(data == 2){
         localStorage.setItem('language','upChinese');
         localStorage.setItem('languageIndex','2');
         state.language = state.upChinese;
         state.LanguageType = "upChinese";
         ErrTipsObj.setErrorTips("upChinese")
       }
       if(data == 3){
         localStorage.setItem('language','Japanese');
         localStorage.setItem('languageIndex','3');
         state.language = state.Japanese;
         state.LanguageType = "Japanese";
         ErrTipsObj.setErrorTips("Japanese")
       }
  }
}

const actions = {
  actionsSetLanguage(context,data){
    this.commit('changeLanguage',data);
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}
