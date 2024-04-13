var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).on("resize", function () {
  var newWidth = $(window).width();
  var newHeight = $(window).height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  var seconds = Math.abs((+new Date() - date.getTime()) / 1000);
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var hours = Math.floor(seconds / 3600);
  if (hours < 10) {
    hours = "0" + hours;
  }
  seconds = seconds % 3600;
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = Math.floor(seconds % 60);
  seconds = (seconds + "").replace(/\.\d*/, "");
  var result =
    '<span class="digit">' +
    Math.abs(days) +
    '</span> days <span class="digit">' +
    Math.abs(hours) +
    '</span> hours <span class="digit">' +
    Math.abs(minutes) +
    '</span> minutes <span class="digit">' +
    Math.abs(seconds) +
    "</span> seconds";
  $("#clock").html(result);
}
