'use strict';

define([
  'underscore',
  'app',
  'backbone',
  'marionette',
  'templates'
], function (_, App, Backbone, Marionette, JST) {
  return Marionette.ItemView.extend({
    template: JST['<%= templatePath %>'],

    events: {
      'click button.create': 'createItem'
    },

    initialize: function () {
      this.model.set('created', Date.now());
    },

    createItem: function (e) {
      e.preventDefault();

      var data = _.object(_.map(this.$('form').serializeArray(), _.values));
      this.model.set(data);

      App.vent.trigger(App.msg.<%= featureNameUpper %>.CREATE_ITEM, this.model);
    }
  });
});
