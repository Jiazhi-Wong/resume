function isPC() {
    var userAgent = navigator.userAgent;
    console.log(userAgent);
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var isPC = true;

    for (var i=0, len=Agents.length; i<len; i++) {
        if (userAgent.indexOf(Agents[i]) > 0) {
            isPC = false;
            break;
        }
    }

    console.log(isPC);
    return isPC;
}

(function loadOrNot() {
	var ornot = isPC();
	if (!ornot) {
		document.documentElement.style.display = "none";
		alert("为了您最佳的体验效果，请使用PC端浏览器，谢谢您的理解。")
	}
})();


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

	body.style.backgroundImage = "url('img/loading.png')";
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
		onLeave: function(curIndex, nextIndex) {
			$body.css('backgroundColor', settings.bgColors[nextIndex-1]);
			$body.attr('id', settings.anchors[nextIndex-1]);
		},
		afterRender: function() {
			$body.attr('id', "home");
		}
	});
});



