$(document).ready(function () {
  const $arrowSelector = $(".arrow-selector");
  const $accordion = $(".accordion__individual");

  $($accordion).on("click", function () {
    $(this).children(".accordion__individual--secondary").toggleClass("active");
    $(this).find($arrowSelector).addClass("arrow-rotate");
    $(this).find($arrowSelector).addClass("arrow-rotate-back");
    setTimeout(() => {
      $(this).find($arrowSelector).removeClass("arrow-rotate");
    }, 600);
  });
});
