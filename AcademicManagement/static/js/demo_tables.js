function delete_row(){
        
    var box = $("#mb-remove-row");
    box.addClass("open");
    
    box.find(".mb-control-yes").on("click",function(){
        console.log("heloo");
        box.removeClass("open");
        
        
        
    });
    
    
}


function edit_pop(classId){
    $.ajax({
        type:"get",
        url: "http://127.0.0.1:8000/get_class_details/",
        data: { 'class_id': classId },
        dataType: 'json',
        success: function (data) {
            var selctdata = data.select;
            document.getElementById('editclass').value=data.name


            document.getElementById('editSelect').value=data.select
            console.log(data.select);
            
            $('#modal-default').modal('show');
            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}