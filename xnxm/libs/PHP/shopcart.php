<?php
    include 'DBHelper.php';
    $productdetails1=$_POST["productdetails1"];
    $productprice1=$_POST["productprice1"];
    $productimage=$_POST["productimage"];
   	$productid=1;
   
   
    $sql = "insert into shopcart(productdetails,productprice,productimage) value('$productdetails1','$productprice1','$productimage');";
	$emailCheck = "select * from shopcart where productdetails='$productdetails1';";
	$emailCheck1 = "select * from shopcart;";
	
	$result1 = query($emailCheck1); 
	
	
   	$result = query($emailCheck);  
  	$ddd=count($result);
    if(count($result)< 1){    	
    	$excute = excute($sql);   	
		if($excute){
			$wjl="update shopcart set productcount=1 where productdetails='$productdetails1';";
			excute($wjl);
			echo '{"state": true,"messagetrue":'.json_encode($result1).',"turezong":'.$productid.'}';
			
		} else {
			echo '{"state": false, "message": "插入失败"}';
		}
	} else {
		$xt = "select productcount from shopcart where productdetails='$productdetails1';";
		$ddd=query($xt);
		$fff=json_encode($ddd);
		echo '{"state": false, "message":"已经添加！！！","zong":'.$fff.'}';
		
	}
    	
    	
    	
    
?>