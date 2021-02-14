//----------------------------------- ARTICLE - 1 ------------------------------------------
$('.small-img').hover(function () {
  var imageSrc = $(this).attr('src');
  $('#main-img').attr('src', imageSrc);
});

//----------------------------------- REGISTER ------------------------------------------
$('.needs-validation').submit(function () {
  $('.invalid-feedback').hide();
  var isValid = true;
  if ($('#username-input').val() === '') {
    $('#username-error').show();
    isValid = false;
  }
  if ($('#psw1').val() === '') {
    $('#psw1-error').show();
    isValid = false;
  }
  if ($('#psw1').val().length < 8) {
    $('#psw1-length-error').show();
    isValid = false;
  }
  if ($('#psw2').val() === '') {
    $('#psw2-error').show();
    isValid = false;
  }
  if ($('#psw1').val() != $('#psw2').val()) {
    $('.psw-match-error').show();
    isValid = false;
  }
  if ($('#first-name-input').val() === '') {
    $('#first-name-error').show();
    isValid = false;
  }
  if ($('#country-input option:selected').text() === 'Country*') {
    $('#country-error').show();
    isValid = false;
  }
  if ($('#terms-conditions').prop('checked') === false) {
    $('#terms-conditions-error').show();
    isValid = false;
  }
  return isValid;
});


//----------------------------------- CHAT ------------------------------------------
$('.btn').on('click', function () {
  var d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
  $('#message-output').append('<span>' + $('#username').val() + '</span>');
  $('#message-output').append('<span>' + date + '</span>');
  $('#message-output').append('<p>' + $('#message-input').val() + '</p>');
  $('#message-output').append('<hr>');
  $('#username').val('');
  $('#message-input').val('');
});