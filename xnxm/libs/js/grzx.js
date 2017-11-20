$(function(){
	var $navmorelist=$('.navmorelist');
	var $listul=$('.a2');
	var xx=true;
	$listul.on('click',function(){
		console.log(123);		
		if(xx)
		{
			$navmorelist.show();
		}else{
			$navmorelist.hide();
		}
		xx=!xx;
	})
})	