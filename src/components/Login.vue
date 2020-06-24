<template>
    <div>
      <el-input v-model.trim="userName" placeholder="请输入用户名"></el-input>
      <el-input v-model.trim="userPwd" placeholder="请输入密码" v-on:keyup.13.native="loginBtn()" type="password"></el-input>
      <el-button type="primary" @click="loginBtn()">确 定</el-button>
    </div>
</template>

<script>
  import {homeLogin} from '../api/index' //登录，并获取个人账号信息
    export default {
      name: "Login",
      data(){
          return{
            userName:'',
            userPwd:'',
          }
      },
      methods:{
        async loginBtn(){
          const {userName,userPwd} = this
          const resultLogin = await homeLogin({userName,userPwd})

          if(resultLogin.status ==="0"){//登录成功

            sessionStorage.setItem("token", resultLogin.data["token"])
            sessionStorage.setItem("userName", resultLogin.data["name"])
            sessionStorage.setItem("userInfo", JSON.stringify(resultLogin.data))
            sessionStorage.setItem("websiteType", "scjg")



            const mytoken = sessionStorage.getItem("token")

            if(mytoken !='' || mytoken != null){

              this.$router.replace("/admin")
              this.$router.go(0)  //刷新 ，解决token是上一次的token的问题
              this.resetSetItem('watchStorage', 70);  //登录成功默认为首页的值70

            }


            // cookie设置
            let Base64 = require('js-base64').Base64

            this.$cookies.config(60 * 60 * 24)//全局设置过期事件
            this.$cookies.set('userName',userName)
            this.$cookies.set('userPwd',Base64.encode(userPwd))



          }else{
            this.$message.error(resultLogin["message"]);
          }




        }
      },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
