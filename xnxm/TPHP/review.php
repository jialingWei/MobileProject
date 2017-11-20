<?php
include 'DBHelper.php';
$emailCheck1 = "select * from review;";
$result=query($emailCheck1);
if(count($result) < 1){
		echo '{"state": false, "message": "请求失败！！！"}';
	} else {
		echo '{"state": true,"messagetrue":'.json_encode($result).'}';	
	}
?>