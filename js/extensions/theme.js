(function ($) {
    'use strict';
    var folioSlider01 = $('.folioSlider01'),
        folioSlider02 = $('.folioSlider02'),
        servicesSlider01 = $('.servicesSlider01'),
        testi_slider01 = $('.testimonialslider01'),
        testi_slider02 = $('.testimonialslider02'),
        helpSlider = $('.helpSlider'),
        chooseSlider = $('.chooseSlider'),
        popup_video = $('.popup_video'),
        popup_img = $('.popup_img'),
        funfact = $('.funfact'),
        select = $('.input-field select');
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '880',
        
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 150,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 150,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
    });
      if (servicesSlider01.length > 0) {
        var servicesSlider01_obj = servicesSlider01.owlCarousel({
            autoplay: true,
            loop: true,

            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            dots: false,
            smartSpeed: 600,
            items: 3,
            responsive: {
                0: {
                    margin: 30,

                    items: 1
                    
                },
                768: {
                    margin: 30,

                    items: 2
                },
                1024: {
                    margin: 30,

                    items: 3
                },
            }
        });
    }


    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '850',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 700,
                hide_onleave: false,
                left: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: -80,
                    v_offset: 47
                },
                right: {
                    container: "layergrid",
                    h_align: "right",
                    v_align: "center",
                    h_offset: -80,
                    v_offset: -47
                }
            },
            bullets: {
                enable: false
            }
        },
    });
    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1220, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            bullets: {
                enable: true,
                style: 'metis',
                hide_onmobile: true,
                hide_under: 700,
                h_align: "right",
                v_align: "bottom",
                h_offset: 180,
                hide_onleave: false,
                v_offset: 60,
                space: 15,
                tmp: '<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
            },
            arrows: {
                enable: false,
            }
        },
    });
    if (folioSlider01.length > 0) {
        var folioSlider01_obj = folioSlider01.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: false,
            smartSpeed: 500,
            dots: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if (folioSlider02.length > 0) {
        var folioSlider02_obj = folioSlider02.owlCarousel({
            margin: 0,
            autoplay: false,
            loop: true,
            nav: true,
            navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
            smartSpeed: 500,
            dots: false,
            items: 1
        });
    }
    if (testi_slider01.length > 0) {
        var testi_slider01_obj = testi_slider01.owlCarousel({
           loop:true,
            
            items:1,
            dots: true,

            lazyLoad: true,
            autoplay: true,
            smartSpeed: 600,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    margin: 30,

                    items: 1,
                    stagePadding: 50,

                    
                },
                768: {
                    margin: 30,

                    items: 1,
                    stagePadding: 100,

                },
                1024: {
                    margin: 30,

                    items: 1,
                    stagePadding: 150,

                },
            }
        });
    }
    if (testi_slider02.length > 0) {
        var testi_slider02_obj = testi_slider02.owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="twi-arrow-up1"></i>', '<i class="twi-arrow-down1"></i>'],
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            smartSpeed: 550,
            items: 1,
        });
    }
    if ($(".client-slider").length > 0) {
        $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            dots: false,
            smartSpeed: 600,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    helpSlider.owlCarousel({
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 350,
        items: 1,
        margin: 0,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
    });
    chooseSlider.owlCarousel({
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        smartSpeed: 350,
        items: 1,
        margin: 0,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="twi-arrow-left1"></i>', '<i class="twi-arrow-right1"></i>'],
    });
    if ($(".single_skill").length > 0) {
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;

    function loadSkills() {
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({
                'width': datacount + '%'
            }, 2000);
            $(".ss_parent span", this).animate({
                'left': datacount + '%'
            }, 2000);
            if (coun) {
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: datacount
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    $(window).on('load', function (event) {
        if ($(".circle-skill").length > 0) {
            var ast1 = true;
            $('.circle-skill').appear();
            $('.circle-skill').on('appear', function () {
                if (ast1 == true) {
                    $(".circle-skill").each(function () {
                        var pint = $(this).attr('data-skills');
                        var decs = pint * 100;
                        var grs = $(this).attr('data-gradientstart');
                        var gre = $(this).attr('data-gradientend');
                        var bg = $(this).attr('data-bg');
                        $(this).circleProgress({
                            value: pint,
                            startAngle: -Math.PI / 3 * 1,
                            fill: {
                                gradient: [
                                    [grs, 1],
                                    [gre, .2]
                                ],
                                gradientAngle: Math.PI / 4 * 2
                            },
                            lineCap: 'square',
                            thickness: 4,
                            animation: {
                                duration: 1800
                            },
                            size: 73,
                            emptyFill: bg
                        }).on('circle-animation-progress', function (event, progress) {
                            $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
                        });
                    });
                    ast1 = false;
                }
            });
        }
    });
    $('.counter').appear();
    $(document.body).on('appear', '.counter', function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass('completed')) {
                var $this = $(this);
                var datacount = $(this).attr("data-count") * 1;
                if (datacount > 1000 && datacount % 1000 != 0) {
                    var count = datacount / 1000;
                    count = count.toFixed(1);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: count
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(this.Counter.toFixed(1));
                        }
                    });
                } else if (datacount >= 1000 && datacount % 1000 == 0) {
                    var count = datacount / 1000;
                    $({
                        Counter: 0
                    }).animate({
                        Counter: count
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                } else {
                    var count = datacount;
                    $({
                        Counter: 0
                    }).animate({
                        Counter: count
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }
                $this.addClass('completed');
            }
        });
    });
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({
                bottom: '30px',
                opacity: '1',
                visibility: 'visible'
            });
        } else {
            back.css({
                bottom: '-30px',
                opacity: '0',
                visibility: 'hidden'
            });
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    $('.searchBtn a').on('click', function (e) {
        e.preventDefault();
        $('.searchBtn').toggleClass('active');
    });
    $('.tmsToggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            } else {
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    $(document).on('click', '.menuToggler', function (e) {
        e.preventDefault();
        $('.sidebarMenu').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.sidebarMenuOverlay, .SMACloser').on('click', function () {
        $('.sidebarMenu').removeClass('active');
        $('.menuToggler').removeClass('active');
    });
    $('.SMABody ul li.menu-item-has-children > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent('li.menu-item-has-children').toggleClass('active');
        $(this).siblings('ul.sub-menu').slideToggle();
    });
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow',function(){
                $("body,html").css("overflow","auto")
            });
        }
    });
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };
    if ($("#google_map").length > 0) {
        var map;
        map = new GMaps({
            el: "#google_map",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "assets/images/marker.png",
            animation: google.maps.Animation.DROP,
            title: 'WH. Center',
            infoWindow: {
                content: '<p><span>WH. Center</span>30 Memorial Drive, Avon MA 2322</p>'
            },
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [{
            "featureType": "road",
            "stylers": [{
                "color": "#fde293"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#9cc0f9"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#f4f5f6"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#2c2c2c"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "color": "#9cc0f9"
            }]
        }, {
            "elementType": "labels.text",
            "stylers": [{
                "saturation": 1
            }, {
                "weight": 0.1
            }, {
                "color": "#2c2c2c"
            }]
        }];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }

    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
    $(window).on('load', function () {
        if ($(".shaff_grid").length > 0) {
            var $grid = $('.shaff_grid');
            $grid.shuffle({
                itemSelector: '.shaff_item',
                sizer: '.shaff_size'
            });
            $('.shaff_filter li').on('click', function () {
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    $('.date-picker').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'y-m-d',
        hours12: false,
        step: 30
    });
    $('.time-picker').datetimepicker({
        timepicker: true,
        datepicker: false,
        format: 'H:i',
        hours12: false,
        step: 30
    });
})(jQuery);
function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
        var bgImgUrl = $(this).data('bgimg');
        // console.log(bgImgUrl);
        $(this).css({
            'background-image': 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(' + bgImgUrl + ')', // + meaning concat
        });
    });
}

