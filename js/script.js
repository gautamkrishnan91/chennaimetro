$( document ).ready(function() {
	var setPanelHeight = window.innerHeight - 50;
    $('#left-panel').height(setPanelHeight);
});
$('.station').click(function(){
	$('#left-panel').show("slide",
		         { direction: "left"  }, 500);
});
$("#legend-button").click(function(){
	$("#legend-wrapper").fadeToggle('10','linear');
});