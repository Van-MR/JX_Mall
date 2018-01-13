

$("#btn1").click(function(e){
   
    e.preventDefault();
   
    var n = $("#uname").val();
    var p = $("#upwd").val();
   
  
    var unameReg = /^[a-zA-Z0-9]{3,8}$/;

    var upwdReg = /^[a-zA-Z0-9]{3,8}$/;
    if(!unameReg.test(n)){
        alert("用户名格式不正确 ");
        return;
    }
    if(!upwdReg.test(p)){
        alert("密码格式不正确 ");
        return;
    }

    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success:function(data){
         if(data.code>0){
           
             sessionStorage.setItem("uname",n);
             sessionStorage.setItem("uid",data.uid);
           
             location.href = "http://localhost/xm/JX_index.html?";
         }else{
             alert(data.msg);
         }
        },
        error:function(data){
            alert("您的网络出现故障，请检查");
        }
    });
   
});


