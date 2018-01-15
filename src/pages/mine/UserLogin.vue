<template>
    <div>
         <!-- 用户账号登录模块开始 -->
        <div class="content1">
            <form autocomplete="off">
                <div class="user">
                    <i></i>
                    <input type="text" name="user_name" id="user_name" placeholder="用户名/邮箱/手机号">
                    
                    <p class="tip empty" id="err_msg"><i></i>请输入用户名/邮箱/手机号</p>
                </div>
                <div class="pwd">
                    <i></i>
                    <input type="password" name="password" id="pass" placeholder="密码">
                    
                    <p class="tip"><i></i>请输入密码</p>
                </div>
                <!-- 图形验证码 -->
                <div class="verify text verifyLogin" id="vfCode">
                        <div class="yzmInput">
                            <input type="text" name="verifyCode" id="imgCode1" placeholder="验证码">
                            
                            <!-- <p class="tip empty"><i></i>请输入验证码</p>
                            <p class="tip error"><i></i>验证码错误，请重新输入</p> -->
                        </div>
                        <div class="yzmImg">
                        <a href="javascript:;" id="verify" class="change">换一张</a>
                        <a class="picture"><img src="https://mlogin.jiuxian.com/captchaimg?t=1506396551080" width="110px" height="40px" id="imgcode"></a>
                        </div>
                </div>
                <!-- 立即登录 -->
                <a class="btn" href="javascript:void(0)" id="subbtn1">立即登录</a>
                <div class="serve clearBoth">
                    <a class="regist" href="###">免费注册</a>
                    <a class="getpwd" href="###">找回密码</a>
                </div>
                <!-- 联合登录 -->
                <div class="partnerLogin">
                    <div class="title">
                        <div class="line"></div>
                        <div class="partner">合作伙伴登录</div>
                    </div>
                    <ul class="choose clearBoth">
                        <li><a href="###" class="qq"></a></li>
                        <li><a href="###" class="alipay"></a></li>
                    </ul>
                </div>
                <!--联合登录end -->
            </form>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    form{
        margin-bottom: 1em;
        display: block;
        margin-top: 0em;
    }
    /* 用户登录账号 */
    .user, .pwd, .verify, .yzmInput{
        /* height: 40px; */
        border: 1px solid #cccccc;
        border-radius: 3px;
        margin-bottom: 40px;
        position: relative;
    }
    .user i, .pwd i{
        width: 0.2rem;
        height: 0.2rem;
        display: block;
        float: left;
        margin: 10px 10px 0 10px;
    }
    .user i, .pwd i{
        background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    }
    .user i {
        background-position: 0 -34px;
    }
    .pwd i{
        background-position: -72px -34px;
    }
    input[type=text], input[type=password]{
        -webkit-appearance: none;
        box-sizing: content-box;
        border: 0;
        border-radius: 0;
        box-shadow: none;
        outline: none;
        font-family: Microsoft YaHei;
    }
    .user input, .pwd input{
        width: 70%;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .tip {
        position: absolute;
        top: 40px;
        right: 0;
        color: #de4943;
        display: none;
        /* display: block; */
    }
    .tip i{
        width: 0.15rem;
        height: 0.15rem;
        display: block;
        float: left;
        margin: 3px 5px 0 0;
        background-position: -202px -34px;
    }
    /* 图形验证 */
    .verify{
        border:none;
    }
    .yzmInput{
        width: 38%;
        float: left;
    }
    .yzmInput input {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        float: left;
        box-sizing: border-box;
        border-radius: 3px;
        padding-left: 10px;
    }
    .yzmImg{
        float: right;
    }
    .yzmImg a{
        width: auto;
        height: 0.4rem;
        line-height: 0.4rem;
        display: block;
        float: right;
        color: #626365;
    }
    /* 立即登录 */
    .btn {
        width: 100%;
        max-width: 300px;
        height: 0.34rem;
        line-height: 0.34rem;
        display: block;
        clear: both;
        margin: 30px auto;
        text-align: center;
        background: #DE4B45;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 16px;
    }
    .serve a{
        color: #666;
        text-decoration: underline;
        height: 0.2rem;
        display: block;
        float: left;
    }
    .serve .getpwd{
        float: right;
    }
    /* 联合登录 */
    .partnerLogin .title{
        width: 100%;
        height: 0.4rem;
        margin-top: 0.6rem;
        position: relative;
    }
    .title .line{
        height: 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .title .partner{
        width: 1.1rem;
        height: 0.4rem;
        background: #fff;
        position: absolute;
        top: 0;
        left: 50%;
        line-height: 0.4rem;
        margin: 0 0 0 -55px;
        text-align: center;
        color: #878686;
    }
    .choose{
        margin: 20px 0;
    }
    .choose li{
        width: 33%;
        float: left;
    }
    .choose a{
        width: 0.45rem;
        height: 0.45rem;
        display: block;
        margin-left: 30%;
        background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    }
    .choose .qq{
        background-position: -78px -99px;
    }
    .choose .alipay{
        background-position: -156px -99px;
    }
</style>