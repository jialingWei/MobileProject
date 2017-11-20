$(function(){
	
		//计算
			var total=0;			
			var $pro_del=$('.item-option');						
			$pro_del.each(function(indx,val){
				//全选的dom
				var $oli=$('.footer>ul>li').eq(0);
				var $oinput=$('.footer>ul>li').eq(0).children('input[type=checkbox]');
				
				var $check=$(val).children('input[type=checkbox]');
				//点击各个input时计算总钱
				var prices=$(val).parent('.ng-scope').children('div').eq(2).find('p').eq(1).text();
				$(val).click(function(){
					           
				var ocount=$(val).parent('.ng-scope').children('div').eq(3).find('div').eq(1).text();			
				if($check.prop('checked'))
				{					
					
					total +=prices * ocount;
				}else{					
					total -=prices * ocount;
//					if(total==0){
//						$oinput.prop('checked');
//					}
				}				
				$('.count').find('a').text(total);
			})
			//全选js			
			console.log($oinput);
			$oli.click(function(){
				if($oinput.prop('checked'))
				{
					$check.prop('checked',true);
					var prices=$(val).parent('.ng-scope').children('div').eq(2).find('p').eq(1).text();	           
					var ocount=$(val).parent('.ng-scope').children('div').eq(3).find('div').eq(1).text();			
					if($check.prop('checked'))
					{					
						total +=prices * ocount;					
					}else{					
						total -=prices * ocount;
					}				
					$('.count').find('a').text(total);
				}else{
					$check.prop('checked',false);
					total=0;
					$('.count').find('a').text(total);
				}
			})
			
			var $jian=$(val).parent('.ng-scope').children('div').eq(3).find('div').eq(0);
			console.log($jian);
			$jian.each(function(idx1,val1){
				$(val1).click(function(){
					var cout=$(this).next().text();
					cout--;
					if(cout<=0){cout=0;$(this).next().text(cout);}
					$(this).next().text(cout);
					if($check.prop('checked'))
					{
						total +=prices * cout;
						$('.count').find('a').text(total);
					}					
				})
			})
			var $jia=$(val).parent('.ng-scope').children('div').eq(3).find('div').eq(2);
			$jia.each(function(idx1,val1){
				$(val1).click(function(){
					var cout=$(this).prev().text();
					cout++;					
					$(this).prev().text(cout);				
				})
			})
			
		})
	

})