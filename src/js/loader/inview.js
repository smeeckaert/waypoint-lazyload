var LoaderInview = LoaderInview || (function () {

        var loader = new LoaderInterface();
        loader.query = "img[data-inview-src]";
        loader.loadElement = function (element, callbacks) {
            var selfElement = element;
            var wp = new Waypoint.Inview({
                element: selfElement,
                enter: function (direction) {
                    if (selfElement.attributes['data-inview-src']) {
                        selfElement.src = selfElement.attributes['data-inview-src'].value;
                        delete selfElement.removeAttribute('data-inview-src');
                        loader.executeCallbacks(element, callbacks);
                        wp.destroy();
                    }
                }
            });
        };
        return loader;
    });

if (typeof LazyLoad) {
    LazyLoad.register('inview', new LoaderInview());
}