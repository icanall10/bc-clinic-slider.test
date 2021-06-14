(function ($) {

    function behaviors() {


        $('.twenty-slider.owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                mouseDrag: false,
                touchDrag: false,
                nav: false,
                dots: true
            });

        $('.twenty-slider .twenty')
            .once()
            .twentytwenty({
                default_offset_pct: 0.5, // How much of the before image is visible when the page loads
                before_label: '',
                after_label: '',
                no_overlay: true,
                click_to_move: false
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);