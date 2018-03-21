$(document).ready(function () {
  var image_zoom = $("<div id='image-zoom'><img src=''></img></div>");
  $("body").append(image_zoom);
  $(".cards > li > img").click(function () {
    $(image_zoom).find("img").attr("src", $(this).attr("src"));
    image_zoom.fadeIn("fast");
  });
  image_zoom.click(function () {
    $(this).fadeOut("fast");
  });
});
