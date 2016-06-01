/**
 * Created by irfan.maulana on 3/17/2016.
 */
function validateForm(){
    var isValid = false;
    if($("#title").val() !== ""){
        isValid = true;
    }
    return isValid;
}

function submitSaveForm(){
    if(validateForm()){
        var product = {
            title: $("#title").val(),
            description: $("#description").val(),
            price: $("#price").val()
        };
        $.ajax({
            type: "POST",
            url: ROOT_URL + "/api/products",
            data: product,
            success: function(response){
                handleAjaxSubmitResponse(response);
            },
        });
    }else{
        return false;
    }
}

function submitUpdateForm(idProduct){
    if(validateForm() && idProduct){
        var product = {
            title: $("#title").val(),
            description: $("#description").val(),
            price: $("#price").val()
        };
        $.ajax({
            type: "PUT",
            url: ROOT_URL + "/api/products/" + idProduct,
            data: product,
            success: function(response){
                handleAjaxSubmitResponse(response);
            },
        });
    }else{
        return false;
    }
}

function submitDelete(idProduct){
    if(idProduct){
        $.ajax({
            type: "DELETE",
            url: ROOT_URL + "/api/products/" + idProduct,
            success: function(response){
                handleAjaxSubmitResponse(response);
            },
        });
    }
}

function handleOnErrorAjaxSubmit(response){
    if(response.errorDesc.message){
        showFormErrorMessage(response.errorDesc.message);
    }else if(response.errorDesc.err){
        showFormErrorMessage(response.errorDesc.err);
    }else{
        showFormErrorMessage("Something was wrong, please refresh browser and try again!");
    }
}

function handleAjaxSubmitResponse(response){
    if(response.result){
        window.location = ROOT_URL + "/app";
    }else{
        handleOnErrorAjaxSubmit(response);
    }
}

function showFormErrorMessage(message){
    $("#form-error-message").html(
        '<div class="alert alert-danger">'+
        '    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Error!</strong> '+ message +
        '</div>'
    );
}

var isShowPassword = false;
function showHidePassword() {
    var change = "password";

    if (isShowPassword) {
        change = "text";
        $("#showhidepass").removeClass("glyphicon-eye-open");
        $("#showhidepass").addClass("glyphicon-eye-close");
    } else {
        change = "password";
        $("#showhidepass").removeClass("glyphicon-eye-close");
        $("#showhidepass").addClass("glyphicon-eye-open");
    }

    var input = $("#password");
    var rep = $("<input type='" + change + "' placeholder='Password' />")
        .attr("id", input.attr("id"))
        .attr("name", input.attr("name"))
        .attr('class', input.attr('class'))
        .val(input.val())
        .insertBefore(input);

    input.remove();
    input = rep;

    isShowPassword = !isShowPassword;
}


jQuery(function($) {
    'use strict';

    $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-collapse li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

});