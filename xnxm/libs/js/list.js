$(function(){	
//	$.get('list.txt',function(response)
//	{
//		var obj = JSON.parse(response);		
//		var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
//		var pageFlag = '';
//		var a=obj.result;
//		console.log("长度"+a.length);
		//遍历title			
//		$.each(a,function(index,val){
			//大的ul
//			var $li=$('<li><a href="details.html?='+index+'"><img class="lazy" src="'+ val.src +'"/></a><div class="jies">'+val.title+'</div><div class="price">'+val.price+'</div></li>');					
			
//			var $li=$('<li><a href="xiangqing1.html?='+index+'"><img class="lazy"  src="'+ val.src +'"/></a></li>');
//         console.log($li)
//         $li.appendTo($('.oul'));
//		})
//	})
	
	
	
	
	
	
	var $navmorelist=$('.navmorelist');
	var $listul=$('#list-ul');
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
	myScroll = new IScroll('#wrapper', {
		scrollbarClass: 'myScrollbar', /* 重要样式 */
		useTransition: false, /* 此属性不知用意，本人从true改为false */
		topOffset: pullDownOffset,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click:true,
		probeType: 3, 
	})
	var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0,
	generatedCount1 = 0;
function pullDownAction () {
	setTimeout(function () {	
		var el, li, i;
		el = document.getElementById('thelist');		
		$.get('list.txt',function(response)
		{
			var obj = JSON.parse(response);		
			var pageFlag = '';
			var a=obj.result;
			for (var i=0;i<3;i++){
				li = document.createElement('li');
				var a1=document.createElement('a');
				var aj=++generatedCount;
				a1.href="xiangqing1.html?=aj";
				li.appendChild(a1);
				a1.innerHTML='<img src="' + a[aj].src+'"/>';
				console.log(aj);
	        	el.insertBefore(li, el.childNodes[0]);						
			}			
		})
		myScroll.refresh();
		
	}, 1000);	
}
function pullUpAction (){
	setTimeout(function (){	
		var el, li, i,a1;
		el = document.getElementById('thelist');		
		$.get('list.txt',function(response)
		{
			var obj = JSON.parse(response);
			var pageFlag = '';
			var a=obj.result;
			for (var i=0;i<3;i++){
				li = document.createElement('li');
				a1=document.createElement('a');
				var aj1=++generatedCount1;
				a1.href='#';
				li.appendChild(a1);
				a1.innerHTML='<img src="' + a[aj1].src  + '"/>';
	        	el.appendChild(li, el.childNodes[0]);						
			}			
		})
		myScroll.refresh();
	}, 1000);
}
setTimeout(function (){document.getElementById('wrapper').style.left = '0'; }, 800);
pullDownAction();
pullUpAction();
})	
