
$(document).ready(function () {
    $(document).ready(function () {
        $('.stat').each(function () {
            let $this = $(this);
            let countTo = $this.attr('data-count');
            $({ countNum: 0 }).animate({ countNum: countTo }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum) + "+");
                },
                complete: function () {
                    $this.text(this.countNum + "+");
                }
            });
        });
    });

    $('.projects_detail').slick({
        dots: false,
        arrows: false,
        margin: 10,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.news_slide').slick({
        dots: false,
        arrows: false,
        margin: 10,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
