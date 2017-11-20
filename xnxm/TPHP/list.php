<?php
    include 'DBHelper.php';
	
    $sql = "select * from list;";

    $result = query($sql);
    //json_encode($result, JSON_UNESCAPED_UNICODE);
   //echo json_encode($result, JSON_UNESCAPED_UNICODE);
   
    if(count($result) < 1){
		echo '{"state": false, "message": "请求失败！！！"}';
	} else {
		echo '{"state": true,"messagetrue":'.json_encode($result).'}';	
	}
?>