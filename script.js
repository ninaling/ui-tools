$(document).ready(function(){
  $('.pixels-display').text($(window).width()+', '+$(window).height());

  $(window).resize(function() {
    $('.pixels-display').text($(window).width()+', '+$(window).height());
  });
});
