$(function(){
  console.log("Hello");
  $('.dropdown-content a').on('click', function(e) {
    e.preventDefault();
    $str = $(this).attr('class');
    callPage($str);
  });

  function callPage(str) {
    $.ajax({
      url: 'temp.html',
      type: "GET",
      dataType: "text",
      success: function(response) {
        console.log("The page was loaded");
      },
      error: function(error) {
        console.log("Error occured");
      }
    });
  }
});
