function delete_class(id) {
    var box = $("#mb-remove-row");
    box.addClass("open");

    function delete_contact(id) {
        var request_url = document.getElementById('deleteurl').value;

        $.ajax({
            type: "get",
            url: request_url,
            data: { "id": id },
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data, "error");
            },
        });
    }

    // Unbind the click event to avoid multiple bindings
    box.find(".mb-control-yes").off("click").on("click", function () {
        delete_contact(id);
        box.removeClass("open");
        $("#"+id).hide("slow",function(){
            $(this).remove();
        });
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
                // location.reload();
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



//Department


function edit_pop_department(departmentId){
    document.getElementById('spinner'+departmentId).className="fa fa-spinner";
    reqest_url =document.getElementById('url').value;
    $.ajax({
        type:"get",
        url:reqest_url,
        data: { 'department_id': departmentId },
        dataType: 'json',
        success: function (data) {
            document.getElementById('edit_name').value=data.name;
            document.getElementById('edit_code').value=data.code;

            document.getElementById('edit_id').value=data.id;
            document.getElementById('edit_select').value=data.select;
            
            $('#modal-default').modal('show');
            document.getElementById('spinner'+departmentId).className="fa fa-pencil";

            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}


function edit_department(){
    reqest_url =document.getElementById('updateurl').value

    updateId=document.getElementById('edit_id').value;
    updateName=document.getElementById('edit_name').value;
    updateCode=document.getElementById('edit_code').value;
    updateStatus=document.getElementById('edit_select').value
    updateObject = {
        "updateId": updateId,
        "updateName": updateName,
        "updateStatus": updateStatus,
        "updateCode":updateCode
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
                // location.reload();
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


function delete_department(id) {
    var box = $("#mb-remove-row");
    box.addClass("open");


    var request_url = document.getElementById('deleteurl').value;

    $.ajax({
            type: "get",
            url: request_url,
            data: { "id": id },
            dataType: 'json',
            success: function (data) {
                box.find(".mb-control-yes").off("click").on("click", function () {
                    box.removeClass("open");
                    $("#"+id).hide("slow",function(){
                        $(this).remove();
                    });
                });

            },
            error: function (data) {
                console.log(data, "error");
            },
        });


    }

    
// Designation

function edit_pop_designation(designationId){
    document.getElementById('spinner'+designationId).className="fa fa-spinner";
    reqest_url =document.getElementById('url').value;
    $.ajax({
        type:"get",
        url:reqest_url,
        data: { 'designation_id': designationId },
        dataType: 'json',
        success: function (data) {
            document.getElementById('edit_name').value=data.name;
            document.getElementById('edit_code').value=data.code;

            document.getElementById('edit_id').value=data.id;
            document.getElementById('edit_select').value=data.select;
            
            $('#modal-default').modal('show');
            document.getElementById('spinner'+designationId).className="fa fa-pencil";

            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}



function edit_designation(){
    reqest_url =document.getElementById('updateurl').value

    updateId=document.getElementById('edit_id').value;
    updateName=document.getElementById('edit_name').value;
    updateCode=document.getElementById('edit_code').value;
    updateStatus=document.getElementById('edit_select').value
    updateObject = {
        "updateId": updateId,
        "updateName": updateName,
        "updateStatus": updateStatus,
        "updateCode":updateCode
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
                // location.reload();
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



function delete_designation(id) {
    var box = $("#mb-remove-row");
    box.addClass("open");


    var request_url = document.getElementById('deleteurl').value;

    $.ajax({
            type: "get",
            url: request_url,
            data: { "id": id },
            dataType: 'json',
            success: function (data) {
                box.find(".mb-control-yes").off("click").on("click", function () {
                    box.removeClass("open");
                    $("#"+id).hide("slow",function(){
                        $(this).remove();
                    });
                });

            },
            error: function (data) {
                console.log(data, "error");
            },
        });


    }


    //Qualification

    function delete_qualification(id) {
        var box = $("#mb-remove-row");
        box.addClass("open");
        var request_url = document.getElementById('deleteurl').value;
    
            $.ajax({
                type: "get",
                url: request_url,
                data: { "id": id },
                dataType: 'json',
                success: function (data) {
                    box.find(".mb-control-yes").off("click").on("click", function () {
                        box.removeClass("open");
                        $("#"+id).hide("slow",function(){
                            $(this).remove();
                        });
                    });
                },
                error: function (data) {
                    console.log(data, "error");
                },
            });
        
    

       
    }
    
    
    
    function edit_pop_qualification(qualificationId){
        document.getElementById('spinner'+qualificationId).className="fa fa-spinner";
        reqest_url =document.getElementById('url').value
        $.ajax({
            type:"get",
            url:reqest_url,
            data: { 'qualification_id': qualificationId },
            dataType: 'json',
            success: function (data) {
                document.getElementById('edit_name').value=data.name;
    
                document.getElementById('edit_id').value=data.id;
                document.getElementById('edit_select').value=data.select;
                
                $('#modal-default').modal('show');
                document.getElementById('spinner'+qualificationId).className="fa fa-pencil";
    
                
            },
            error: function (data) {
                console.log(data, "error");
            },
        });
    }
    
    
    function edit_qualification(){
        reqest_url =document.getElementById('contacturl').value
    
        updateId=document.getElementById('edit_id').value;
        updateName=document.getElementById('edit_name').value;
        updateStatus=document.getElementById('edit_select').value

        updateObject = {
            "updateId": updateId,
            "updateName": updateName,
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
                    // location.reload();
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
    

        //division

        function delete_division(id) {
            var box = $("#mb-remove-row");
            box.addClass("open");
            var request_url = document.getElementById('deleteurl').value;
        
                $.ajax({
                    type: "get",
                    url: request_url,
                    data: { "id": id },
                    dataType: 'json',
                    success: function (data) {
                        box.find(".mb-control-yes").off("click").on("click", function () {
                            box.removeClass("open");
                            $("#"+id).hide("slow",function(){
                                $(this).remove();
                            });
                        });
                    },
                    error: function (data) {
                        console.log(data, "error");
                    },
                });
            
        
    
           
        }
        
        
        
        function edit_pop_division(divisionId){
            document.getElementById('spinner'+divisionId).className="fa fa-spinner";
            reqest_url=document.getElementById('url').value
            $.ajax({
                type:"get",
                url:reqest_url,
                data: { 'division_id': divisionId },
                dataType: 'json',
                success: function (data) {
                    document.getElementById('edit_name').value=data.name;
        
                    document.getElementById('edit_id').value=data.id;
                    document.getElementById('edit_select').value=data.select;
                    
                    $('#modal-default').modal('show');
                    document.getElementById('spinner'+divisionId).className="fa fa-pencil";
        
                    
                },
                error: function (data) {
                    console.log(data, "error");
                },
            });
        }
        
        
        function edit_division(){
            reqest_url =document.getElementById('contacturl').value
        
            updateId=document.getElementById('edit_id').value;
            updateName=document.getElementById('edit_name').value;
            updateStatus=document.getElementById('edit_select').value
    
            updateObject = {
                "updateId": updateId,
                "updateName": updateName,
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


        // employee_category_manage



        function delete_employee_category(id) {
            var box = $("#mb-remove-row");
            box.addClass("open");
            var request_url = document.getElementById('deleteurl').value;
        
                $.ajax({
                    type: "get",
                    url: request_url,
                    data: { "id": id },
                    dataType: 'json',
                    success: function (data) {
                        box.find(".mb-control-yes").off("click").on("click", function () {
                            box.removeClass("open");
                            $("#"+id).hide("slow",function(){
                                $(this).remove();
                            });
                        });
                    },
                    error: function (data) {
                        console.log(data, "error");
                    },
                });
            
        
    
           
        }
        
        
        
        function edit_pop_employee_category(employeeCategoryId){
            document.getElementById('spinner'+employeeCategoryId).className="fa fa-spinner";
            reqest_url=document.getElementById('url').value
            $.ajax({
                type:"get",
                url:reqest_url,
                data: { 'employee_category_id': employeeCategoryId },
                dataType: 'json',
                success: function (data) {
                    document.getElementById('edit_name').value=data.name;
                    document.getElementById('edit_area').value=data.area;
                    document.getElementById('edit_id').value=data.id;
                    
                    document.getElementById('edit_select').value=data.select;
                    
                    $('#modal-default').modal('show');
                    document.getElementById('spinner'+employeeCategoryId).className="fa fa-pencil";
        
                    
                },
                error: function (data) {
                    console.log(data, "error");
                },
            });
        }
        
        
        function edit_employee_category(){
            reqest_url =document.getElementById('contacturl').value
        
            updateId=document.getElementById('edit_id').value;
            updateArea=document.getElementById('edit_area').value;
            updateName=document.getElementById('edit_name').value;
            updateStatus=document.getElementById('edit_select').value
    
            updateObject = {
                "updateId": updateId,
                "updateName": updateName,
                "updateStatus": updateStatus,
                "updateArea":updateArea
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



//Subject
function checkAll() {
    var selectAllCheckbox = document.getElementById("selectAllCheckbox");
    var classCheckboxes = document.querySelectorAll('.classCheckbox');
    
 classCheckboxes.forEach(function (checkbox) {

    checkbox.checked = selectAllCheckbox.checked;
});
}

function edit_pop_subject(subjectId){
    document.getElementById('spinner'+subjectId).className="fa fa-spinner";
    reqest_url=document.getElementById('url').value
    $.ajax({
        type:"get",
        url:reqest_url,
        data: { 'subject_id': subjectId },
        dataType: 'json',
        success: function (data) {
            document.getElementById('edit_name').value=data.name;
            document.getElementById('edit_id').value=data.id;
            
            document.getElementById('edit_select').value=data.select;
            data.classes.forEach(function (classObj) {
                document.getElementById('edit_class_' + classObj.id).checked = true;
            });
            
            $('#modal-default').modal('show');
            document.getElementById('spinner'+subjectId).className="fa fa-pencil";

            
        },
        error: function (data) {
            console.log(data, "error");
        },
    });
}

function edit_subject(){
    reqest_url =document.getElementById('contacturl').value
   

    updateId=document.getElementById('edit_id').value;
    updateName=document.getElementById('edit_name').value;
    var selectedClassIds = [];
    $('input[name="classes"]:checked').each(function () {
        selectedClassIds.push($(this).val());
    });

    updateStatus=document.getElementById('edit_select').value
    var classIdsString = selectedClassIds.join(',');
 
    updateObject = {
        "updateId": updateId,
        "updateName": updateName,
        "updateStatus": updateStatus,
        "selectedClassIds":classIdsString
      };
      console.log(updateObject);
    
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