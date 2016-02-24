var LoaderInview = LoaderInview || (function () {


        function elementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        }

        var loader = new LoaderInterface();
        loader.query = "img[data-inview-src]";
        loader.delay = false;
        loader.loadElement = function (element, callbacks, force) {
            var selfElement = element;
            if (elementInViewport(element) || force) {
                if (this.delay) {
                    setTimeout(function () {
                        loader.loadElement(element, callbacks);
                    }, 100);
                    return;
                }
                this.delay = true;
                if (selfElement.attributes['data-inview-src']) {
                    selfElement.src = selfElement.attributes['data-inview-src'].value;
                    delete selfElement.removeAttribute('data-inview-src');
                    loader.executeCallbacks(element, callbacks);
                }
                setTimeout(function () {
                    loader.delay = false;
                }, 50);
            }
            else {
                var wp = new Waypoint.Inview({
                    element: selfElement,
                    enter: function (direction) {
                        loader.loadElement(selfElement, callbacks, true);
                        wp.destroy();
                    }
                });
            }
        };
        return loader;
    });

if (typeof LazyLoad) {
    LazyLoad.register('inview', new LoaderInview());
}