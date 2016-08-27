$(document).ready(function() {
    $("#b1").mouseenter(function() {
        $("#p1").css("transition", "color 3s");
        $("#p1").css("color", "yellow");
    });
    $("#b1").mouseleave(function() {
        $("#p1").css("color", "rgba(174,140,140,.5)");
    });
})