$(window).on('load', function () {
    dataBackgroundImage();
});
// loginForm();
// function loginForm() {
//     let loginForm = document.getElementById('loginForm');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');

//     var formErrors = [];

//     loginForm.addEventListener('submit', e => {
//         checkInputs();
//         if(formErrors.length) {
//             e.preventDefault();
//         }
//     });

//     function checkInputs()
//     {
//         formErrors = [];
//         // trim to remove the whitespaces
//         let emailValue = email.value.trim();
//         let passwordValue = password.value.trim();





//         if(emailValue === '') {
//             formErrors.push('Email is required');
//             setErrorFor(email, 'Email is required');
//         } else if (!isEmail(emailValue)) {
//             formErrors.push('Email is invalid');
//             setErrorFor(email, 'Email is invalid');
//         } else {
//             setSuccessFor(email);
//         }
//         if(passwordValue === '') {
//             formErrors.push('Password is required');
//             setErrorFor(password, 'Password is required');
//         }else {
//             setSuccessFor(password);
//         }



//     }

//     function setErrorFor(input, message) {
//         let formControl = input.parentElement;
//         let small = formControl.querySelector('small');
//         formControl.className = 'form-group form-control-validation error col-12';
//         small.innerText = message;
//     }

//     function setSuccessFor(input) {
//         let formControl = input.parentElement;
//         formControl.className = 'form-group  form-control-validation success col-12';
//     }

