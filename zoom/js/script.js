window.onload = function () {
	var Zoom = function (element, scale) {
		var mouseWheel = function (e) {
			var delta = e.deltaY || e.wheelDelta;
			scale += 0.1 * (delta / Math.abs(delta));
			scale = Math.max(0.1, scale);
			element.style.transform = 'scale(' + scale + ')';
            element.style.webkitTransform = 'scale(' + scale + ')';
		};
		window.addEventListener('wheel', mouseWheel);
		element.style.transformOrigin = '0px 0px';
        element.style.webkitTransformOrigin = '0px 0px';
        element.style.mozTransformOrigin = '0px 0px';
		element.style.transform = 'scale(' + scale + ')';
        element.style.webkitTransform = 'scale(' + scale + ')';
        element.style.mozTransform = 'scale(' + scale + ')';
	},
	zoom = new Zoom(document.body, 1);	
}