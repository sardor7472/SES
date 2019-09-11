$(document).ready(function () {
    $('.main-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });

    $('.partner-slider').owlCarousel({
        items: 5,
        dots: true,
        loop:  true,
        margin: 10,
        center: true
    });



    // menu line
    findActiveLink($('.header-nav-link li.active'));
    $('.header-nav-link-item').on('mouseover', function () {
        var lineWidth = $(this).width() + 'px';
        var leftPosition = parseInt($(this).css('marginLeft')) + $(this).position().left + 'px';
        menuLine(lineWidth, leftPosition)
    });
    $('.header-nav-link ul').on('mouseleave', function () {
        var activeMenu = $(this).find('li.active');
        findActiveLink(activeMenu)
        // menu line
    });


});

// menu line

function findActiveLink (activeMenu) {
    var lineWidth = activeMenu.width() ? activeMenu.width() + 'px': 0;
    var leftPosition = activeMenu.css('marginLeft') ? parseInt(activeMenu.css('marginLeft')) + activeMenu.position().left + 'px' : 0;
    menuLine(lineWidth, leftPosition)
}


function menuLine(width, position) {
    var line = $('#line');
    line.css({
        width: width,
        left: position
    });
}
// menu line
