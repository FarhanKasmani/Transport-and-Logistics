$(function(){
  $('.col-5').on('click', function(e) {
    e.preventDefault();
    console.log("Hello");
    var $el = $(this).siblings('.valOfLabel');
    var $prevValue = $el.children().text();
    console.log($el.children().value);

    if ($el.children().attr('value') == 'db') {
      $el.html(function() {
        return '<input type="date" value="db">';
      });
    } else if ($el.children().attr('value') == 'email') {
      $el.html(function() {
        return '<input type="email" value="email">';
      });
    } else if ($el.children().attr('value') == 'textarea') {
      $el.html(function() {
        return '<textarea value="textarea"></textarea>';
      });
    } else {
      $el.html(function() {
        return '<input type="text" value="text">';
      });
    }

    $el.children().val($prevValue);
    $el.children().select();
    $(this).children().remove();
  });

  // Here ajax call is need to be made to server to update the database
  $('.col-75').on('focusout', function(e) {
    $afterVal = $(this).children().val();
    $value = $(this).children().attr('value')
    $(this).html(function() {
      return "<label value='" + $value + "'>"+$afterVal+"</label>";
    });
    $(this).siblings('.col-5').html(function() {
      return "<i class='fa fa-pencil icon-color-default' aria-hidden='true'></i>"
    });
  });

  $('.row').mouseover(function(e) {
    $(this).children('.col-5').children().css({
      'color': '#000000'
    });
  })

  $('.row').mouseout(function(e) {
    $(this).children('.col-5').children().css({
      'color': '#94989e'
    });
  })
})

// <input type="text" id="lname" name="lastname" placeholder="Your last name..">
