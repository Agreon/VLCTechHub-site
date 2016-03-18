import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(){
    return 'Empleos tecnológicos';
  },
  model: function(){
    return this.store.peekAll('job');
  },
  actions: {
    expand: function(job){
      this.transitionTo('job.list.detail', job);
    },
    collapse: function(){
      this.transitionTo('job.list');
    },
    willTransition: function(){
      this.controller.set('selected', null);
    }
  }
});
