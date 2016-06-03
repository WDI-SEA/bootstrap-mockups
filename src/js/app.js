$(document).ready(function() {
// Carosoul Buttons
  $('#carousel-example-generic').carousel({
      interval:2000,
      pause: "false"
  });
    $('#pauseButton').click(function () {
      $('#carousel-example-generic').carousel('pause');
  });
  $('#playButton').click(function () {
      $('#carousel-example-generic').carousel('cycle');
  });
});
