// 页面加载完成后，loading慢慢淡出，最后display设为none
window.onload = function() {
	var load = document.getElementById('loading');
	var container = document.getElementById('container');
	var fadeSpeed = 0.01;
	var loadOpacity = 1;
	var containerOpacity = 0;
	var fade = setInterval(loadingFade, 10);

   	function loadingFade() {
		loadOpacity -= fadeSpeed;
		containerOpacity += fadeSpeed;
   		load.style.opacity = loadOpacity;
   		container.style.opacity = containerOpacity;
	
		// loading完全淡出后，将其display设为none
   		if (load.style.opacity <= 0) {
   			load.style.display = "none";
   			clearInterval(fade);
   		}
   	}
}

// 设置body的背景图，宽度和高度
$(function() {
	var body = document.body;
	var width = document.documentElement.clientWidth + 20;
	var height = document.documentElement.clientHeight + 20;

	body.style.backgroundImage = "url('img/bodyBg.png')";
	body.style.backgroundSize =  width + "px " + height + "px";
});

// 使用fullpage插件，设置参数
$(function() {
	var $body = $("body");
	var settings =  {
		bgColors: [
			"rgb(110, 197, 117)", 
			"rgb(247, 145, 76)", 
			"rgb(77, 200, 229)", 
			"rgb(139, 127, 244)", 
			"rgb(250, 210, 71)"
		],
		anchors: [
			"home",
			"about",
			"skill",
			"demo",
			"contact"
		]
	}

	$("#fullpage").fullpage({
		verticalCentered: false,
		anchors: settings.anchors,
		navigation: true,
		navigationTooltips: ['首页', '关于我', 'Web技能', 'Demo作品', '联系我'],
		onLeave: function(curIndex, nextIndex) {     // 当离开一个section时，改变背景的颜色和body的id
			$body.css('backgroundColor', settings.bgColors[nextIndex-1]);
			$body.attr('id', settings.anchors[nextIndex-1]);
		},
		afterRender: function() {    // fullpage页面结构生成猴，给body加id
			$body.attr('id', "home");
		}
	});
});



