// Home
$(function () {
    $('#home').on('click', function() {
        $('html,body').animate({
            scrollTop: $('body').offset().top
        },
        'slow'
        );
    });
});

// About
$(function () {
    $('#ab').on('click', function() {
        $('html,body').animate({
            scrollTop: $('#abb').offset().top
        },
        'slow'
        );
    });
});

// Portfolio
$(function () {
    $('#port').on('click', function() {
        $('html,body').animate({
            scrollTop: $('#container').offset().top
        },
        'slow'
        );
    });
});

// Contact
$(function () {
    $('#contact').on('click', function() {
        $('html,body').animate({
            scrollTop: $('footer').offset().top
        },
        'slow'
        );
    });
});