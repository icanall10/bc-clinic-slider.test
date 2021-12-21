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
            .once('twenty')
            .twentytwenty({
                default_offset_pct: 0.5, // How much of the before image is visible when the page loads
                before_label: '',
                after_label: '',
                no_overlay: true,
                click_to_move: false
            });


        $('.twenty')
            .once('twenty', function () {
                let $this = $(this);

                let img = $this.find('img');

                let count = img.length;
                let loadedCount = 0;

                img.on('load', function(){
                    loadedCount++;

                    if (loadedCount >= count) {
                        $this.once('twenty-loaded').twentytwenty({
                            default_offset_pct: 0.5,
                            before_label: '',
                            after_label: '',
                            no_overlay: true,
                            click_to_move: false
                        });
                    }
                });
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);