<?php
	include "DBHelper.php";
	$username=$_POST["username"];
	$telphone=$_POST["telphone"];
	$tpassword=$_POST["password"];
	$qrpassword=$_POST["qrpassword"];
	
	//判断当前 email 是否已存在数据表中
	$sql = "insert into ueser(username,telphone,password,qrpassword) value('$username','$telphone','$tpassword','$qrpassword');";
	$emailCheck = "select * from ueser where username='$username';";
	$result = query($emailCheck);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		
		$excute = excute($sql);
		if($excute){
			echo '{"state": true}';
			
		} else {
			echo '{"state": false, "message": "插入失败！！！"}';
		}
	} else {
		echo '{"state": false, "message": "studentid 已被注册！！！"}';
	}
	
?>