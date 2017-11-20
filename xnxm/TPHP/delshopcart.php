<?php
	include 'DBHelper.php';
	
	$productdetails4=$_POST["productdetails4"];
	
	$wei="delete from shopcart where productdetails='$productdetails4';";	
	$emailCheck = "select * from shopcart where productdetails='$productdetails2';";
		
	$result=query($emailCheck);
	if(count($result)< 1){
		$excute = excute($wei);
		echo '{"state": true, "message": "删除成功！！！"}';
	} else {
		
		echo '{"state": false,"messagetrue":'.json_encode($result).'}';	
	}
	
?>