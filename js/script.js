$( document ).ready(function() {
	var setPanelHeight = $(window).height();
    $('#left-panel').height(setPanelHeight);
});
function showHideLegend(){
	$("#legend-wrapper").fadeToggle('10','linear');
}