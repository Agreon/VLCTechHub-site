export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('event.upcoming');
  },
  model: function() {}
});
