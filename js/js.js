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
                let menu = $(this).closest('.menu');
                let li = $(this).closest('li');

                menu
                    .find('li')
                    .not(li)
                    .find('ul')
                    .removeClass('open');

                let ul = li.find('ul');

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
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        autoWidth: true,
                        margin: 20,
                    },
                    768: {
                        items: 3,
                        margin: 30
                    },
                    1800: {
                        items: 3
                    }
                }
            });


        $('.contacts-page .map')
            .once(function () {
                ymaps.ready(function () {
                    let coords = [55.760539, 37.599766];

                    let map = new ymaps.Map('contacts-page-map', {
                        center: coords,
                        zoom: 16,
                        controls: ['zoomControl']
                    }, {
                        searchControlProvider: 'yandex#search'
                    });

                    map.behaviors.disable('scrollZoom');

                    let placemark = new ymaps.Placemark(coords, {
                        hintContent: 'г. Москва, м. Пушкинская, Тверской бульвар, д. 13, стр. 1, под. 9',
                        balloonContent: 'г. Москва, м. Пушкинская, Тверской бульвар, д. 13, стр. 1, под. 9'
                    });

                    map.geoObjects.add(placemark);
                });
            });


        $('.procedure-menu-block > ul > li')
            .children('a, span')
            .once()
            .click(function () {
                if (isTabletOrMobile()) {
                    let wrapper = $(this).closest('.procedure-menu-block');
                    let li = $(this).closest('li');
                    let ul = li.children('ul');

                    wrapper
                        .find('li')
                        .not(li)
                        .removeClass('open');

                    if (ul.length) {
                        li.toggleClass('open');

                        return false;
                    }
                }
            });


        $('.mobile-menu-content li.has-children > a')
            .once()
            .click(function () {
                $(this)
                    .closest('li')
                    .toggleClass('open');

                return false;
            });


        $('[data-mobile-menu-toggle]')
            .once()
            .click(function () {
                $('[data-mobile-menu]').toggle();
            });


        $('.tabs.owl-carousel')
            .once()
            .owlCarousel({
                autoWidth: true,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        margin: 20
                    },
                    768: {
                        margin: 30
                    },
                    1800: {
                        margin: 50
                    }
                }
            });


        $('.footer-block .menu .name')
            .once()
            .click(function () {
                if (isTabletOrMobile()) {
                    $(this)
                        .closest('.menu')
                        .toggleClass('open');
                }
            });


        $('.promo-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                nav: true,
                dots: true
            });


        $('[data-mobile-procedure-menu-toggle]')
            .once('mobile-procedure-menu-toggle')
            .click(function () {
                $('[data-mobile-procedure-menu]').toggle();

                return false;
            });


        $('.mobile-procedure-menu .menu > ul > li > a')
            .once()
            .click(function () {
                $(this)
                    .closest('li')
                    .toggleClass('open');

                return false;
            });


        $('[data-tabs-link]')
            .once('tabs-link')
            .click(function () {
                let key = $(this).attr('data-tabs-link');
                let wrapper = $(this).closest('[data-tabs]');

                wrapper.find('[data-tabs-content]').removeClass('active');
                wrapper.find('[data-tabs-content="' + key + '"]').addClass('active');

                wrapper.find('[data-tabs-link]').removeClass('active');
                wrapper.find('[data-tabs-link="' + key + '"]').addClass('active');

                return false;
            });

    }


    $(document).click(function (event) {
        let selector = '.header-block .menu li ul';

        $target = $(event.target);

        if (!$target.closest(selector).length &&
            $(selector).is(":visible")) {
            $(selector).removeClass('open');
        }

        if (isTabletOrMobile()) {
            let selector = '.procedure-menu-block > ul > li';

            if (!$target.closest(selector).length &&
                $(selector).is(":visible")) {
                $(selector).removeClass('open');
            }
        }
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);