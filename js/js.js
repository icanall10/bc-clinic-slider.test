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
                let img = $this.find('img');
                let count = img.length;
                let loadedCount = 0;
                let completedCount = 0;

                img.on('load', function () {
                    loadedCount++;

                    if (loadedCount === count) {
                        $this.trigger('runTwenty');
                    }
                });

                for (const [key, value] of Object.entries(img)) {
                    if (value.complete) continue;

                    completedCount++;
                }

                if (completedCount === count) {
                    $this.trigger('runTwenty');
                }
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);