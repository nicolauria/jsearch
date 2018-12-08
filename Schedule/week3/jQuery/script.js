const $firstLi = $("#first-li");
$firstLi.hover(
  function() {$(this).css("color", "yellow")},
  function() {$(this).css("color", "red")}
);
