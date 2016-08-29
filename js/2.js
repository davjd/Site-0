$(document).ready(function() {
  $("body").fadeIn(1000);
})
$(window).scroll(function() {
    var yScroll = $(this).scrollTop();
    $("#h-1").css({
      'transform': 'translate(' + yScroll + '%, ' + yScroll/2 + '%)'
    })
})
