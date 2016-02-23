var LoaderSimple = LoaderSimple || (function () {

        var loader = new LoaderInterface();
        loader.query = "img[data-src]";
        loader.loadElement = function (element, callbacks) {
            element.src = element.attributes['data-src'].value;
            delete element.removeAttribute('data-src');
            loader.executeCallbacks(element, callbacks);
        };
        return loader;
    });

if (typeof LazyLoad) {
    LazyLoad.register('simple', new LoaderSimple());
}