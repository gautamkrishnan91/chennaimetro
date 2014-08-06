var scale = 0.6;
$( document ).ready(function() {
	// var width1 = window.innerWidth;
	// var height1 = window.innerHeight;
	// $('.viewable').css("width",width1);
	// $('.viewable').css("height",height1);
	
});
$('.station').click(function(){
	$('#left-panel').show("slide",
		         { direction: "left"  }, 500);
});
$("#legend-button").click(function(){
	$("#legend-wrapper").fadeToggle('10','linear');
});

$('.zoom-in').click(function(){
	if(scale<0.9){
		scale+=0.1;
		zoomable(scale);
	}
});
$('.zoom-out').click(function(){
	if(scale>0.4){
	scale-=0.1;
	zoomable(scale);}
});