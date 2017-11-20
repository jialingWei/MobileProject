<?php	
	include "DBHelper.php";	
	session_start();
	$telphone=$_POST["telphone"];
	$tpassword=$_POST["password"];
	
	$sql ="select * from ueser where telphone='$telphone' and password='$tpassword';";
	$result = query($sql);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		echo '{"state": false, "message": "登录失败！！！"}';
	} else {
		echo '{"state": true,"message":'.json_encode($result).'}';	
		$_SESSION["telphone"]=$telphone;	
	}
?>