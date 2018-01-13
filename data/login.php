<?php

Header("Content-Type:application/json;charset=utf-8");
$conn =mysqli_connect('127.0.0.1', 'root', '', 'Myjiu', 3306);
mysqli_query($conn,"SET NAMES UTF8");
$u=$_REQUEST['uname'];
$p=$_REQUEST['upwd'];
$sql="select * from jiuxian_user where uname='$u' AND upwd='$p'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row==null){
  echo '{"code":-1,"msg":"用户名或密码错误"}';
}else{
  $type=$row['type'];
  $uid=$row['uid'];
  echo '{"code":1,"type":'.$type.',"uid":'.$uid.'}';
  
}
?>









