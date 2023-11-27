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


        $('.twenty')
            .once('twenty')
            .on('runTwenty', function () {
                $(this)
                    .once('twenty-loaded')
                    .twentytwenty({
                        default_offset_pct: 0.5,
                        before_label: '',
                        after_label: '',
                        no_overlay: true,
                        click_to_move: false
                    });
            })
            .each(function () {
                let $this = $(this);
                let images = $this.find('img');
                let count = images.length;
                let loadedCount = 0;

                images.one('load', function () {
                    loadedCount++;

                    if (loadedCount === count) {
                        $this.trigger('runTwenty');
                    }
                });

                images.each(function () {
                    if (this.complete) {
                        $(this).trigger('load');
                    }
                });

                let i = 0;
                let part = 1000;
                let duration = 10000;

                let interval = setInterval(function () {
                    i += part;

                    $(window).resize();

                    if (i >= duration) {
                        clearInterval(interval);
                    }
                }, part);
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);