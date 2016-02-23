# Waypoint Lazyload

This library helps you create a simple Lazy Load using [Waypoint](http://imakewebthings.com/waypoints/).

There is some really basic lazy loading available, as well as the "Inview" loading allowing you to lazy load anything that
falls into the viewport only.

There is no extra dependancies.

You can find the library in the ```dist/``` folder.

## How to use

The most simple usage is to include ```waypoint.lazyload.min.js```.

And put this markup in your code:

```html
<img data-src="http://lorempixel.com/401/203/">
```

Then just call this in javascript

```js
LazyLoad.load('simple', 'body');
```

There is a light version called lazyload.min.js that doesn't ship with Waypoint nor the 'inview' loader.

## LazyLoad

The object LazyLoad expose few interesting methods.

### register(type, object)

Register an object as Loader with alias ```type```.

### load(type, selector)

Will use the ```type``` loader to lazy load elements inside the ```selector```.

### callback(type, callback)

Add a callback that will be call everytime an element is loaded.

## Callbacks

Callbacks take a DOM element as a parameter and will be called when the element is loaded.

### Example

This example will lazy load images in the viewport and log a console message when each image is loaded.

```js
LazyLoad.callback('inview', function (element) {
    console.log("Lazy Loaded"); // Will be called when the image is in viewport and loaded
});

LazyLoad.load('inview', 'body');
```

## Loaders

### simple

This loader will take every ```[data-src]``` elements and replace the ```src``` property by its value.

### inview

This loader will take every ```[data-inview-src]``` elements and replace the ```src``` property by its values when the
element enter the viewport.

## License

The code is in the Public Domain.