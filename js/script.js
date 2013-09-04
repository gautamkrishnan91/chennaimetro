$( document ).ready(function() {
	var setPanelHeight = window.innerHeight - 50;
    $('#left-panel').height(setPanelHeight);
});
function showHideLegend(){
	$("#legend-wrapper").fadeToggle('10','linear');
}

$('.station').click({ 
	alert("hi");
});

function toggleLeftPanel(){
	$('#left-panel').toggle("slide",
		         { direction: "left"  }, 500);
}