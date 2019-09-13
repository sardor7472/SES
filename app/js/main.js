$(document).ready(function () {
    $('.main-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });

    $('.partner-slider').owlCarousel({
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                loop: false,
                center: false
            },
            576: {
                items: 3,
                center: true,
                loop: true
            },
            992: {
                items: 5,
                center: true,
                loop: true
            }
        }
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

    // modal
    $('.open-modal').on('click', function (e) {
        e.preventDefault();
        var content = $($(this).data('target') + ' div').clone()[0];
        swal(content, {
            button: false,
            className: 'request-modal'
        });
        $('.close-modal').on('click', function () {
            swal.close()
        })
        // modal
    });

    // burger
    $('.burger').on('click', function () {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('blocked')
    })
    // burger


});

// menu line

function findActiveLink(activeMenu) {
    var lineWidth = activeMenu.width() ? activeMenu.width() + 'px' : 0;
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
