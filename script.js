// const length = document.querySelectorAll(".arrow-active");
// const accordion = document.querySelector(".accordion__individual");

// accordion.addEventListener("click", function () {
//   console.log(length);
// });

$(document).ready(function () {
  const $arrowSelector = $(".arrow-selector");
  const $accordion = $(".accordion__individual");
  let number = 0;
  $($accordion).on("click", function () {
    $(this).toggleClass("clicked");
    console.log("accordion", $accordion[0]);
    // $(this).children(".accordion__individual--secondary").toggleClass("active");
    // if ($arrowSelector.hasClass("arrow-active") && number >= 0) {

    // if ($arrowSelector.hasClass("arrow-active")) {
    //   number + 1;
    // } else if (number > 1) {
    //   number - 1;
    // }

    // if (number <= 2) {
    //   $(this).children(".accordion__individual--secondary").toggle(500);

    //   $(this).find($arrowSelector).toggleClass("arrow-active");
    //   $(this).find($arrowSelector).toggleClass("arrow-de-active");
    // }
    // if (
    //   $accordion[0].classList.contains("clicked") ||
    //   $accordion[1].classList.contains("clicked")
    // ) {
    $(this).children(".accordion__individual--secondary").toggle(500);
    // } else {
    //   console.log("both elements are clicked");
    // }
    if (
      $accordion[0].classList.contains("clicked") &&
      $accordion[1].classList.contains("clicked")
    ) {
      $($accordion).unbind("click");
    }
    //   if ($(this).hasClass("arrow-active")) {
    //     $(this).removeClass("arrow-active");
    //     $(this).addClass("arrow-active");
    //   } else {
    //     $(this).addClass("arrow-active");
    //     $(this).removeClass("arrow-active");
    //   }
    $(this).find($arrowSelector).toggleClass("arrow-active");
    $(this).find($arrowSelector).toggleClass("arrow-de-active");
    // }
    console.log("number", number);
    // $(this).children(".accordion__individual--secondary").css({
    //   display: "block",
    //   transform: "translateY(100%)",
    //   "transition-duration": "0.5s",
    // });

    // if ($arrowSelector.hasClass("arrow-active")) {
    //   $(this).find($arrowSelector).css({
    //     transform: "rotate(90deg)",
    //     "transition-duration": "0.5s",
    //     "transform-origin": "center",
    //   });
    // } else {
    //   $(this).find($arrowSelector).css({
    //     transform: "rotate(-90deg)",
    //     "transition-duration": "0.5s",
    //     "transform-origin": "center",
    //   });
    // }
    // setTimeout(() => {
    //   $(this).find($arrowSelector).removeClass("arrow-rotate");
    // }, 600);
  });
});
