/******************************************
toggle-visability.js 

useful function for pop-up boxes and hiding and displaying elements on the page.
******************************************/

function toggle_visability(id){
	var toggle = document.getElementById(id);
	toggle.style.dislay == 'block' ? toggle.style.display = 'none': toggle.style.display = 'block';
}