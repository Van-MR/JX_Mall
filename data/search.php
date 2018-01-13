<?php
Header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_query('127.0.0.1','root','','xz',3306);
mysqli_query($conn,"SET NAMES UTF8");
$kw=$_REQUEST['kw'];
$sql="select * from xz_laptop where title like '%$kw%'";
$result=mysqli_query($sql,$conn);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode ($rows);



?>