(function ($) {

    function behaviors() {

        $('[data-ui-dialog-link]')
            .once('ui-dialog')
            .click(function () {
                var $this = $(this);
                var code = $this.attr('data-ui-dialog-link');
                var orderName = $this.attr('data-order-name');

                var dialog = $('[data-ui-dialog="' + code + '"]');

                if (!dialog.length) return false;

                if (orderName) {
                    dialog.find('input[name="order_name"]').val(orderName);
                }

                var width = dialog.attr('data-ui-dialog-width');
                var title = dialog.attr('data-ui-dialog-title');
                var className = dialog.attr('data-ui-dialog-class');

                dialog.dialog({
                    width: width,
                    title: title,
                    modal: true,
                    dialogClass: className
                });

                behaviors();

                return false;
            });


        $('select:visible')
            .once('select2', function () {
                $(this).select2({
                    width: 'auto',
                    dropdownParent: $(this).closest('.form-group')
                });
            });


        $('a.colorbox')
            .once()
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


        $('.header-block .menu a')
            .once()
            .click(function () {
                let ul = $(this)
                    .closest('li')
                    .children('ul');

                if (ul.length) {
                    ul.toggleClass('open');

                    return false;
                }
            });


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                autoWidth: true,
                dots: true,
                nav: false
            });


        $('.contacts-block .map')
            .once(function () {
                ymaps.ready(function () {
                    let coords = [55.760545, 37.599463];

                    let map = new ymaps.Map('contacts-block-map', {
                        center: coords,
                        zoom: 16,
                        controls: ['zoomControl']
                    }, {
                        searchControlProvider: 'yandex#search'
                    });

                    map.behaviors.disable('scrollZoom');

                    let placemark = new ymaps.Placemark(coords, {
                        hintContent: '125009, г. Москва, м. Пушкинская, Тверской бульвар, д. 13, стр. 1, под. 9',
                        balloonContent: '125009, г. Москва, м. Пушкинская, Тверской бульвар, д. 13, стр. 1, под. 9'
                    });

                    map.geoObjects.add(placemark);
                });
            });


        $('.certificates-list.owl-carousel')
            .once()
            .owlCarousel({
                items: 3,
                nav: false,
                dots: true,
                pagination: true
            });


        $('.contacts-page .map')
            .once(function () {
                ymaps.ready(function () {
                    let coords = [55.760545, 37.599463];

                    let map = new ymaps.Map('contacts-page-map', {
                        center: coords,
                        zoom: 16,
                        controls: ['zoomControl']
                    }, {
                        searchControlProvider: 'yandex#search'
                    });
                });
            });

    }


    $(document).click(function (event) {
        let selector = '.header-block .menu li ul';

        $target = $(event.target);

        if (!$target.closest(selector).length &&
            $(selector).is(":visible")) {
            $(selector).removeClass('open');
        }
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);