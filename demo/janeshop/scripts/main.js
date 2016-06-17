// 搜索框文字效果
$(function() {
	$("#inputSearch").focus(function() {
		$(this).addClass("focus");
		if ($(this).val() == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		$(this).removeClass("focus");
		if ($(this).val() == "") {
			$(this).val(this.defaultValue);
		}
	})
})

// 网页换肤
$(function() {
	var $li = $("#skin li");
	$li.click(function() {
		switchSkin(this.id)
	});
})

function switchSkin(skinName) {
	$("#"+skinName).addClass("selected")
		.siblings().removeClass("selected");
	$("#cssfile").attr("href", "styles/skin/" + skinName + ".css");
}

// 导航栏效果
$(function() {
	$(".nav li").hover(function() {
		$(this).find('.jnNav').show();
	}, function() {
		$(this).find('.jnNav').hide();
	});
})

//商品分类热销效果
$(function() {
	$(".jnCatainfo .promoted").append("<s class='hot'></s>")
})

 // 首页大屏广告效果 
$(function(){
	var $imgrolls = $("#jnImageroll div a");
    var len  = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	//滑入 停止动画，滑出开始动画.
	$('#jnImageroll').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 5000);
	}).trigger("mouseleave");
})

function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	$("#JS_imgWrap").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}

//品牌活动横向滚动效果
$(function() {
	$jnTabBtn = $("#jnBrandTab li a")
	$jnTabBtn.click(function() {
		$(this).parent().addClass('chos')
				.siblings().removeClass('chos');
		var ids = $jnTabBtn.index(this);
		showBrandList(ids);
		return false;
	}).eq(0).click();
})

function showBrandList(index) {
	var $rollobj = $("#jnBrandList");
	var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth * 4;
	$rollobj.stop(true,false).animate({left: -rollWidth*index}, 500);
}