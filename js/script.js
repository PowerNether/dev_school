$(".game-tab__item").on("click tap", function () {
  $(".game-tab__item").removeClass("active");
  $(this).addClass("active");
  $(".image-game1, .image-game2, .image-game3, .image-game4, .image-game5, .image-game6, .image-game7, .image-game8, .image-game9, .image-game10, .image-game11").css("display", "none");
  $($(this).attr("data-src")).css("display", "block");
});
$(".child-list__chest").on("click tap", function () {
  $(".child-list__chest").addClass("chest");
  setTimeout(function () {
    $(".child-list__chest").attr("src", "./img/chest.gif");
  }, 1000);
});
