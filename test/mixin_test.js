"use strict";

var assert = require("assert");
var models = require("./models");

describe("Ampersand Collection Fluxible Mixin", function () {

  it("should dehydrate a simple collection", function () {
    var model = new models.SimpleCollection([
      {foo: "bar"}, {foo: "baz"}
    ]);
    assert.deepEqual(model.dehydrate(), [
      {foo: "bar"}, {foo: "baz"}
    ]);
  });

  it("should rehydrate a simple collection", function () {
    var model = new models.SimpleCollection();
    model.rehydrate([
      {foo: "bar"}, {foo: "baz"}
    ]);
    assert.deepEqual(model.serialize(), [
      {foo: "bar"}, {foo: "baz"}
    ]);
  });

  it("should dehydrate a complex collection", function () {
    var model = new models.ComplexCollection([
      {foo: "bar"}, {foo: "baz"}
    ]);
    assert.deepEqual(model.dehydrate(), [
      {foo: "dehydrate"}, {foo: "dehydrate"}
    ]);
  });

  it("should rehydrate a complex collection", function () {
    var model = new models.ComplexCollection();
    var state = [{foo: "bar"}, {foo: "baz"}];
    model.rehydrate(state);
    assert.deepEqual(model.serialize(), [
      {foo: "rehydrate"}, {foo: "rehydrate"}
    ]);
  });

});
