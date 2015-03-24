/***********************************
fadescroll.js
function that will make elememnts fade as user scrolls down page.

***********************************/


//Put ID of element in parenthesis on line 9 
var elementId = document.getElementById(""), 
	//change variable on line 11 to change the speed at which the elemennt will fade
	fadespeed = 300, 
	y, 
	//checks compatibility of browser
	supportPageOffset = window.pageXOffset != undefined,
	isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//uses appropriate variable depending on compatibility of browser.
window.onscroll = function(y){
	y= supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrolTop;
	//changes the opacity of element as user scrolls 
	elementId.style.opacity = 1-(y/fadespeed);
}
