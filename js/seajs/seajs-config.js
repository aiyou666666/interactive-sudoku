(function () {

    var timestamp = new Date().getTime();

    seajs.config({
        debug: false,
        map: [
            [/^.*$/, function (url) {
                if (url.indexOf('/js/app/') != -1) {
                    return url;
                }

                url += (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
                return url;
            }]
        ],
        alias: {
            'jquery': 'libs/jquery'
        },
        base: "./js"
    });


})();