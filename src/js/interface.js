var LoaderInterface = LoaderInterface || (function () {

        return {
            query: '',
            load: function (element, callbacks) {
                var items = element.querySelectorAll(this.query);
                var self = this;
                if (items) {
                    for (var i = 0; i < items.length; i++) {
                        requestAnimationFrame((function (count) {
                            return function () {
                                self.loadElement(items[count], callbacks);
                            };
                        })(i));
                    }
                }
            },
            executeCallbacks: function (element, callbacks) {
                for (i = 0; i < callbacks.length; i++) {
                    callbacks[i](element);
                }
            },
            loadElement: function (element, callbacks) {
                console.error("This method need to be extended");
            }
        }
    });
