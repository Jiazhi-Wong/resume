// 滚动图片实现
$(document).ready(function() {
	var $list = $('#list');
	var $prev = $('.prev');
	var $next = $('.next');

	$next.click(function() {
		if (parseInt($list.css("left")) >= -1170) {
			$list.animate({left: '-=1170px'}, 200);
			var $currentbtn = $('.buttons span[class=chos]');
			$currentbtn.removeClass('chos')
				.next().addClass('chos');
		}
	});

	$prev.click(function() {
		if (parseInt($list.css("left")) <= -1170) {
			$list.animate({left: '+=1170px'}, 200);
			var $currentbtn = $('.buttons span[class=chos]');
			$currentbtn.removeClass('chos')
				.prev().addClass('chos');
		}
	});
});

$(document).ready(function() {
	var $button = $('.imagesroll .buttons span');
	$button.click(function() {
		var $index = $button.index(this);
		movelist($index);
		$(this).addClass('chos')
			   .siblings('span').removeClass('chos');
	});
});

function movelist($index) {
	var $list = $('#list');
	$list.animate({left: $index*-1170 + 'px'}, 200);
}

//中部选中效果的变化实现
$(document).ready(function() {
	var $mylist = $('.listservices li');

	$mylist.hover(function() {
		$(this).addClass('chos')
		       .find('a').addClass('chos');
	}, function() {
		$(this).removeClass('chos')
		       .find('a').removeClass('chos');
	});
});

// 图片滚动放大效果
$(document).ready(function() {
	var $prev_btn = $('.showpic .prev-btn');
	var $next_btn = $('.showpic .next-btn');
	var $showpic = $('.showpic ul');
	var $currentpic = $('.showpic li[class=chos]');
	var $currentimg = $('.showpic li[class=chos] img');
	$currentpic.css({top: '-50px', left: '-90px', 'z-index': '1'});
	$currentimg.css({width: '570px', height: '360px'});
	var $finished = true; 


	$prev_btn.click(function() {
		if ($finished) {
			if (parseInt($showpic.css("left")) <= 0) {
				$finished = false;
				$showpic.animate({left: '+=390px'}, 300, function(){$finished = true;});
				var $currentpic1 = $('.showpic li[class=chos]');
				var $currentimg1 = $('.showpic li[class=chos] img');
				$currentpic1.removeClass('chos')
					.prev().addClass('chos');
				var $currentpic2 = $('.showpic li[class=chos]');
				var $currentimg2 = $('.showpic li[class=chos] img');
				$currentpic1.animate({top: '0px', left: '0px', 'z-index': '0'}, 300);
				$currentpic2.animate({top: '-50px', left: '-90px', 'z-index': '1'}, 300);
				$currentimg1.animate({width: '370px', height: '260px'}, 300);
				$currentimg2.animate({width: '570px', height: '360px'}, 300);
			}
		}
		
	});

	$next_btn.click(function() {
		if ($finished) {
			if (parseInt($showpic.css("left")) >= -780) {
				$finished = false;
				$showpic.animate({left: '-=390px'}, 300, function(){$finished = true;});
				var $currentpic1 = $('.showpic li[class=chos]');
				var $currentimg1 = $('.showpic li[class=chos] img');
				$currentpic1.removeClass('chos')
					.next().addClass('chos');
				var $currentpic2 = $('.showpic li[class=chos]');
				var $currentimg2 = $('.showpic li[class=chos] img');
				$currentpic1.animate({top: '0px', left: '0px', 'z-index': '0'}, 300);
				$currentpic2.animate({top: '-50px', left: '-90px', 'z-index': '1'}, 300);
				$currentimg1.animate({width: '370px', height: '260px'}, 300);
				$currentimg2.animate({width: '570px', height: '360px'}, 300);
			}
		}
		
	});
});
