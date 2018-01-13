<?php
@$u=$_REQUEST['uname'];  
@$p=$_REQUEST['upwd'];  

if($u===NULL){

	die("用户名不能为空");
}
if($p===NULL){

	die("密码不能为空");
}
$conn =mysqli_connect('127.0.0.1', 'root', '', 'Myjiu', 3306);
$sql ="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "insert into jiuxian_user (uname,upwd) values('$n','$p')";
$result = mysqli_query($conn,$sql);
if($result===false){
	echo "注册失败";

}else{
	echo "注册成功";

}
?>
