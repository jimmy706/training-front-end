$(document).ready(function() {
  const searchToggle = $("#search-toggle");
  searchToggle.click(function() {
    const target = $(this.dataset["target"]);
    if (!target.hasClass("active")) {
      target.addClass("active");
      searchToggle.addClass("on-open");
    } else {
      target.removeClass("active");
      searchToggle.removeClass("on-open");
    }
  });
});
