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
	
	
	
	
	
	
	//ajax加载数据	
//	var index = location.search.replace("_","");
//	var index=index.split('=');
//	$(function(){	
//	$.ajax({
//	type:"get",
//	url:"list.txt",
//	success:function(res)
//	{			
//		var data = JSON.parse(res);
//		var a=data.result;
//		var $swiper_container=$('.swiper-container');
//		var t=a[index[1]].src;
//		var s=a[index[1]].title;
//		var w=a[index[1]].price;
//		var tid=a[index[1]].id;		
////		console.log(s);
//		var $shop1=$('.shop1');
//		$swiper_container.after('<div class="wenzi"><p>'+s+'<p><p>'+w+'</p></div>');
//		$shop1.append('<a href="shopcart.html'+index+'">加入购物车</a>');
//		
//		var $shop1=$('.shop1');		
//		$shop1.click(function(e){				
//			var arr=[];
//			var obj={};
//			obj.src = t;
//			obj.title=s;
//			obj.price=w;
//			obj.id=tid;
////			obj.cout=1;
//			
//			var flag=false;
//			var tt=JSON.parse(localStorage.getItem('src1'));
//			if(tt){
//				arr=JSON.parse(localStorage.getItem('src1'));
//				$.each(arr, function(_index, _obj){				
//					if(_obj.id==tid)
//					{					
//						_obj.cout+=1;						
//						flag=true;
//						return true;
//					}
//				})
//			}		
//			if(!flag){	
//				obj.cout=obj.cout||1;
//				arr.push(obj);
//				
//			}	
//			localStorage.setItem('src1',JSON.stringify(arr));
//		})
//	}   
// })

})

	
		
		
	
	
	
	
	
	
	
