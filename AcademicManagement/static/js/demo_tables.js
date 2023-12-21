
    function delete_row(){
        
        var box = $("#mb-remove-row");
        box.addClass("open");
        
            var result=false
            a=box.find(".mb-control-yes").on("click", function() {
                result=true
            });
            box.find(".mb-control-yes").on("click",function(){
                box.removeClass("open");
                $("#"+row).hide("slow",function(){
                    $(this).remove();
                });
            });

            return result
       
        
    }
