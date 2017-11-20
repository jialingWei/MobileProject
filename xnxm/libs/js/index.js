$(function() {

	$.get('index.txt', function(response) {
		var obj = JSON.parse(response);
		//		var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
		var pageFlag = '';
		var a = obj.result;
		console.log("长度" + a.length);
		//遍历title			
		$.each(a, function(index, val) {
			//大的ul			
			var $li = $('<li><a href="list.html?=' + index + '"><img class="lazy"  src="' + val.src + '"/></a></li>');
			$li.appendTo($('.oul'));
		})
	})
	$("img.lazy").lazyload({
		effect: "fadeIn",
		threshold: 200,
	});

	var $sousuo = $('#sousuo');
	var $content = $('.content');
	$('.search-content').css({
		'display': 'none'
	});
	var $header = $('.header');
	var $close = $('.close');
	var $scrolltop = $('.scrolltop');

	$sousuo.click(function() {
		$header.css({
			'display': 'none'
		});
		$content.css({
			'display': 'none'
		});
		$('.search-content').css({
			'display': 'block'
		});

	})
	$close.click(function() {
		$header.css({
			'display': 'block'
		});
		$content.css({
			'display': 'block'
		});
		$('.search-content').css({
			'display': 'none'
		});
	})
	$scrolltop.css({
		'display': 'none'
	});
	$content.on('scroll', function() {
		var t = $content.scrollTop();
		if(t >= 500) {
			$scrolltop.css({
				'display': 'block'
			});
		} else {
			$scrolltop.css({
				'display': 'none'
			});
		}
	})
	$scrolltop.on('touchstart', function() {
		$content.animate({
			'scrollTop': 0
		}, 300);
	})

})