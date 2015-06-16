# Ampersand Collection Fluxible Mixin

This module implements the `dehydrate` and `rehydrate` methods for
[Ampersand.js][] states and models to be used as [Fluxible][fluxible] Stores.

## Install

```sh
npm install --save ampersand-model-fluxible-mixin
```

## Usage

Define your collection with the mixin and set the `storeName` for Fluxible:

```js
// MyModel.js

var MyModel = require("./MyModel");
var Collection = require("ampersand-collection");
var mixin = require("ampersand-collection-fluxible-mixin");

var MyCollection = Collection.extend(mixin, {
  model: MyModel
});

MyCollection.storeName = "MyCollection";

module.exports = MyCollection;
```

Then, register your model with Fluxible:

```js
// app.js

var Fluxible = require("fluxible");
var MyCollection = require("./MyCollection");

var app = new Fluxible({ /* options... */ });

app.registerStore(MyCollection);

module.exports = app;
```

You may then use Fluxible according to the [API][fluxible-api].

## License

MIT

[Ampersand.js]: http://ampersandjs.com
[fluxible]: http://fluxible.io
[fluxible-api]: http://fluxible.io/api/stores.html
