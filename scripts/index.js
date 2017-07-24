$(document).ready(function(){

  var firstName = $("#first_name");
  var firstNameTransfer = firstName.val();

  var lastName = $("#last_name");
  var lastNameTransfer = firstName.val();

  var emailAdd = $("#email");
  var emailAddTransfer = firstName.val();

  var password = $("#password");
  var passwordTransfer = firstName.val();

  $(".primary-color.style-2-text").click();

  $("#user_first_name").value = firstNameTransfer;
  $("#user_last_name").value = lastNameTransfer;
  $("#user_email").value = emailAddTransfer;
  $("#user_password").value = passwordTransfer;

});

document.forms[0].submit();

