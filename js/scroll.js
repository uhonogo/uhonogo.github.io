var submitted=false;
$('#form').on('submit', function(e) {
  $('#form *').fadeOut(2000);
  $('#form').prepend('Your submission has been processed...');
  });