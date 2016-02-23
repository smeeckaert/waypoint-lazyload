var LazyLoad = LazyLoad || (function () {

        var loaders = {};
        var callbacks = {};

        return {
            load: function (type, selector) {
                items = document.querySelectorAll(selector);
                if (items) {
                    for (i = 0; i < items.length; i++) {
                        loaders[type].load(items[i], callbacks[type]);
                    }
                }
            },
            register: function (type, object) {
                loaders[type] = object;
                callbacks[type] = [];
            },
            callback: function (type, callback) {
                callbacks[type].push(callback);
            }
        }

    })();
