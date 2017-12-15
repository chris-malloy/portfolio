$(document).ready(() => {
    $('#splash').hide();
    // $('#loading').hide();
    setTimeout(() => {
        $('#loading').fadeOut();
        $('#splash').fadeIn(1000);
    }, 1000)
})