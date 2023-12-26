function delete_row(){
        
    var box = $("#mb-remove-row");
    box.addClass("open");
    
    box.find(".mb-control-yes").on("click",function(){
        console.log("heloo");
        box.removeClass("open");
        
        
        
    });
    
    
}
