(function($) {
    "use strict";


    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };

    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true,
            initval: 1,
            verticalupclass: 'fa fa-caret-up',
            verticaldownclass: 'fa fa-caret-down'
        });
        $('.bootstrap-touchspin-up').text('');
        $('.bootstrap-touchspin-down').text('');
    }

    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    function DynamicOverlapeedElem(element, containerClass) {
        var elmnt = $(element);
        if (elmnt.length) {
            var subscribeHeight = elmnt.find(containerClass).outerHeight();
            if ($(window).width() > 992) {
                elmnt.css({ 'margin-top': -(subscribeHeight / 2) });
            } else {
                elmnt.css({ 'margin-top': 0 });
            }
        }
    }

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };


    if ($('.main-navigation .navigation-box .submenu').length) {
        var subMenu = $('.main-navigation .submenu');
        subMenu.parent('li').children('a').append(function() {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var mainNavToggler = $('.header-navigation .menu-toggler');
        var subNavToggler = $('.main-navigation .sub-nav-toggler');
        mainNavToggler.on('click', function() {
            var Self = $(this);
            var menu = Self.closest('.header-navigation').find(Self.data('target'));
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
        subNavToggler.on('click', function() {
            var Self = $(this);
            Self.parent().parent().children('.submenu').slideToggle();
            return false;
        });
    }
    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }

    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };


    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    }

    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }




    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }

    if ($('.contact-form-vaidated').length) {
        $('.contact-form-vaidated').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                },
                booking_date: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    $(form).find('.mc-success').fadeOut(5000);
                    $(form).find('.mc-error').fadeOut(5000);
                    $(form).find('.error').fadeOut(5000);
                    $(form).find('.success').fadeOut(5000);
                });
                return false;
            }
        });
    }

    if ($('.testimonials-one__carousel').length) {
        var testiOneCarousel = $('.testimonials-one__carousel');
        var dotsBlock = $('.testimonials-one__carousel-dots-block');

        // dynamic count for carousel
        testiOneCarousel.on('initialize.owl.carousel changed.owl.carousel', function(e) {
            var idx = e.item.index;
            var carouselCount = e.item.count;

            if (!e.namespace) {
                return;
            }

            var carousel = e.relatedTarget;
            dotsBlock.find('.testimonials-one__carousel-dot').removeClass('active');
            dotsBlock.find('.testimonials-one__carousel-dot').eq(carousel.relative(carousel.current())).addClass('active');

        }).owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        dotsBlock.on('click', '.testimonials-one__carousel-dot', function(e) {
            testiOneCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    }

    if ($('.testimonials-two__carousel').length) {
        var testiOneCarousel = $('.testimonials-two__carousel');
        var dotsBlock = $('.testimonials-two__carousel-dots-block');

        // dynamic count for carousel
        testiOneCarousel.on('initialize.owl.carousel changed.owl.carousel', function(e) {
            var idx = e.item.index;
            var carouselCount = e.item.count;

            if (!e.namespace) {
                return;
            }

            var carousel = e.relatedTarget;
            dotsBlock.find('.testimonials-two__carousel-dot').removeClass('active');
            dotsBlock.find('.testimonials-two__carousel-dot').eq(carousel.relative(carousel.current())).addClass('active');

        }).owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        dotsBlock.on('click', '.testimonials-two__carousel-dot', function(e) {
            testiOneCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    }

    if ($('.testimonials-three__carousel').length) {
        var testiOneCarousel = $('.testimonials-three__carousel');
        testiOneCarousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if ($('.testimonials-threee__carousel').length) {
        var testiOneCarousel = $('.testimonials-threee__carousel');
        testiOneCarousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    
    if ($('.testimonials-threeee__carousel').length) {
        var testiOneCarousel = $('.testimonials-threeee__carousel');
        testiOneCarousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }


    if ($('.brand-one__carousel').length) {
        $('.brand-one__carousel').owlCarousel({
            loop: true,
            margin: 80,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                767: {
                    items: 4
                },
                991: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    if ($('.related-product__carousel').length) {
        $('.related-product__carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if ($('.side-menu__toggler').length) {
        $('.side-menu__toggler').on('click', function(e) {
            $('.side-menu__block').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function(e) {
            $('.side-menu__block').removeClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function(e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function(e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }

    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });
    $(window).on('load', function() {

        
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item',

            });
        }
        if ($('.masonary-layout-no-grid-width').length) {
            $('.masonary-layout-no-grid-width').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item'
            });
        }

        if ($('.post-filter').length) {
            var postFilterList = $('.post-filter li');
            // for first init
            $('.filter-layout').isotope({
                filter: '.filter-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            // on click filter links
            postFilterList.children('span').on('click', function() {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                postFilterList.children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function() {
                var filterElement = $(this).data('filter');
                var count = $('.gallery-content').find(filterElement).length;
                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        }

        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
            $('body').css('overflow-y','auto')
        }
        DynamicOverlapeedElem('.subscribe-one', '.inner-container');




        if ($('.banner-carousel__one').length) {

            var myCarousel = $('.banner-carousel__one');
            var singleItem = '.banner-one__slide';
            var nextBtn = $('.banner-carousel-btn .left-btn');
            var prevBtn = $('.banner-carousel-btn .right-btn');
            var textCountWrap = $('.carousel-number-count');
            var dotsBlock = $('.carousel-dots-block');

            if (myCarousel.data('carousel-in-anim') !== undefined) {
                var carouselInAnim = myCarousel.data('carousel-in-anim');
            } else {
                var carouselInAnim = 'fadeIn';
            }

            if (myCarousel.data('carousel-out-anim') !== undefined) {
                var carouselOutAnim = myCarousel.data('carousel-out-anim');
            } else {
                var carouselOutAnim = 'slideOutDown';
            }

            // dynamic count for carousel
            myCarousel.on('initialized.owl.carousel changed.owl.carousel', function(e) {
                var idx = e.item.index;
                var carouselCount = e.item.count;
                var carousel = e.relatedTarget;

                if (!e.namespace) {
                    return;
                }
                var text = '<span class="current-number">' + '0' + (carousel.relative(carousel.current()) + 1) + '</span>' + '<span class="sep">/</span>' + '<span class="counted-number">' + '0' + carousel.items().length + '</span>';
                textCountWrap.html(text);
                var dotIndex = carousel.relative(carousel.current());
                dotsBlock.find('li').removeClass('active');
                dotsBlock.find('li').eq(dotIndex).addClass('active');

            }).owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                autoplay: 3000,
                autoplayHoverPause: true,
                
            
            });

            


            nextBtn.on('click', function() {
                myCarousel.trigger('next.owl.carousel', [300]);
                return false;
            });
            prevBtn.on('click', function() {
                myCarousel.trigger('prev.owl.carousel', [300]);
                return false;
            });

            // making thumbnail to owl dots
            var thumbCount = myCarousel.find('.owl-dot').length;
            for (var i = 0; i < thumbCount; i++) {
                var newIdx = i + 2;
                var itemThumb = myCarousel.find(singleItem).eq(newIdx).data('thumb');
                myCarousel.find('.owl-dot').eq(i).find('span').css('background-image', 'url(' + itemThumb + ')');
            }


            dotsBlock.on('click', 'li', function(e) {
                myCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
            });

        }



        if ($('.side-menu__block-inner').length) {
            $('.side-menu__block-inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }


        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function(e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function() {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function() {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }

    });
    $(window).on('resize', function() {
        DynamicOverlapeedElem('.subscribe-one', '.inner-container');

    });

})(jQuery);