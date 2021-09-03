$(document).ready(function() {

    $('.preload').remove();

    $('#welcome').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        nav: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        navText: ['<svg height="512pt" viewBox="0 0 512 511" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m143.871094 512.484375c-10.398438 0-20.597656-4.0625-28.28125-11.734375l-97.960938-97.753906c-11.367187-11.34375-17.628906-26.433594-17.628906-42.492188s6.261719-31.152344 17.628906-42.496094l97.960938-97.753906c11.511718-11.492187 28.664062-14.886718 43.695312-8.652344 15.011719 6.226563 24.710938 20.742188 24.710938 36.976563v91.921875c158.804687 0 288.003906-129.199219 288.003906-288.003906v-31.996094c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v31.996094c0 87.613281-34.117188 169.984375-96.070312 231.9375-61.953126 61.949218-144.320313 96.070312-231.933594 96.070312-22.058594 0-40.003906-17.945312-40.003906-40v-91.925781c0-.003906 0-.007813 0-.011719-.03125-.015625-.070313-.03125-.105469-.042968-.011719.015624-.027344.027343-.042969.042968l-97.960938 97.757813c-3.792968 3.785156-5.882812 8.820312-5.882812 14.179687s2.089844 10.394532 5.882812 14.179688l97.960938 97.753906.042969.042969c.035156-.011719.074219-.023438.105469-.039063 0-.003906 0-.007812 0-.015625v-21.921875c0-11.046875 8.957031-20 20.003906-20 11.042968 0 20 8.953125 20 20v21.921875c0 16.234375-9.699219 30.75-24.710938 36.976563-4.996094 2.074218-10.230468 3.082031-15.414062 3.082031zm0 0"/></svg>', '<svg height="512pt" viewBox="0 0 512 511" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m143.871094 512.484375c-10.398438 0-20.597656-4.0625-28.28125-11.734375l-97.960938-97.753906c-11.367187-11.34375-17.628906-26.433594-17.628906-42.492188s6.261719-31.152344 17.628906-42.496094l97.960938-97.753906c11.511718-11.492187 28.664062-14.886718 43.695312-8.652344 15.011719 6.226563 24.710938 20.742188 24.710938 36.976563v91.921875c158.804687 0 288.003906-129.199219 288.003906-288.003906v-31.996094c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v31.996094c0 87.613281-34.117188 169.984375-96.070312 231.9375-61.953126 61.949218-144.320313 96.070312-231.933594 96.070312-22.058594 0-40.003906-17.945312-40.003906-40v-91.925781c0-.003906 0-.007813 0-.011719-.03125-.015625-.070313-.03125-.105469-.042968-.011719.015624-.027344.027343-.042969.042968l-97.960938 97.757813c-3.792968 3.785156-5.882812 8.820312-5.882812 14.179687s2.089844 10.394532 5.882812 14.179688l97.960938 97.753906.042969.042969c.035156-.011719.074219-.023438.105469-.039063 0-.003906 0-.007812 0-.015625v-21.921875c0-11.046875 8.957031-20 20.003906-20 11.042968 0 20 8.953125 20 20v21.921875c0 16.234375-9.699219 30.75-24.710938 36.976563-4.996094 2.074218-10.230468 3.082031-15.414062 3.082031zm0 0"/></svg>'],
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
    $('[data-delay]').each(function() {
        $(this).css({
            'animation-delay': $(this).data('delay')
        });
    });

    function animateInView(el, ob) {
        $el = $(el);
        $el.addClass('animate__animated').css({
            'animation-name': $el.data('animation-view'),
            '-webkit-animation-fill-mode': 'backwards',
            'animation-fill-mode': 'backwards',
            opacity: 1


        });
        ob.unobserve(el);
    }

    function preloadImages(image, ob) {
        var $img = $(image);
        $img.attr('src', $img.data('src'))
            .css({
                opacity: 1
            });

        ob.unobserve(image);
    }

    var animations = $('[data-animation-view]');
    var options = {
        margin: '0px',
        threshold: 0.65
    };
    var observer = new IntersectionObserver(function(entries, ob) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateInView(entry.target, ob);
            }

        });
    }, options);

    animations.each(function() {
        observer.observe(this);
    });

    var images = $('[data-src]');
    var imageOptions = {
        margin: '0 0 300px 0'
    };
    var imgObserver = new IntersectionObserver(function(entries, ob) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                preloadImages(entry.target, ob);
            }
        });
    }, imageOptions);

    images.each(function() {
        imgObserver.observe(this);
    });

    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('#quote').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        nav: false,
        navSpeed: 1000,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        if (scrolled >= $('.features').offset().top) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});