$(function() {
  $('#contact-edit').on('click', function(e){
    e.preventDefault();
    var $el = $(this).siblings('.col-8').children('.form-control');
    var $prevValue = $el.attr('placeholder');
    console.log($prevValue);
    $el.attr('placeholder', '');
    $el.removeAttr('disabled');
    $el.val($prevValue);
    $el.select();
    $(this).css('color', 'white');
    $(this).css('cursor', '');
  })

  $('.contact-edit-input').on('focusout', function(e) {
    console.log("gzg");
    var $newVal = $(this).val();
    $(this).val('');
    console.log($newVal);
    $(this).attr('disabled', '');
    $(this).attr('placeholder', $newVal);
    $('#contact-edit').css('color', '');
    $('#contact-edit').css('cursor', 'pointer');
  })
})
