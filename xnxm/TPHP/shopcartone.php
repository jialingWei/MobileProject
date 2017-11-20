<?php
	include 'DBHelper.php';
    $emailCheck1 = "select * from shopcart;";
    $emailCheck2 = "select productcount from shopcart;";
    
    $result1 = query($emailCheck1);
    $result2 = query($emailCheck2);
    if(count($result1) < 1){
		echo '{"state": false, "message": "请求失败！！！"}';
	} else {
		echo '{"state": true,"messagetrue":'.json_encode($result1).',"mproductcount":'.json_encode($result2).'}';	
	}
	
?>	