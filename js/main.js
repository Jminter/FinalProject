$(document).ready(function () {

    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "email_2": {
                required: true,
                equalTo: "#email_1"
            },
            "full_name": {
                required: true
            }
        },

        messages: {
            "email_1": {
                required: "Enter a email address!",
                email: "Enter a VALID email address!"
            },
            "email_2": {
                required: "Re-enter you email address",
                equalTo: "Your email address doens't match"
            },
            "full_name": {
                required: "Enter your name"
            }
        }
    });
    $("#Home").hover(function () {
        $("#Home").css("background-color", "white")
    }, function () { // mouse-leave
        $("#Home").css("background-color", "");
    });
    $("#Menu").hover(function () {
        $("#Menu").css("background-color", "white")
    }, function () { // mouse-leave
        $("#Menu").css("background-color", "");
    });
    $("#Contact").hover(function () {
        $("#Contact").css("background-color", "white")
    }, function () { // mouse-leave
        $("#Contact").css("background-color", "");
    });
    $("#AboutUs").hover(function () {
        $("#AboutUs").css("background-color", "white")
    }, function () { // mouse-leave
        $("#AboutUs").css("background-color", "");
    });


    $(window).load(function () {
        var pages = $('#container9 li'), current = 0;
        var currentPage, nextPage;

        $('#container9 .button').click(function () {
            currentPage = pages.eq(current);
            if ($(this).hasClass('prevButton')) {

                if (current <= 0)
                    current = pages.length - 1;
                else
                    current = current - 1;
            }
            else {
                if (current >= pages.length - 1)
                    current = 0;
                else
                    current = current + 1;
            }
            nextPage = pages.eq(current);
            currentPage.hide();
            nextPage.show();
        });
    });

});