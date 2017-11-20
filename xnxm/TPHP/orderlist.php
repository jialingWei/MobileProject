<?php
    include 'DBHelper.php';
	
    $sql = "select * from orderlist;";

    $result = query($sql);
    
    if(count($result) < 1){
		echo '{"state": false, "message": "请求失败！！！"}';
	} else {
		echo '{"state": true,"messagetrue":'.json_encode($result).'}';	
	}
?>