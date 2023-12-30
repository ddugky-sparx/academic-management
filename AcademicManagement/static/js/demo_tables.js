function delete_row(){
        
    var box = $("#mb-remove-row");
    box.addClass("open");
    
    box.find(".mb-control-yes").on("click",function(){
        console.log("heloo");
        box.removeClass("open");
        
        
        
    });
    
    
}


function edit_pop(classId){
    document.getElementById('spinner'+classId).className="fa fa-spinner";
    reqest_url =document.getElementById('url').value
    $.ajax({
        type:"get",
        url:reqest_url,
        data: { 'class_id': classId },
        dataType: 'json',
        success: function (data) {
            document.getElementById('editclass').value=data.name;

            document.getElementById('classid').value=data.id;
            document.getElementById('editSelect').value=data.select;
            
            $('#modal-default').modal('show');
            document.getElementById('spinner'+classId).className="fa fa-pencil";

            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}


function edit_contact(){
    reqest_url =document.getElementById('contacturl').value

    updateId=document.getElementById('classid').value;
    updateClass=document.getElementById('editclass').value;
    updateStatus=document.getElementById('editSelect').value
    console.log(typeof(updateStatus));

    updateObject = {
        "updateId": updateId,
        "updateClass": updateClass,
        "updateStatus": updateStatus
      };
    
    $.ajax({
        type:"get",
        url:reqest_url,
        data:updateObject,
        dataType: 'json',
        success: function (data) {
            $('#modal-default').modal('hide');
            if(data.errormessage){
                noty({ text: data.errormessage, layout: 'topRight', timeout: 1000, type: 'error' }).show();
            setTimeout(function () {
                location.reload();
            }, 3000);
            }
            if(data.successmessage){
                noty({ text: data.successmessage, layout: 'topRight', timeout: 1000, type: 'success' }).show();
            setTimeout(function () {
                location.reload();
            }, 3000);

            }
            
                

            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}

