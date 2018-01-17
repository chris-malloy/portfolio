$(document).ready(() => {
    $(".button-collapse").sideNav();
    $('#splash').hide();
    // $('#loading').hide();
    setTimeout(() => {
        $('#loading').fadeOut();
        $('#splash').fadeIn(1000);
    }, 1000)
});

