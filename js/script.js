$('[type="submit"]').click(function() {
  $.post( 
  
  "submit.php", //url
  
  {
    email: $('[name="email"]').val(),
    name: $('[name="name"]').val(),
    phone: $('[name="phone"]').val(),
    message: $('[name="message"]').val()
  }, 
  
  function( data ) {
    $( ".result" ).html(data);
  }
  
  );
});