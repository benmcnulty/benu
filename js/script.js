(function(){
    "use strict";
    function loaded() {
        //console.log("Page loaded. JavaScript go.");
    
    
        var model = new Date();
        var year = model.getUTCFullYear();
        
        //console.log(year);
        document.getElementById("copyYear").innerHTML = year.toString();
    
    }
    
    window.addEventListener("load", loaded);
})();