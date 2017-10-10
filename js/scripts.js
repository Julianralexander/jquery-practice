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

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    alert("Julian thinks you're hot") }) ;
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    alert("Julian doesn't know if you're hot") }) ; 
});
