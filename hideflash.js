$("#chinfo").click(function(event) {
    event.preventDefault();
    $(".my-notify-info").hide(200);
});
$("#chsuccess").click(function(event) {
    event.preventDefault();
    $(".my-notify-success").hide(200);
});
$("#chwarning").click(function(event) {
    event.preventDefault();
    $(".my-notify-warning").hide(200);
});
$("#cherror").click(function(event) {
    event.preventDefault();
    $(".my-notify-error").hide(200);
});