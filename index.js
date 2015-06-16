"use strict";

/**
 * Ampersand Collection Fluxible Mixin implements the `dehydrate` and
 * `rehydrate` methods for Ampersand.js collections to be used as Fluxible
 * stores.
 */

module.exports = {

  /**
   * Serialize the model for sending state to the client.
   *
   * @return {Object}
   */

  dehydrate: function () {
    return this.models.map(function (it) {
      return it.dehydrate ? it.dehydrate() : it.serialize();
    });
  },

  /**
   * Restore the model state from the given state.
   *
   * @param {Object} state
   */

  rehydrate: function (state) {

    // handle rehydratable models
    var Model = this.model;
    if (Model && Model.prototype.rehydrate && Array.isArray(state)) {
      state = state.map(function (it) {
        var model = new Model();
        model.rehydrate(it);
        return model;
      });
    }

    // restore the state
    this.reset(state, {silent: true});
  }

};
