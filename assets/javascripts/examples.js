$(document).ready(function(){
  $('.version').click(function(){
    var callType = $(this).attr('id');
    if(callType == "basic"){
      $('.advanced').slideUp(350);
      $('#advanced').removeClass('active');
      $(this).addClass('active');
    }
    if(callType == "advanced"){
      $('.advanced').slideDown({queue: false}, 350);
      $('#basic').removeClass('active');
      $(this).addClass('active');
    }
  });
  // CVC Input security
  $("input[name='card_cvc']").focus(function(){$(this).attr('type','text');});
  $("input[name='card_cvc']").blur(function(){$(this).attr('type','password');});
  // Input formats
  // Cards
  $('input[name="card_number"]').formatter({
    'pattern': '{{9999}} {{9999}} {{9999}} {{9999}}'
  });
  $('input[name="card_exp"]').formatter({
    'pattern': '{{99}} / {{99}}'
  });
  $('input[name="card_cvc"]').formatter({
    'pattern': '{{999}}'
  });
});