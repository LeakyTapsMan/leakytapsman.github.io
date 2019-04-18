ScrollReveal().reveal('.load-hidden');
ScrollReveal().reveal('.reveal-delayed', { delay: 300, distance: '50px' });

$(function() {
    toggleStickyHeader();

    window.addEventListener('scroll', function(e) { 
        toggleStickyHeader();
    });
});

// Morph logo on scroll
function toggleStickyHeader() {
    if (window.pageYOffset > 0) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    if (window.pageYOffset > 600) {
        $('.scroll-top').addClass('visible');
    } else {
        $('.scroll-top').removeClass('visible');
    }
}

// Prevent form label overlapping text
$('.form-group input, .form-group textarea').on('input', function () {
    if ($(this).val()) {
        $(this).addClass('filled');
    } else {
        $(this).removeClass('filled');
    }
});