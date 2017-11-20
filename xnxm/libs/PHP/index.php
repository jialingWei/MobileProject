<?php
	include "DBHelper.php";
	$username=$_POST["username"];
	$sql="select username from ueser where username='$username';";
	$result=query($sql);
	if(count($result)<1){
		echo '{"state": false, "message": "登录失败！！！"}';
	}else{
		echo '{"state": true, "message": '.json_encode($result).'}';
	}
?>
