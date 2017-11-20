<?php	
	include "DBHelper.php";
	
	$productprice=$_POST["productprice"];
	$productimage=$_POST["producttimage"];
	
	$productdatails=$_POST["productdetails"];
	$productcount=$_POST["productcount"];

		$sql="insert into orderlist(store,productimage,productdatails,productprice,productcount,statename) value('店铺1','$productimage','$productdatails','$productprice','$productcount','交易成功');";
		$emailCheck = "select * from orderlist where productdatails='$productdatails';";
		
		
		//$result1=query($sql);
		$result=query($emailCheck);
		
		if(count($result) < 1){
		
			$excute = excute($sql);
		if($excute){
			echo '{"state": true,"message": "插入成功"}';
			
		} else {
			echo '{"state": false, "message": "插入失败！！！"}';
		}
	} else {
		echo '{"state": false, "message": "插入失败"}';
	}
		
	
		
	
	
?>