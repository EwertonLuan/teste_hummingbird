
$(document).ready(function () {
    $('.header-icon').on('click', function(e) {
        e.preventDefault();
        $('nav').toggleClass('activated');
    });
});

