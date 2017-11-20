<?php
	include 'DBHelper.php';
	$productcount=$_POST["productcount"];
	$productdetails2=$_POST["productdetails2"];
	
	$wei="update shopcart set productcount='$productcount' where productdetails='$productdetails2';";	
	$emailCheck = "select productcount from shopcart where productdetails='$productdetails2';";
		
	$result=query($emailCheck);
	if(count($result)< 1){
		
		echo '{"state": false, "message": "请求失败！！！"}';
	} else {
		$excute = excute($wei);
		echo '{"state": true,"messagetrue":'.json_encode($result).'}';	
	}
	
?>