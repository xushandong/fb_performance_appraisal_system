Page({

  //登录按钮默认不可点击
  isLoginButtondisabled:true,
  // colorValue:gray,
  data: {
    colorValue:"#666666",
    acount:"",
    password:""
  },
  onLoad() {},

  // 按钮点击事件
  loginAction(){
    console.log("sdasd");
    my.showToast({
      content:"登录成功",
      success: (res) => {
        
      },
    });
  },



//输入账号
  writeAccount(e){
    this.setData({
      acount: e.detail.value
    })
    this.changeColor()
  },

  writePassword(e){
    this.setData({
      password: e.detail.value
    })
    this.changeColor()
  },

  changeColor(){
       if (this.data.acount.length>0&&this.data.password.length>0) {
        this.setData({
          isLoginButtondisabled:false,
          colorValue:"#899020",
        })
      
    } else {
        this.setData({
          //登录按钮默认不可点击
          isLoginButtondisabled:true,
          colorValue:"#666666",
        })
    }
  }
});
