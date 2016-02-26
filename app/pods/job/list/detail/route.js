import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return model.get('title');
  },
  model: function(params){
    return this.modelFor('job.list').findBy('id', params.job_id);
  },
  setupController: function(controller, model) {
    this.controllerFor('job.list').set('selected', model);
    this._super.apply(this, arguments);
  }
});