//     function isEmail(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     }
// }

// reviewForm();
// function reviewForm() {
// 	let reviewForm = document.getElementById('reviewFormValidation');
//     let fullName = document.getElementById('full_name');
//     let email = document.getElementById('email');
//     let phone = document.getElementById('phone');
//     let position = document.getElementById('position');

//     let review = document.getElementById('review');




//     let formErrors = [];

//     reviewForm.addEventListener('submit', e => {
//         checkInputs();
//         if (formErrors.length) {
//             e.preventDefault();
//         }
//     });

//     function checkInputs() {
//         formErrors = [];
//         // trim to remove the whitespaces

//         let fullNameValue = fullName.value.trim();
//         let phoneValue = phone.value.trim();
//         let emailValue = email.value.trim();
//         let positionValue = position.value.trim();
//         let reviewValue = review.value.trim();



//         if (fullNameValue === '') {
//             formErrors.push('Full Name is required');
//             setErrorFor(fullName, 'Full Name is required');
//         } else {
//             setSuccessFor(fullName);
//         }
// 		if (phoneValue === '') {
//             formErrors.push('Phone is required');
//             setErrorFor(phone, 'Phone is required');
//         } else {
//             setSuccessFor(phone);
//         }
// 		if (emailValue === '') {
//             formErrors.push('Email is required');
//             setErrorFor(email, 'Email is required');
//         } else if (!isEmail(emailValue)) {
//             formErrors.push('Email is invalid');
//             setErrorFor(email, 'Email is invalid');
//         } else {
//             setSuccessFor(email);
//         }
//         if (positionValue === '') {
//             formErrors.push('Position is required');
//             setErrorFor(position, 'Position is required');
//         } else {
//             setSuccessFor(position);
//         }
//         if (reviewValue === '') {
//             formErrors.push('Review is required');
//             setErrorFor(review, 'Review is required');
//         } else {
//             setSuccessFor(review);
//         }

        
//     }

//     function setErrorFor(input, message) {
//         let formControl = input.parentElement;
//         let small = formControl.querySelector('small');
//         formControl.className = 'form-group form-control-validation error';
//         small.innerText = message;
//     }

//     function setSuccessFor(input) {
//         let formControl = input.parentElement;
//         formControl.className = 'form-group  form-control-validation success';
//     }
// 	function isEmail(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     }
// }