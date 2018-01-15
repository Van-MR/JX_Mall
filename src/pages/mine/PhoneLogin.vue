<template>
    <div>
         <!-- 用户账号登录模块开始 -->
        <div class="content2">
            	<form autocomplete="off">
	                <div class="tel">
	                    <i></i>
	                    <input type="text" id="iphone" placeholder="请输入手机号码">
	                    
	                    <!-- <p class="tip error" id="mob_msg"><i></i>请输入手机号</p> -->
	                        <p class="tip empty"><i></i>请输入手机号</p>
	                        <p class="tip error"><i></i>请输入正确的手机号</p>
	                </div>
                    <!--  图形验证码 -->
	                 <div class="verify text verifyLogin clearBoth" style="height:42px;overflow:hidden;" id="vfCode2">
	                        <div class="yzmInput">
	                            <input type="text" name="verifyCode" id="imgCode2" placeholder="请输入验证码">
	                            
	                            <!-- <p class="tip empty"><i></i>请输入验证码</p>
	                            <p class="tip error"><i></i>验证码错误，请重新输入</p> -->
	                        </div>
	                        <div class="yzmImg">
	                           <a href="javascript:;" id="mobverify" class="change">换一张</a>
	                           <a class="picture"><img src="https://mlogin.jiuxian.com/captchaimg?t=1506407149171" width="110px" height="40px" id="mobimgcode"></a>
	                        </div>
	                 </div>
	                <div class="identify">
	                    <input type="text" id="security_code" placeholder="请输入校验码">
	                    
	                    <!-- <p class="tip2"><i></i>请输入校验码</p> -->
	                </div>
	                <div class="hqyzm">
	                    <a class="yzm off" href="javascript:;" id="yanzhenma">获取校验码</a>
	                    <!-- <a class="yzmTime" href="javascript:;"><i>59</i>秒后重新获取</a> -->
	                </div>
	                <a class="btn" href="#" id="subbtn2">立即登录</a>
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
    /* 用户手机登录账号 */
    .tel,.yzmInput, .verify{
        /* height: 40px; */
        border: 1px solid #cccccc;
        border-radius: 3px;
        margin-bottom: 40px;
        position: relative;
    }
    .tel i{
        width: 0.2rem;
        height: 0.2rem;
        display: block;
        float: left;
        margin: 10px 10px 0 10px;
    }
    .tel i{
        background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png) no-repeat;
    }
    .tel i {
        background-position: -138px -34px;
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
    .tel input{
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
    /* 校验码 */
    .identify {
        height: 0.4rem;
        width: 40%;
        border-radius: 3px;
        margin-bottom: 38px;
        position: relative;
        display: inline-block;
        float: left;
    }
    .identify input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        float: left;
        border: 1px solid #cccccc;
        border-radius: 3px;
        padding-left: 15px;
    }
    .hqyzm{
        display: inline-block;
        float: right;
    }
    .yzm{
        background: #df3832;
        width: auto;
        line-height: 0.4rem;
        float: right;
        border-radius: 5px;
        color: #fff;
        padding: 0 15px;
    }
</style>