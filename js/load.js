jQuery(document).ready(function() {

	var left = 0;
	var right = $(window).width();
	var top = 0;
	var bottom = $(window).height();
    jQuery("#map-wrapper").draggable({
	        containment: $('.container')
    });

    var wt = window.innerHeight;
    var ht = window.innerHeight;
    $('.viewable').css({height : ht-50, width : "100%"});
    $("#map-wrapper").css({"left":"1884px","top":"3915px"});
    var scale = 0.6;
    zoomable(scale);



});
function zoomable(scale) {
	// var mouseWheel = function (e) {
	// 	var delta = e.deltaY || e.wheelDelta;
	// 	console.log(scale);
	// 	scale += 0.2 * (delta / Math.abs(delta));
	// 	scale = Math.max(0.2, scale);
	// 	element.style.transform = 'scale(' + scale + ')';
//           element.style.webkitTransform = 'scale(' + scale + ')';
	// };
	// window.addEventListener('wheel', mouseWheel);
	var element = document.getElementById("map-wrapper");
	element.style.transformOrigin = '0px 0px';
    element.style.webkitTransformOrigin = '0px 0px';
    element.style.mozTransformOrigin = '0px 0px';
	element.style.transform = 'scale(' + scale + ')';
    element.style.webkitTransform = 'scale(' + scale + ')';
    element.style.mozTransform = 'scale(' + scale + ')';
    window.scrollTo(200,200);
    
}
