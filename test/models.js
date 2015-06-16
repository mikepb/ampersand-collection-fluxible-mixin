"use strict";

var mixin = require("..");

var AmpersandState = require("ampersand-state");
var AmpersandCollection = require("ampersand-collection");

var SimpleModel = exports.SimpleModel = AmpersandState.extend({
  props: {
    foo: "string"
  }
});

var ComplexModel = exports.ComplexModel = SimpleModel.extend({
  dehydrate: function () {
    return {foo: "dehydrate"};
  },
  rehydrate: function (state) {
    this.foo = "rehydrate";
  }
});

var SimpleCollection = exports.SimpleCollection =
AmpersandCollection.extend(mixin, {
  model: SimpleModel
});

var ComplexCollection = exports.ComplexCollection =
AmpersandCollection.extend(mixin, {
  model: ComplexModel
});
