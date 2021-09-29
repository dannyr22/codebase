$(document).ready(function () {
  const $arrowSelector = $(".arrow-selector");
  const $accordion = $(".accordion__individual");

  $($accordion).on("click", function () {
    // $(this).children(".accordion__individual--secondary").toggleClass("active");
    $(this).children(".accordion__individual--secondary").toggle(500);
    $(this).find($arrowSelector).toggleClass("arrow-active");
    // $(this).children(".accordion__individual--secondary").css({
    //   display: "block",
    //   transform: "translateY(100%)",
    //   "transition-duration": "0.5s",
    // });

    if ($arrowSelector.hasClass("arrow-active")) {
      $(this).find($arrowSelector).css({
        transform: "rotate(90deg)",
        "transition-duration": "0.5s",
      });
    } else {
      $(this).find($arrowSelector).css({
        transform: "rotate(-90deg)",
        "transition-duration": "0.5s",
      });
    }
    // setTimeout(() => {
    //   $(this).find($arrowSelector).removeClass("arrow-rotate");
    // }, 600);
  });
});
