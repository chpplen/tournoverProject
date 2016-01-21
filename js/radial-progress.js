// JavaScript Document
window.randomize = function( id, value) {
	//console.log($(id),'  ',value);
	$(id).attr('data-progress', value);
}
//setTimeout(window.randomize, 200);
$('#TakeHour_radial_1').click(window.randomize('#TakeHour_radial_1', 65));
$('#TakeHour_radial_2').click(window.randomize('#TakeHour_radial_2', 20));
$('#TakeHour_radial_3').click(window.randomize('#TakeHour_radial_3', 85));
$('#TakeHour_radial_4').click(window.randomize('#TakeHour_radial_4', 37));
$('#TakeHour_radial_5').click(window.randomize('#TakeHour_radial_5', 48));
$('#TakeHour_radial_6').click(window.randomize('#TakeHour_radial_6', 11));
