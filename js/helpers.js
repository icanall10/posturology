(function ($) {

    var cache = {}, uuid = 0;

    $.fn.once = function (id, fn) {
        if (typeof id != 'string') {
            // Generate a numeric ID if the id passed can't be used as a CSS class.
            if (!(id in cache)) {
                cache[id] = ++uuid;
            }
            // When the fn parameter is not passed, we interpret it from the id.
            if (!fn) {
                fn = id;
            }
            id = 'jquery-once-' + cache[id];
        }
        // Remove elements from the set that have already been processed.
        var name = id + '-processed';
        var elements = this.not('.' + name).addClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };

    window.fbAsyncInit = function () {
        FB.init({
            appId: '2544617742482087',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v5.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    postToFeed = function (title, desc, url, image) {
        var obj = {
            method: 'feed',
            link: url,
            picture: image,
            name: title,
            description: desc
        };

        function callback(response) {
        }

        FB.ui(obj, callback);
    };

    zeroPad = function(num, count) {
        var numZeropad = num + '';
        while(numZeropad.length < count) {
            numZeropad = "0" + numZeropad;
        }
        return numZeropad;
    };

    isTabletOrMobile = function(){
        return (isTablet() || isMolbile());
    }

    isMolbile = function(){
        return ($(window).width() <= 768);
    }

    isTablet = function(){
        return ($(window).width() > 768 && $(window).width() <= 1800);
    }

})(jQuery);