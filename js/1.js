$(document).ready(function() {
    $("#img1").fadeOut(1500);
    $("#img1").fadeIn(2300);
    $("#b1").mouseenter(function() {
        $("#p1").css({
            "transition": "color 3s, background-color 3s",
            "color": "rgb(84,178,169)",
            "background-color": "rgba(0, 51, 51, .15)"
        });
        $("#b1").css({
          "background-color": "rgba(0, 85, 85, .05)"
        })
    });
    $("#b1").mouseleave(function() {
        $("#p1").css({
            "color": "rgba(174,140,140,.5)",
            "background-color": "rgba(0, 51, 51, .5)"
        });
    });
})
