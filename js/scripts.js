$(document).ready(function() {
  $(".clickable").click(function() {
    $(".kiwi-showing").toggle();
    $(".kiwi-hidden").toggle();
  });
});


$(document).ready(function(){
    $(".kiwi2").click(function(){
        $("img").fadeOut()
    });
    $(".kiwi2").click(function(){
        $("img").fadeIn();
    });
});
