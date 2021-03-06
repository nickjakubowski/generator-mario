'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  '<%= dest %>'
], function ($, _, Backbone, <%= view %>) {

  describe('<%= view %>', function () {
    beforeEach(function () {
      this.model = new Backbone.Model({
        id: '1'
      });
      this.view = new <%= view %>({model: this.model});
      this.view.render();
    });

    it('render() should return the view object', function () {
      expect(this.view.render()).<%=assert.toequal%>(this.view);
    });<% if(!template) { %>
    it('id should equal 1', function () {
      expect(this.view.render().$('h2').text()).<%=assert.toequal%>('1');
    });<% } %>
  });
});
