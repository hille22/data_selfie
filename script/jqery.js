$(document).ready(function(){
  $("#btn-facebook")
  .mouseover(function () {
      $("body").css("background-image", 'url("src/giphy.gif")');
      $("body").css("background-repeat", 'no-repeat');
      $("body").css("background-size", 'cover');
      $(".title").css("color", '#fff');
  });
  $("#btn-facebook")
  .mouseout(function () {
      $("body").css("background-image", 'url("src/background.png")');
      $(".title").css("color", '#000');

  });
});

$(document).ready(function(){
  $("#btn-instagram")
  .mouseover(function () {
    $("body").css("background-image", 'url("src/insta.gif")');
    $("body").css("background-repeat", 'no-repeat');
    $("body").css("background-size", 'cover');
    $(".title").css("color", '#fff');
  });
  $("#btn-instagram")
  .mouseout(function () {
      $("body").css("background-image", 'url("src/background.png")');
      $(".title").css("color", '#000');
  });
});

$(document).ready(function(){
  $("#btn-google")
  .mouseover(function () {
    $("body").css("background-image", 'url("src/google.gif")');
    $("body").css("background-repeat", 'no-repeat');
    $("body").css("background-size", 'cover');

  });
  $("#btn-google")
  .mouseout(function () {
      $("body").css("background-image", 'url("src/background.png")');
    
  });
});

$(document).ready(function(){
  $("#btn-twitter")
  .mouseover(function () {
    $("body").css("background-image", 'url("src/twitter.gif")');
    $("body").css("background-repeat", 'no-repeat');
    $("body").css("background-size", 'cover');

  });
  $("#btn-twitter")
  .mouseout(function () {
      $("body").css("background-image", 'url("src/background.png")');

  });
});
