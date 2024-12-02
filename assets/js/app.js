document.addEventListener("DOMContentLoaded", function(event) {

    // Auto Enquiry Modal
    //if (window.innerWidth > 800) { setTimeout(function(){ $('#enqModal').modal('show') }, 5000); }

    // Slider Config
    $(".carousel-inner .carousel-item").first().addClass("active");
    // Tab Config
    $("#pills-tab-pricetable .nav-link").first().addClass("active");
    $("#pills-tabpriceContent .tab-pane").first().addClass("show active");
    $("#pills-tab-floorplan .nav-link").first().addClass("active");
    $("#pills-tabfloorplanContent .tab-pane").first().addClass("show active");
    $("#pills-tabami .nav-link").first().addClass("active");
    $("#pills-tabamiContent .tab-pane").first().addClass("show active");
    $("#pills-tabgal .nav-link").first().addClass("active");
    $("#pills-tabgalContent .tab-pane").first().addClass("show active");
    $("#pills-tabconn .nav-link").first().addClass("active");
    $("#pills-tabconnContent .tab-pane").first().addClass("show active");

    // User Inactivity Enquiry Modal
    /* var interval;
    $(document).on('mousemove keyup keypress', function () {
      clearTimeout(interval);
      settimeout();
    });
    function settimeout() {
      interval = setTimeout(function () {
        $('#enqModal').modal('show');
      }, 30000)
    } */

    // Slider
    $('.ami-2').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        rewind: true,
        margin: 10,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('.ami-3').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                mouseDrag: false,
            }
        }
    });
    $('.ami-4').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 3,
                mouseDrag: false,
            }
        }
    });
    $('.gal-3').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        smartSpeed: 1500,
        nav: true,
        dots: false,
        items: 1
    });
    $('.loc-con').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        rewind: true,
        margin: 0,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

});

// Navigation
$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

// Enquiry Modal
$('.enqModal').click(function() {
    var Type = $(this).data("form");
    var Title = $(this).data("title");
    var Btn = $(this).data("btn");
    var Highlights = $(this).data("form-highlight-hide");
    if ($(this).data("redirect")) {
        var RedirectCookie = $(this).data("redirect");
        if (RedirectCookie == 'brochure' || RedirectCookie == 'pricesheet') {
            var RedirectFileCookie = $(this).data("redirect-file");
        }
    } else {
        var RedirectCookie = "enquire";
    }
    var Enquiry = $(this).data("enquiry");
    $('#enqModal .modal-title').html(Title);
    $('#enqModal .micro-form-btn').text(Btn);
    $('#enqModal #enquireName').val(Enquiry);
    if (Type == "sm" || Type == "md" || Type == "lg") {
        $('#enqModal .modal-head').removeClass('d-none');
        $('#enqModal .modal-logo, #enqModal .form-md, #enqModal .form-lg, #enqModal .modal-call-btn, .auto-offer').addClass('d-none');
    }
    if (Type == "sm") {
        $("#enqModal .form-md .micro-form-field").removeAttr("required", "");
    }
    if (Type == "md") {
        $('#enqModal .modal-head, #enqModal .form-md').removeClass('d-none');
        $('#enqModal .form-lg').addClass('d-none');
        $("#enqModal .form-md .micro-form-field").attr("required", "");
    }
    if (Type == "lg") {
        $('#enqModal .modal-head, #enqModal .form-md, #enqModal .form-lg').removeClass('d-none');
        $("#enqModal .form-md .micro-form-field").attr("required", "");
    }
    if (RedirectCookie) {
        setCookie('redirectCookie', RedirectCookie);
        if (RedirectCookie == 'brochure') {
            setCookie('redirectFileCookie', RedirectFileCookie);
            $('#modalRBEnq').addClass('d-none');
            $('#modalRBEnqBro').removeClass('d-none');
            $('#modalRBEnqCol').removeClass('d-none');
            $('#enqModal .close').css("color", "#fff");
            $('#modalRBEnqCol').removeClass('col-md-4');
            $('#modalRBEnqCol').addClass('col-md-5');
            $('#enqModal .modal-dialog.enq-modal').addClass('enq-modal-bro');
        } else {
            $('#modalRBEnqBro').addClass('d-none');
            $('#modalRBEnq').removeClass('d-none');
            $('#modalRBEnqCol').removeClass('d-none');
            $('#enqModal .close').css("color", "#fff");
            $('#modalRBEnqCol').removeClass('col-md-5');
            $('#modalRBEnqCol').addClass('col-md-4');
            $('#enqModal .modal-dialog.enq-modal').removeClass('enq-modal-bro');
        }
        if (RedirectCookie == 'pricesheet') {
            setCookie('redirectFileCookie', RedirectFileCookie);
        }
    }
    if (Highlights) {
        $('#modalRBEnqCol').addClass('d-none');
        $('#enqModal .close').css("color", "#000");
    }
});

// Load International Telephone Input
$('form :input[name=mobile]').each(function() {
    $(this).intlTelInput({
        initialCountry: countryCode,
        preferredCountries: ["in"]
    });
});
$(".intTelInput").keyup(function() {
    var intTelInputId = $(this).attr("id");
    var contryCode = $('#' + intTelInputId).intlTelInput('getSelectedCountryData').dialCode;
    var mobileNo = $('#' + intTelInputId).val();
    if (contryCode == null) {
        $(':input[name=fullMobileNo]').val(mobileNo);
    } else {
        $(':input[name=fullMobileNo]').val('+' + contryCode + mobileNo);
    }
});

// Cookies
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Read more
$('.more').click(function(e) {
    e.preventDefault();
    $(this).text(function(i, t) {
        return t == 'Read less' ? 'Read more' : 'Read less';
    }).prev('.more-cont').slideToggle()
});

// Virtual Tour Iframe - Enquiry
const vtIframeEnquiry = (e, src, sec = 5) => {
    if (src) {
        $(e).empty().append('<iframe frameborder="0" class="d-video" allowfullscreen="" sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation" allow="autoplay" src="' + src + '?autoplay=1&rel=0&end=' + sec + '"></iframe>');
        $timeOut = (sec * 1000) + 2000;
        setTimeout(() => {
            $('#enqModal').modal('show');
            $(e).addClass('block-iframe');
        }, $timeOut);
    }
}