/**
 * Created by irfan.maulana on 6/18/2016.
 */
$(document).ready(function () {

});

function doSubmitLogin(event){
    event.preventDefault();

    var email = $("#username").val();
    var password = $("#password").val();

    if(email !== "" && password !== ""){
        var hash = MD5(password);

        $.ajax({
            type: "POST",
            dataType: 'json',
            url: ROOT_URL + "/member/login",
            data: {
                email: email,
                username: email,
                password: hash
            },
            success: function(response){
                if(response.result){
                    window.location.href = ROOT_URL + "/dashboard";
                }else{
                    alert("error");
                }
            },
        });
    }
}


function doSubmitRegister(event){
    event.preventDefault();

    var email = $("#username").val();
    var password = $("#password").val();

    alert(email + password);

    if(email !== "" && password !== ""){
        var hash = MD5(password);

        $.ajax({
            type: "POST",
            dataType: 'json',
            url: ROOT_URL + "/member/",
            data: {
                email: email,
                username: email,
                password: hash
            },
            success: function(response){
                if(response.result){
                    window.location.href = ROOT_URL + "/login";
                }else{
                    alert("error");
                }
            },
        });
    }
}