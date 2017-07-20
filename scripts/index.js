$(document).ready(function(){

  var firstName = $("#first_name");
  var firstNameTransfer = firstName.val();

  var lastName = $("#last_name");
  var lastNameTransfer = firstName.val();

  var emailAdd = $("#email");
  var emailAddTransfer = firstName.val();

  var password = $("#password");
  var passwordTransfer = firstName.val();

  $("#lp-pom-button-12").click(function(){

    var url = "https://signup.thanx.com/splash/join/start"
    url = url.substring(0, url.indexOf('?'));
    window.location.href = url;

  });

  $(document).ready(function(){

    $(".primary-color.style-2-text").click();

    $("#user_first_name").val(firstNameTransfer);
    $("#user_last_name").val(lastNameTransfer);
    $("#user_email").val(emailAddTransfer);
    $("#user_password").val(passwordTransfer);

    $("btn.btn-primary.full-width").click();

  });

});

