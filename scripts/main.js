$(document).ready(function () {
    //part1
    $('.error').hide();
    //part2
    $('.input-group').filter(':even').addClass('even');
    //part3
    $("#firstName").on("blur", function () {
        var input = $(this);
        var errorMsg = input.closest('.input-group').find('.requiredMsg');
        if (input.val() === "") {
            errorMsg.fadeIn();
        } else {
            errorMsg.fadeOut();
        }
    });
    //part4
    $("#lastName").on("blur", function () {
        var input = $(this);
        var errorMsg = input.closest('.input-group').find('.requiredMsg');
        if (input.val() === "") {
            errorMsg.fadeIn();
        } else {
            errorMsg.fadeOut();
        }
    });
    //part5
    $("#emailAddress").on("blur", function () {
        var input = $(this);
        var errorMsg = input.closest('.input-group').find('.requiredMsg');
        if (input.val() === "") {
            errorMsg.fadeIn();
        } else {
            errorMsg.fadeOut();
        }
    });
    //part6
    $("#emailAddress").on("blur", function () {
        var input = $(this);
        var errorMsg = input.closest('.input-group').find('.emailMsg');
        if ((input.indexOf("@") > -1) && (input.lastIndexOf(".") === "")) {
            errorMsg.fadeIn();
        } else {
            errorMsg.fadeOut();
        }

    })

});