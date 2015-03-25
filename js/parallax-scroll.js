/*******************************
skeleton of a simple paralax scroll 

*******************************/
//insert first id from html 
var item1 = document.getElementById(""),
    item2 = document.getElementById(""),
    
    speed = 4,
    
    
    y,
   //checks compatability of browser
    supportPageOffset = window.pageXOffset !== undefined,
        
        // if false is CSS1Compat will work  
    isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        
        
window.onscroll = function() {
    //defines y depending on browser compatability 
    y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      //moves position of item1 at a slower speed than scroll 
    item1.style.backgroundPosition = "0px " + (y / speed) + "px";
      //moves position of item2 at faster speed than scroll  
    item2.style.transform = "translate(0px," + (y / -speed) + "px)";
    
}